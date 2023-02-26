
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  
  } from "@chakra-ui/react";
  

  import React, { useCallback, useEffect, useState } from "react";
  import axios from "axios";

  
  const Inventory = () => {
    const [data, setData] = useState();
   
   
   
    
    async function fetchData() {
      let res = await axios.get(`https://wild-red-bunny-tux.cyclic.app/user` );
      console.log("user",res.data);
      setData(res.data);

    }
  
    fetchData()
 
  

      return (
        <>
          <TableContainer fontSize={"14px"}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  
  
                  <Th>Name</Th>
                  <Th>Customer ID</Th>
                  <Th>Email Address</Th>
             
                  <Th>Mobile Number</Th>
                  <Th>Gender</Th>
                 
                
                </Tr>
              </Thead>
  
              <Tbody>
                {data&&data.map((ele)=>{
                    return(
                        <Tr>
                        
                        <Td fontSize={"12px"}>{ele.name}</Td>
                        <Td>{ele._id}</Td>
                        <Td>{ele.email}</Td>
                        <Td>{ele.num}</Td>
                        <Td>{ele.gender}</Td>
                
                        
                      
                      </Tr>
                    )
                })}
                   
                  </Tbody>
                    
                 
         
                
                  
            
            </Table>
          </TableContainer>
  
        
  
        </>
      );
    }
  
  
  export default Inventory;
  