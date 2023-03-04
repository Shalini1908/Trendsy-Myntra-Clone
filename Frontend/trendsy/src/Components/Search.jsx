import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
 
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useThrottle } from "../Hooks/Throttle";
import { getData } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { shortID } from "./short_key.generator";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [active, setActive] = useState();
  const [show, setShow] = useState(false);
  const scrollDiv = useRef([]);
  const navigate = useNavigate();

  //serach request call from here
  const handleSearch = async (searchTerm) => {
    console.log(searchTerm);
    const params = {
      q: searchTerm,
    };
    let data = await getData("/data/search", {params});

    if (data.length > 0) {
      setSuggestion(data);
    }
    setShow(true);
  };

  const throttledHandleSearch = useThrottle(handleSearch, 2000);

  const handleChange = (event) => {
    let newQuery = event.target.value;
    setQuery(newQuery);
    if (newQuery.length > 2) throttledHandleSearch(newQuery);
  };

  const handleSuggetion = (e) => {
    const suggestions = suggestion.length - 1;
    if (suggestions) {
      const scrollbox = scrollDiv.current;

      switch (e.keyCode) {
        case 38:
          if (active == null) {
            setActive(suggestions);
            break;
          }
          0 < active ? setActive(active - 1) : setActive(suggestions);
          break;
        case 40:
          active == null
            ? setActive(0)
            : suggestions > active
            ? setActive(active + 1)
            : setActive(0);
          break;
        case 13:
          if (suggestion.length > 0) {
            handleSelection(suggestion[active]);
          }
          break;
        default:
          return;
      }
    }
  };

  // Scroll to the selected item when its index changes
  useEffect(() => {
    const selected = scrollDiv.current[active];
    const parent = selected && selected.parentNode;
    if (!parent) return; // Check for parent element
    const visibleTop = parent.scrollTop;
    const visibleBottom = visibleTop + parent.clientHeight;
    const elementTop = selected.offsetTop;
    const elementBottom = elementTop + selected.offsetHeight;
    if (elementTop < visibleTop) {
      parent.scrollTop = elementTop;
    } else if (elementBottom > visibleBottom) {
      parent.scrollTop = elementBottom - parent.clientHeight;
    }
  }, [active]);

  const handleSelection = (result) => {
    const { ideal_for, title, _id } = result;
    navigate(`/products/${ideal_for}/${title}/${_id}`);
  };
  //console.log(scrollDiv);
  return (
    <HStack
      pos="relative"
      onKeyUp={handleSuggetion}
      w="full"
      fontSize={["xs", "sm", "md"]}
    >
      <InputGroup>
        <InputLeftElement children={<SearchIcon color="gray.500" />} />

        <Input
          variant="filled"
          color="gray"
          value={query}
          type="text"
          placeholder="Search for products,brands and more"
          onChange={handleChange}
        />
      </InputGroup>
      {show && (
        <Box
          align="start"
          pos="absolute"
          width="95%"
          top="50px"
          zIndex={10}
          boxShadow="md"
          left="-10px"
          bg="white"
        >
          <Box
            overflow="auto"
            maxH="300px"
            m="4px 0px 10px 10px "
            fontSize="xs"
            onMouseLeave={() => {
              setShow(false);
              setActive(null);
            }}
          >
            {suggestion.length > 0 ? (
              suggestion?.map((result, i) => (
                <Text
                  ref={(element) => (scrollDiv.current[i] = element)}
                  bg={active === i ? "blackAlpha.400" : "white"}
                  p=" 2px 4px"
                  key={shortID()}
                  cursor="pointer"
                  onClick={() => handleSelection(result)}
                  onMouseEnter={() => setActive(i)}
                >
                  {result.title}
                </Text>
              ))
            ) : (
              <Text>No result fond please try another</Text>
            )}
          </Box>
        </Box>
      )}
    </HStack>
  );
};

export default Search;
