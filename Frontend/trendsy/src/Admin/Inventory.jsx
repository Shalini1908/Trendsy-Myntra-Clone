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
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(`http://localhost:8080/data/alldata`);
      console.log(res.data);
      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <TableContainer fontSize={"12px"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                <p style={{display:show?"none":"flex"}}>Name</p>
                {show ? (
                  <Input type={"search"} w={"180px"} h={"20px"}></Input>
                ) : null}
                <div style={{ display: "flex" }}>
                  <button onClick={() => setShow(true)}>
                    <AiOutlineSearch fontSize={22} />
                  </button>
                  <button onClick={() => setShow(false)} style={{display:show?"flex":"none"}}>
                    <CloseButton fontSize={15} mt={"-6px"} ml={"18px"} />
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
                      <Td><MdDelete fontSize={15} color={"#f41cb2"}/></Td>
                    </Tr>
                  </Tbody>
                </>
              );
            })}
        </Table>
      </TableContainer>
    </>
  );
};

export default Inventory;
