import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  Image,
  Avatar,
  Button,
  Heading,
  useToast,
  Circle,
  useDisclosure,
  IconButton,
  Collapse,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from "../Images/Trendsy-1.png";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { shortID } from "./short_key.generator";

import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { LogoutFunctionSuccess, setCartData } from "../Redux/actions";
import { getData } from "../api";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";


const navColor = {
  men: "tomato",
  women: "pink.700",
  kids: "red.400",
  "home & living": "#e5b230",
  beauty: "teal",
};

const Navbar = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onToggle } = useDisclosure();
  //const { isAuth, name } = useSelector((store) => store);
  const { cartData } = useSelector((store) => store);
  // console.log(cartData)
  let isAuth = false;
  const name = JSON.parse(localStorage.getItem("trendsyToken") || "{}")?.name;
  if (name) {
    isAuth = true;
  }
  console.log(name);

  const [dropdown, setdropdown] = useState({
    status: false,
    category: "beauty",
  });

  const [hover, setHover] = useState(false);

  const handleNav = (category) => {
    const newDropdown = { status: true, category: category };
    setdropdown(newDropdown);
  };
  const handleDropdown = () => {
    setdropdown({ ...dropdown, status: false });
  };

  const handleLogout = () => {
    dispatch(LogoutFunctionSuccess());
    localStorage.removeItem("trendsyToken");
    toast({
      position: "top",
      title: "Thanks, for using TRENDSY",
      description: "You are logged out",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    getData("/cart", { data: [] }).then((data) => {
      // handle successful response
      if (data) {
        dispatch(setCartData(data));
      }
    });
  }, []);

  return (
    <Box
      // boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      rounded="md"
      bg="white"
      position="sticky"
      p={["5px 10px", null, null, "5px 40px", "5px 50px"]}
      zIndex={"99"}
      top="0px"
    >
      {/* justify={{ base: 'start', md: 'start' }} */}
      <HStack
        gap={{ base: "10px", md: "30px", xl: "60px" }}
        justifyContent={{
          base: "start",
          lg: "space-evenly",
          "2xl": "space-around",
        }}
      >
        <Flex
          // flex={{ base: 1, md: 'auto' }}

          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={4} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Link to="/">
          <Box onMouseEnter={handleDropdown}>
            <Image
              w={["40px", null, "50px", null, "80px"]}
              src={logo}
              alt="Trendsy"
            />
          </Box>
        </Link>

        <HStack
          fontWeight="600"
          position="relative"
          color={"#3e4152"}
          fontSize={{ base: "10px", xl: "sm", "2xl": "md" }}
          justify="start"
          display={{ base: "none", lg: "flex" }}
        >
          {Object.keys(navColor).map((category, i) => (
            <Link
              to={`/products/${category.replace(/\s&\s*/g, "")}`}
              key={shortID()}
            >
              <Text
                fontWeight={750}
                p={["10px 3px", null, "20px 7px"]}
                fontFamily={
                  'Assistant, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;'
                }
                onMouseEnter={() => handleNav(category)}
                _hover={{
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    backgroundColor: navColor[category],
                    height: " 3px",
                    //  top: "100%",
                    width: "110%",
                    bottom: "10%",
                    right: "-5px",
                    transition: "width 1s ease-in-out",
                    // transform: "translate(-50%, -50%)",
                  },
                }}
                position="relative"
              >
                {category.toUpperCase()}
              </Text>
            </Link>
          ))}

          <Text
            p={["10px 3px", null, "20px 7px"]}
            onMouseEnter={handleDropdown}
            fontWeight={750}
            cursor="pointer"
          >
            STUDIO
          </Text>
          <Text
            fontSize={["4px", "6px", "8px", "9px"]}
            color="#ff7494"
            fontWeight="black"
            position="absolute"
            top="17px"
            right="-14px"
          >
            NEW
          </Text>
          {dropdown.status && (
            <Box
              position="absolute"
              top="65px"
              h="450px"
              left="-50px"
              w="1050px"
              zIndex={10}
              boxShadow="md"
              p="20px"
              bg="white"
              onMouseLeave={handleDropdown}
            >
              <Dropdown
                category={dropdown.category}
                color={navColor[dropdown.category]}
              />
            </Box>
          )}
        </HStack>
        {/* {[ "200px", "300px", null, "500px"]} */}
        <HStack spacing={["10px", "15px", "25px"]}>
          <Box
            w={[
              "250px",
              "550px",
              "400px",
              "250px",
              null,
              "400px",
              null,
              "500px",
            ]}
            onMouseLeave={() => setHover(false)}
          >
            <Search />
          </Box>
          <VStack
            display={{ base: "none", md: "flex" }}
            cursor="pointer"
            onMouseEnter={() => setHover(true)}
          >
            {!isAuth ? (
              <FaRegUser />
            ) : (
              <Avatar
                size="xs"
                name={name || "MK"}
                // src="https://bit.ly/ryan-florence"
              />
            )}
            <Text fontSize={["7px", "10px", "12px"]} fontWeight="700">
              Profile
            </Text>
            {hover && (
              <VStack
                zIndex={10}
                boxShadow="md"
                p="15px"
                rounded="md"
                top="70px"
                bg="white"
                position="absolute"
                onMouseLeave={() => setHover(false)}
              >
                <Heading size="xs">Welcome</Heading>
                <Text size="xl">To access account and manage orders</Text>
                {!isAuth ? (
                  <Link to="/login">
                    <Button size="sm" variant="outline" colorScheme="pink">
                      LOGIN / SIGNUP
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    color="red"
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </Button>
                )}
              </VStack>
            )}
          </VStack>
          <Link to={"/wishlist"}>
            <VStack
              display={{ base: "none", md: "flex" }}
              onMouseLeave={() => setHover(false)}
            >
              <GrFavorite />
              <Text fontSize={["7px", "10px", "12px"]} fontWeight="700">
                Wishlist
              </Text>
            </VStack>
          </Link>
          <Link to="/cart">
            <VStack
              position="relative"
              fontSize="12px"
              display={{ base: "none", md: "flex" }}
            >
              <HiOutlineShoppingBag size="20px" />
              {cartData.length && (
                <Circle
                  position="absolute"
                  top="-15px"
                  right="-10px"
                  bg="tomato"
                  color="white"
                  size="20px"
                  fontWeight="800"
                >
                  {cartData.length}
                </Circle>
              )}
              <Text fontWeight="700">Bag</Text>
            </VStack>
          </Link>
        </HStack>
      </HStack>
      <Collapse w="200px" in={isOpen} animateOpacity>
        <VStack
          align="start"
          bg={useColorModeValue("white", "gray.800")}
          p={4}
          display={{ lg: "none" }}
          w="200px"
          textAlign={"start"}
          onClick={onToggle}
        >
          {Object.keys(navColor).map((category, i) => (
            <Box
              key={shortID()}
              fontSize="sm"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Link to={`/products/${category.replace(/\s&\s*/g, "")}`}>
                <Text
                  fontWeight={600}
                  // p={["10px 5px", "20px 7px", "30px 10px"]}
                  // onMouseEnter={() => handleNav(category)}
                >
                  {category.toUpperCase()}
                </Text>
              </Link>
            </Box>
          ))}
          <VStack align="start" textAlign={"start"}>
            <Link to="/cart">
              <Text fontWeight={600}>Cart</Text>
            </Link>
            <Box>
              {!isAuth ? (
                <Link to="/login">
                  <Button size="sm" variant="outline" colorScheme="pink">
                    LOGIN
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  color="red"
                  onClick={handleLogout}
                >
                  LOGOUT
                </Button>
              )}
            </Box>
          </VStack>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
