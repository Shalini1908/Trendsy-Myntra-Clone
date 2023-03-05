import { Box, Button, Center, Grid, GridItem, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartNav from "../Components/Cart/CartNav";
import CartProducts from "../Components/Cart/CartProducts";
import CartCalculation from "../Components/Cart/CartCalculation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from "../Redux/actions";
import { getData } from "../api";
import axios from "axios";
import { Text } from "recharts";

const numbers = [0, 2, 7, 10, 15, 21, 30];

const Cart = () => {
  const { cartData } = useSelector((store) => store);
  console.log(cartData)
  const dispatch = useDispatch();
  let isAuth = false;
  const name = JSON.parse(localStorage.getItem("trendsyToken") || "{}")?.name;
  if (name) {
    isAuth = true;
  }
  console.log(name);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  if (!isAuth) {
    navigate("/login");
  }
  useEffect(() => {
    //console.log(cartData[0])

    // getCartData();
    if (cartData.length == 0) {
      getData("/cart", { data: [] }).then((data) => {
        // handle successful response
        if (data) {
          const createdData = cartData.map((el, i) => {
            return {
              ...el,
              day: numbers[Math.floor(Math.random() * numbers.length)],
            };
          });

          setCart(createdData);
          dispatch(setCartData(data));
        }
      });
    }
  }, []);



  return (
    <Box>
      
      {cartData.length?<Box><CartNav />

      <Grid
        justifyContent={"center"}
        gap={["5px", null, null, "15px"]}
        templateColumns={["auto", null, "auto auto"]}
      >
        <GridItem maxW={["300px", "600px"]}>
          <CartProducts cart={cart} setCart={setCart} cartData={cartData} />
        </GridItem>
        <GridItem maxW={["300px", "400px"]}>
          <CartCalculation cart={cart} />
        </GridItem>
      </Grid>
      </Box>:
      <VStack spacing="20px" mt="200px">
        <Image src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"  w="150px" alt="empty bag"/>
        <Box>
        <Heading size="md">Hay, it fills so light!</Heading>
        <Text color ="blackAlpha">There is nothing in your bag. Let's add some items.</Text>
        </Box>
      < Link to="/wishlist" ><Button variant="outline" color="red" >ADD ITEMS FROM WISHLIST</Button></Link>
      </VStack>}
    </Box>
  );
};

export default Cart;
