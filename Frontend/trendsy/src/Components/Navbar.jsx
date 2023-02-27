import React, { useState } from "react";
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
} from "@chakra-ui/react";

import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from "../Images/Trendsy-1.png";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";


import Search from './Search';
import { useSelector } from 'react-redux';

const navColor = {
  men: "tomato",
  women: "pink.700",
  kids: "red.400",
  "home & living": "#e5b230",
  beauty: "teal",
};

const Navbar = () => {

  const {isAuth,name}=useSelector((store)=>store)
  const [dropdown, setdropdown] = useState({
    status: false,
    category: "beauty",
  });

  const [hover, setHover] = useState(false);


  //  const isAuth = false;
  //  const name=""
  const handleNav = category => {

    const newDropdown = { status: true, category: category };
    setdropdown(newDropdown);
  };
  const handleDropdown = () => {
    setdropdown({ ...dropdown, status: false });
  };

  return (
    <Box
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      rounded="md"
      bg="white"
      position="relative"
    >
      <Flex align="center" justify="space-around">
        <Box ml="20px" onMouseEnter={handleDropdown}>
          <Image w="80px" src={logo} alt="Trendsy" />
        </Box>

        <HStack fontWeight="600" position="relative"  fontSize={[ "5px","7px","10px","xs",'sm']}>
          {Object.keys(navColor).map((category, i) => (
            <Link to={`/products/${category}`}>
            <Text
              key={700 + i}

             
              p={["10px 5px","20px 7px","30px 10px"]}

            
              onMouseEnter={() => handleNav(category)}
            >
              {category.toUpperCase()}
            </Text>
            </Link>
          ))}

          <Text  p="30px 10px" onMouseEnter={handleDropdown}>
           
            STUDIO
          </Text>
          <Text
            fontSize={["4px","6px","8px","9px"]}
            color="#ff7494"

            fontWeight="900"
            position="absolute"
            top="25px"
            right="-10px"
          >
            NEW
          </Text>
        </HStack>
        <Box onMouseLeave={() => setHover(false)} W={["200px","300px","500px"]}>
          <Search />
        </Box>

        <HStack spacing={["10px","15px","25px"]}>
          <VStack onMouseEnter={() => setHover(true)}>
            {!isAuth ? (
              <FaRegUser />
            ) : (
              <Avatar
                size="sm"
                name={name||"MK"}
                // src="https://bit.ly/ryan-florence"
              />
            )}
            <Text fontSize={[ "7px","10px","12px"]} fontWeight="700">
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
                  <Button variant="outline" size="sm" color="red">
                    LOGOUT
                  </Button>
                )}
              </VStack>
            )}
          </VStack>
          <VStack onMouseLeave={() => setHover(false)}>
            <GrFavorite />
            <Text fontSize={[ "7px","10px","12px"]} fontWeight="700">
              Wishlist
            </Text>
          </VStack>
          <Link to="/cart">
          <VStack>
            <HiOutlineShoppingBag />
            <Text fontSize={[ "7px","10px","12px"]} fontWeight="700">
              Bag
            </Text>
          </VStack>
          </Link>
        </HStack>
      </Flex>
      {dropdown.status && (
        <Box
          position="absolute"
          left="12%"
          w="70%"
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
    </Box>
  );
};

export default Navbar;
