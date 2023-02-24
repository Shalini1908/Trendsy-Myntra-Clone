import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useThrottle } from '../Hooks/Throttle';
import { getData } from '../api';

const Search = () => {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [active, setActive] = useState();
  const [show,setShow]=useState(false)
  const scrollDiv = useRef([]);
  // const navigate = useNavigate();
  const handleSearch = async searchTerm => {
    let data = await getData('/search', { query: searchTerm });
    if(data.length>0){
    setShow(true)
    setSuggestion(data);
  }
  };

  const throttledHandleSearch = useThrottle(handleSearch, 1000);

  const handleChange = event => {
    let newQuery = event.target.value;
    setQuery(newQuery);
    if(newQuery.length>2)
    throttledHandleSearch(newQuery);
  };

  const handleSuggetion = e => {
    const suggestions = suggestion.length - 1;
    if (suggestions) {
      const scrollbox = scrollDiv.current;
      switch (e.keyCode) {
        case 38:
          console.log(scrollbox.scrollTop);
          if (active == null) {
            setActive(suggestions);
            break;
          }
          0 < active ? setActive(active - 1) : setActive(suggestions);
          break;
        case 40:
          if (active == null) {
            setActive(0);
            break;
          }
          suggestions > active ? setActive(active + 1) : setActive(0);
          break;
        case 13:
          handleSelection(suggestion[active].ID);
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

  const handleSelection = id => {
    console.log(id);
    //navigate(`/product/${id}`);
  };
  console.log(scrollDiv);
  return (
    <HStack w="500px" pos="relative" onKeyUp={handleSuggetion}>
      <InputGroup>
        <InputLeftElement children={<SearchIcon color="gray.500" />} />

        <Input
          variant="filled"
          fontSize="14px"
          color="gray"
          value={query}
          type="text"
          placeholder="Search for products,brands and more"
          onChange={handleChange}
        />
      </InputGroup>
     { show&&<Box
        maxH="300px"
        pos="absolute"
        width="95%"
        top="50px"
        zIndex={10}
        boxShadow="md"
        p="10px 20px"
        left="-10px"
        fontSize="sm"
        bg="white"
        overflow="auto"
        onMouseLeave={() => {setShow(false);setActive(null);}}
      >
        {suggestion?.map((result, i) => (
          <Text
            ref={element => (scrollDiv.current[i] = element)}
            bg={active === i ? 'blackAlpha.400' : 'white'}
            pb="3px"
            key={i + 730}
            cursor="pointer"
            onClick={() => handleSelection(result.ID)}
            onMouseEnter={() => setActive(i)}
          >
            {result.name}
          </Text>
        ))}
      </Box>}
    </HStack>
  );
};

export default Search;
