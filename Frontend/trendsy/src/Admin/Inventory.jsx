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


import React, { useEffect, useState } from 'react';
import axios from "axios"

const Inventory = () => {
const [data , setData] = useState();



useEffect(() =>{
  async function fetchData(){
     let res= await axios.get(`http://localhost:8080/data/alldata`)
     console.log(res.data)
     setData(res.data)
    }
    fetchData()
},[])


return (
  <>
  
  
   <TableContainer border={"1px solid yellow"} fontSize={"12px"}>
   <Table variant="simple">
   
    <Thead>
 <Tr>
<Th display={"flex"}>Name
 {/* <Input type={"search"} m={2} w={"140px"} h={25}></Input><CloseButton/></Th> */}
 </Th>
 <Th>PID</Th>
<Th>MRP(INR)</Th>
<Th>PRICE(INR)</Th>
<Th>BRAND</Th>
<Th>CATEGORY</Th>
<Th>STOCK</Th>
  
        
 </Tr>
</Thead>

{data&&data.map((ele)=>{
  return(
    <>
    <Tbody>
     <Tr>
   
   <Td noOfLines={2} border={"1px solid red"} w={"290px"} fontSize={"12px"}>{ele.title}</Td>
   <Td>{ele.id}</Td>
   <Td>{ele.variant_mrp}</Td>
   <Td>{ele.variant_price}</Td>
   <Td>{ele.brand}</Td>
    <Td>{ele.ideal_for}</Td>
   <Td>{ele.is_in_stock}</Td>
    </Tr>
    </Tbody>
    </>
  )
})}

 



</Table>
</TableContainer>

</>
       
        )
     



}

export default Inventory

