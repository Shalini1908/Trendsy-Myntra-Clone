import { Grid, Card, Text, Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineUser} from "react-icons/ai";
import {ImUsers} from "react-icons/im"
import { BsCartCheckFill, BsFillBagFill } from "react-icons/bs";
import "./css/Admin.css";
import Graph from "../Admin/Graph";
export const Dashboard = () => {
  const [data, setData] = useState("");
  const [userdata, setuserData] = useState("");

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(
        `https://zany-bikini-bass.cyclic.app/data/all`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );

      // console.log(res.data);
      setData(res.data);
    }
    fetchData();
  }, []);


  useEffect(() => {
    async function userData() {
      let res = await axios.get(
        `https://zany-bikini-bass.cyclic.app/user`,
        );

      // console.log(res.data.length);
      setuserData(res.data);
    }
    userData();
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
            border={"2px solid #ff3f6c"}
            backgroundColor={"white"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <BsCartCheckFill color="black" fontSize={40} />
            <Text color={"#ff912e"} fontSize={30}>
              Orders
            </Text>
            <Text color={"#ff912e"} fontSize={30}>
            234566
            </Text>
          </Card>
          <Card
            minW={{ base: 120, md: 190 }}
            minH={190}
            border={"2px solid #ff3f6c"}      
            backgroundColor={"white"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <BsFillBagFill color="black" fontSize={40} />
            <Text color={"#ff912e"} fontSize={30}>
              Inventory
            </Text>
            <Text color={"#ff912e"} fontSize={30}>
              {data.length ? data.length : "..."}
            </Text>
          </Card>
          <Card
            minW={{ base: 120, md: 190 }}
            minH={190}
            backgroundColor={"white"}
            display={"flex"}
            border={"2px solid #ff3f6c"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AiOutlineUser color="black" fontSize={40} mt={"90px"} />
            <Text color={"#ff912e"} fontSize={30}>
              Customers
            </Text>
            <Text color={"#ff912e"} fontSize={30}>
              {userdata.length ? userdata.length : "..."}
            </Text>
          </Card>
          <Card
            minW={{ base: 120, md: 190 }}
            minH={190}
            backgroundColor={"white"}
            display={"flex"}
            border={"2px solid #ff3f6c"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ImUsers color="black" fontSize={40} mt={"90px"}/>
            <Text color={"#ff912e"} fontSize={30}>
              Admins
            </Text>
            <Text color={"#ff912e"} fontSize={30}>
            5
            </Text>
          </Card>
        </>
      </Grid>
      <Box  w={"90%"} h={"400px"} m={'auto'} mt={'20px'}>
      <Graph/>
      </Box>
    </>
  );
};
