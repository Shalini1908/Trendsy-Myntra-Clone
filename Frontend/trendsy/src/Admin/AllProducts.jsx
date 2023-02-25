import React, { useState } from 'react';
import { Card, CardHeader, CardBody,  Heading, Stack, StackDivider, Box, Input, Button } from '@chakra-ui/react'
import axios from 'axios';

const AllProducts = () => {
const [title,setTitle]= useState("")
const [mrp,setMrp]= useState("")
const [stock,setStock]= useState("")


const addproduct= async()=>{

  const payload={
 title,
 mrp,
 stock

    
  }
let res = await axios.post(`https://wild-red-bunny-tux.cyclic.app/data/create`,payload)
console.log(res)
}


  return (
    <>
    <Card>
  <CardHeader>
    <Heading size='md'>Add Prodcuts</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
      
        <Input size={'md'} placeholder="Name of the Product" onChange={(e)=>setTitle(e.target.value)}></Input>
      </Box>
      <Box>
      
        <Input size={'md'} placeholder="Price" onChange={(e)=>setMrp(e.target.value)}></Input>
      </Box>
      <Box>
      
      <Input size={'md'}  placeholder="Stock" onChange={(e)=>setStock(e.target.value)}></Input>
      </Box>
      <Button onClick={addproduct}>Add</Button>
    </Stack>
  </CardBody>
</Card>
    
    </>
  )
}

export default AllProducts