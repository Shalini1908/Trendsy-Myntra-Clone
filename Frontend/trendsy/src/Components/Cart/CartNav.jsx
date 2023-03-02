import { Box,  HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../../Images/Trendsy-1.png"
import SecurePayImage from "../../Images/sprite-secure.png"
import { Link, useLocation } from 'react-router-dom'
const CartNav = () => {
    const location = useLocation();
    const page=location.pathname.slice(1)
 
  return (
    <HStack justify={["space-around" ]} m={["10px",null,"15px"]}>
        <Box h={["20px",null,"30px","50px"]} ><Link to="/"><Image src={logo} alt='Trendsy Logo' h="100%"/></Link></Box>
        <HStack gap={["2px",null,null,"4px",null,"7px"]} fontSize={["5px","7px","10px","xs"]}  >
            <Text fontWeight="700" letterSpacing= {["1px",null,"2px","3px","5px"]} color={page=="cart"?"green":"blackAlpha.600"}>BAG</Text>
            <Text letterSpacing={{ xl: "2px"}} >--------</Text>
            <Text fontWeight="700" letterSpacing= {["1px",null,"2px","3px","5px"]} color={page=="address"?"green":"blackAlpha.600"}>ADDRESS</Text>
            <Text letterSpacing={{ xl: "2px"}}>--------</Text>
            <Text fontWeight="700" letterSpacing={["1px",null,"2px","3px","5px"]}color={page=="payment"?"green":"blackAlpha.600"}>PAYMENT</Text>
        </HStack>
        <HStack h={["20px",null,"30px","40px"]}><Image src={SecurePayImage} alt='SecurePay' h="100%"/><Text fontSize={["5px","7px","10px","xs"]}>100% SECURE</Text></HStack>
        </HStack>
  )
}

export default CartNav