import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartNav from "../Components/Cart/CartNav";
import CartProducts from "../Components/Cart/CartProducts";
import CartCalculation from "../Components/Cart/CartCalculation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from "../Redux/actions";
import { getData } from "../api";
import axios from "axios";

const numbers = [0, 2, 7, 10, 15, 21, 30];

const Cart = () => {
  const { cartData } = useSelector((store) => store);
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

  // const Auth = localStorage.getItem("trendsyToken");
  // const token = JSON.parse(Auth);

  // const getCartData = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_TRENDZY_BASE_URL}/wishlist`, {
  //       headers: { authorization: token.token },
  //     })
  //     .then((res) => {
  //       setCart(res.data);
  //       dispatch(setCartData(res.data));
  //       // console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <Box>
      <CartNav />

      <Grid
        justifyContent={"center"}
        gap={["5px", null, null, "15px"]}
        templateColumns={["auto", null, "auto auto"]}
      >
        <GridItem maxW={["300px", "500px"]}>
          <CartProducts cart={cart} setCart={setCart} cartData={cartData} />
        </GridItem>
        <GridItem maxW={["300px", "400px"]}>
          <CartCalculation cart={cart} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Cart;
