import { Grid, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Product } from "../Components/Products-page/Product";

export const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const Auth = localStorage.getItem("trendsyToken");
  //   console.log(Auth);
  const token = JSON.parse(Auth);
  const toast = useToast();

  const getWishlist = () => {
    axios
      .get(`${process.env.REACT_APP_TRENDZY_BASE_URL}/wishlist`, {
        headers: { authorization: token.token },
      })
      .then((res) => {
        setWishlist(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDelete = (_id) => {
    axios
      .delete(
        `${process.env.REACT_APP_TRENDZY_BASE_URL}/wishlist/deletewishlist/${_id}`,
        { headers: { authorization: token.token } }
      )
      .then((res) => {
        console.log(res);
        getWishlist();
        toast({
          position: "top",
          title: res.data,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.message);
        toast({
          position: "top",
          title: err.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const AddToCart = (data) => {
    axios
      .post(`${process.env.REACT_APP_TRENDZY_BASE_URL}/cart/addtocart`, data, {
        headers: { authorization: token.token },
      })
      .then((res) => {
        console.log(res);
        toast({
          position: "top",
          title: res.data,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.message);
        toast({
          position: "top",
          title: err.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <>
      <Navbar />

      <Stack justify={"flex-start"} align={"flex-start"} p={"10px"}>
        <Text fontSize={"15px"} pl={"10px"} fontWeight={"500"}>
          My Wishlist {wishlist.length} items
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          w={"100%"}
          boxSizing={"border-box"}
        >
          {wishlist?.map((item, i) => (
            <Product
              handleOption={AddToCart}
              handleDelete={handleDelete}
              option={"ADD TO CART"}
              key={item._id}
              props={item}
            />
          ))}
        </Grid>
      </Stack>
    </>
  );
};
