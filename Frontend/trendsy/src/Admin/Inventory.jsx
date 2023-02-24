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
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


const Inventory = () => {
 
  const [data, setData] = useState();
  const [page , setPage] = useState(0)
  const [show, setShow] = useState(false);
  

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(`http://localhost:8080/data/alldata?limit=10&skip=${page}`,{

      headers: {
        Authorization: JSON.parse(localStorage.getItem("token"))
      },
      });
      console.log(res.data);
      setData(res.data);
  
    
    }
    fetchData();
  }, [page]);
  // box1=[name,sIcon]
  // box2=[input,sIcon,Cross]
  // show?box1:box2

  const deleteNote = (noteID) => {
    fetch(`http://localhost:8080/data/${noteID}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token")
      },
    });
  };


  return (
    <>
      <TableContainer fontSize={"14px"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
               
                <div style={{ display: "flex" ,  justifyContent:"space-between" ,  width:"235px" }} >
                <p style={{display:show?"none":"flex"}}>Name</p>
                {show ? (
                  
                  <Input type={"search"} w={"280px"} h={"20px"}></Input>
                ) : null}
                {/* <div style={{ display: "flex" , justifyContent:"space-between"  , width:"180px"}} > */}
                  <button onClick={() => setShow(true)}>
                    <AiOutlineSearch fontSize={15} mt={"-2px"}/>
                  </button>
                  <button onClick={() => setShow(false)} style={{display:show?"flex":"none"}}>
                    <CloseButton fontSize={10} mt={"-2px"} ml={"14px"} />
                  </button>
                </div>
              </Th>

              <Th>PID</Th>
              <Th>MRP(INR)</Th>
              <Th>PRICE(INR)</Th>
              {/* <Th>BRAND</Th> */}
              <Th>CATEGORY</Th>
              <Th>STOCK</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>

          {data &&
            data.map((ele) => {
              return (
                <>
                  <Tbody>
                    <Tr>
                      <Td fontSize={"12px"}>{ele.title.substring(0, 35)}</Td>
                      <Td>{ele.id}</Td>
                      <Td>{ele.variant_mrp}</Td>
                      <Td>{ele.variant_price}</Td>
                      {/* <Td>{ele.brand}</Td> */}
                      <Td>{ele.ideal_for}</Td>
                      <Td>{ele.is_in_stock}</Td>
                      <Td><FiEdit fontSize={15} color={"#ff912e"}/></Td>
                      <Button onClick={()=>deleteNote(ele._id)} w={10} h={10}><Td><MdDelete fontSize={15} color={"#f41cb2"}/></Td></Button>
               
                    </Tr>
                  </Tbody>
                </>
              );
            })}
        </Table>
      </TableContainer>
      <Button onClick={()=>setPage(page-5)}>Previous</Button>
      <Button onClick={()=>setPage(page+5)}>Next</Button>
    </>
  );
};

export default Inventory;
