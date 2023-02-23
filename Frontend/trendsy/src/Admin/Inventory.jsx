import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Input,
    CloseButton,
  } from '@chakra-ui/react'


import React from 'react'

const Inventory = () => {
  return (
    
    <Box marginTop={10}>
    <TableContainer>
  <Table variant="simple">
   
    <Thead border={"1px solid white"}>
      <Tr>
        <Th display={"flex"}>To convert
        {/* <Input type={"search"} m={2} w={"140px"} h={25}></Input><CloseButton/></Th> */}
     </Th>
        <Th>into </Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>multiply by</Th>
        <Th>into</Th>
  
        
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
   
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        
      </Tr>
      <Tr>
      
      <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
      </Tr>
      <Tr>
   
      <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
      </Tr>
    </Tbody>
    <Tbody>
      <Tr>

      <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
      </Tr>
      <Tr>
  
      <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
       
      </Tr>
      <Tr>

      <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
        <Td>Lorem</Td>
      
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </Box>
  )
}

export default Inventory

