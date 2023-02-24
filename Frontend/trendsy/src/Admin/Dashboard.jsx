import { Grid, Card } from '@chakra-ui/react'
import React from 'react';
import {AiOutlineUser , AiFillDollarCircle} from "react-icons/ai"
import {BsCartCheckFill , BsFillBagFill} from "react-icons/bs"
import "./css/Admin.css"

export const Dashboard = () => {
  return (
 
     <Grid gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}  border={"1px solid teal"} gap="10px">
    <Card minW={{base:120,md:190}} minH={190} border={"1px solid blue"} backgroundColor={"red.100"}><BsCartCheckFill/></Card>
    <Card minW={{base:120,md:190}} minH={190}  border={"1px solid blue"} backgroundColor={"red.100"}><BsFillBagFill/></Card>
    <Card minW={{base:120,md:190}} minH={190} border={"1px solid blue"} backgroundColor={"red.100"}><AiOutlineUser/></Card>
    <Card minW={{base:120,md:190}} minH={190} border={"1px solid blue"} backgroundColor={"red.100"}><AiFillDollarCircle/></Card>

    </Grid>
  )
}
