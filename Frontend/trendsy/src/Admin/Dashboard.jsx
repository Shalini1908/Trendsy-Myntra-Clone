import { Grid, Card, Text, Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineUser, AiFillDollarCircle } from "react-icons/ai";
import { BsCartCheckFill, BsFillBagFill } from "react-icons/bs";
import "./css/Admin.css";

export const Dashboard = () => {
  const [data , setData] = useState("");

  // const fetchData =async() =>{
  //   let res= await axios.get(`http://localhost:8080/data/alldata`)
  
  //   setData(res.data)
  //   console.log(res)
  // }


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
    <Grid
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(4,1fr)",
      }}

      gap="10px"
    >


    <>
      <Card
        minW={{ base: 120, md: 190 }}
        minH={190}
        border={"2px solid #f41cb2"}
        backgroundColor={"white"}
        display={"flex"}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <BsCartCheckFill color="black" fontSize={40} />
        <Text color={"#ff912e"}  fontSize={30}>Orders</Text>
      </Card>
      <Card
        minW={{ base: 120, md: 190 }}
        minH={190}
        border={"2px solid #f41cb2"}
        backgroundColor={"white"}
        display={"flex"}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <BsFillBagFill color="black" fontSize={40} />
        <Text color={"#ff912e"}  fontSize={30}>Inventory</Text>
        <Text color={"#ff912e"}  fontSize={30}>{data.length?data.length:"..."}</Text>
      </Card>
      <Card
        minW={{ base: 120, md: 190 }}
        minH={190}
     
        backgroundColor={"white"}
        display={"flex"}
        border={"2px solid #f41cb2"}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <AiOutlineUser color="black" fontSize={40} />
        <Text color={"#ff912e"}  fontSize={30}>Customers</Text>
      </Card>
      <Card
        minW={{ base: 120, md: 190 }}
        minH={190}
        backgroundColor={"white"}
        display={"flex"}
        border={"2px solid #f41cb2"}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <AiFillDollarCircle color="black" fontSize={40} />
        <Text color={"#ff912e"} fontSize={30}>Revenue</Text>
      </Card>

      </>


    </Grid>
    </>

  );
};
