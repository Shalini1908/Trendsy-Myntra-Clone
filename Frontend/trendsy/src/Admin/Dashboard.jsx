import { Grid, Card } from '@chakra-ui/react'
import React from 'react';
import "./css/Admin.css"

export const Dashboard = () => {
  return (
 
     <Grid gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}  border={"1px solid teal"} gap="10px">
    <Card minW={{base:120,md:190}} minH={190} border={"1px solid blue"} backgroundColor={"red.100"}></Card>
    <Card minW={{base:120,md:190}} minH={190}  border={"1px solid blue"} backgroundColor={"red.100"} ></Card>
    <Card minW={{base:120,md:190}} minH={190} border={"1px solid blue"} backgroundColor={"red.100"}></Card>
    <Card minW={{base:120,md:190}} minH={190} border={"1px solid blue"} backgroundColor={"red.100"}></Card>

    </Grid>
  )
}
