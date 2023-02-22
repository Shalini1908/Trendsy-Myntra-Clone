import React from 'react';
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
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';
import { FaRegUser } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import { HiOutlineShoppingBag } from 'react-icons/hi';
// import logo from '../Images/Trendsy-1.png';
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <Box boxShadow="2xl" p="15px" rounded="md" bg="white" >
      <Flex align="center">
        <Box>
          {/* <Image w="50px" src={logo} alt="Trednsy" /> */}
        </Box>
        <Spacer />
        <HStack spacing="4" fontWeight="600">
          <Text>MEN </Text>
          <Text>WOMEN</Text>
          <Text> KIDS</Text>
          <Text> HOME & LIVING</Text>
          <Text> BEAUTY</Text>
          <HStack spacing="1px">
            <Text>STUDIO</Text>

            <Text fontSize="10px" color="red" fontWeight="900">
              NEW
            </Text>
          </HStack>
        </HStack>
        <HStack>
          <InputGroup>
            <InputLeftElement children={<SearchIcon color="gray.500" />} />

            <Input
              variant="filled"
              fontSize="14px"
              w="500px"
              type="text"
              placeholder="Search for products,brands and more"
            />
          </InputGroup>
        </HStack>

        <HStack spacing="25px">
          <VStack>
            <FaRegUser />
            <Text fontSize="12px" fontWeight="700">
              Profile
            </Text>
          </VStack>
          <VStack>
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
      <Box >
      <Dropdown />
      </Box>
    </Box>
  );
};

export default Navbar;
