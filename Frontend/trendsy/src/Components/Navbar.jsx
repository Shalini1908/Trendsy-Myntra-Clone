import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  VStack,
  Image,
  Spacer,
  Avatar,
  Button,
  Heading,
} from '@chakra-ui/react';
// import Link from "react-router-dom"

import { SearchIcon } from '@chakra-ui/icons';
import { FaRegUser } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import logo from '../Images/Trendsy-1.png';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { useThrottle } from '../Hooks/Throttle';
import { getData } from '../api';
const navColor = {
  men: 'tomato',
  women: 'pink.700',
  kids: 'red.400',
  'home & living': '#e5b230',
  beauty: 'teal',
};

const initialSuggest = { title: [], category: [], brand: [] };

const Navbar = () => {
  const [dropdown, setdropdown] = useState({
    status: false,
    category: 'beauty',
  });

  const [hover, setHover] = useState(false);

  const [suggestion, setSuggestion] = useState(initialSuggest);

 
  const isAuth = false;
  const handleNav = category => {
    const newDropdown = { status: true, category: category };
    setdropdown(newDropdown);
  };
  const handleDropdown = () => {
    setdropdown({ ...dropdown, status: false });
  };

   const handleSearch = async (e) => {
  //   const query = e.target.value;
  //   console.log(query);

  //   const result = await getData('/search', { query: query });
  //   //console.log(result);
  //  throttle()
   };
  const throttle = useThrottle(getData, 10000);
  console.log(throttle)
  return (
    <Box boxShadow="2xl" rounded="md" bg="white" position="relative">
      <Flex align="center" justify="space-around">
        <Box ml="20px" onMouseEnter={handleDropdown}>
          <Image w="80px" src={logo} alt="Trednsy" />
        </Box>

        <HStack fontWeight="600" position="relative">
          {Object.keys(navColor).map((category, i) => (
            <Text
              key={700 + i}
              fontSize={'sm'}
              p="30px 10px"
              onMouseEnter={() => handleNav(category)}
            >
              {category.toUpperCase()}
            </Text>
          ))}
          <Text fontSize={'sm'} p="30px 10px" onMouseEnter={handleDropdown}>
            STUDIO
          </Text>
          <Text
            fontSize="9px"
            color="tomato"
            fontWeight="900"
            position="absolute"
            top="25px"
            right="-10px"
          >
            NEW
          </Text>
        </HStack>
        <HStack onMouseLeave={() => setHover(false)}>
          <InputGroup>
            <InputLeftElement children={<SearchIcon color="gray.500" />} />

            <Input
              variant="filled"
              fontSize="14px"
              w="500px"
              type="text"
              placeholder="Search for products,brands and more"
              onChange={handleSearch}
            />
          </InputGroup>
        </HStack>

        <HStack spacing="25px">
          <VStack onMouseEnter={() => setHover(true)}>
            {!isAuth ? (
              <FaRegUser />
            ) : (
              <Avatar
                size="sm"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />
            )}
            <Text fontSize="12px" fontWeight="700">
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
                      {' '}
                      LOGIN / SIGNUP{' '}
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
            <Text fontSize="12px" fontWeight="700">
              Wishlist
            </Text>
          </VStack>
          <VStack>
            <HiOutlineShoppingBag />
            <Text fontSize="12px" fontWeight="700">
              Bag
            </Text>
          </VStack>
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
          // rounded="md"
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
