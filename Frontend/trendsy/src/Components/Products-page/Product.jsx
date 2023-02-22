import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Ratings } from "./Ratings";
// import { useNavigate } from 'react-router-dom'

export const Product = ({ props }) => {
  const { title, brand, size, variant_price, variant_mrp, images } = props;

  // const navigate = useNavigate()

  // const singleProductData = (prod) => {
  //     navigate({ pathname: '/SingleProduct' }, { state: prod })
  // }

  let shortTitle = title.split("")?.filter((el, i) => i <= 18);

  return (
    <Box
      maxW={"250px"}
      m={{
        base: "15px auto",
        sm: "15px auto",
        md: "15px 10px",
        lg: "15px 10px",
      }}
      fontSize={"13px"}
      overflow={"hidden"}
      cursor={"pointer"}
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
      }}
      // onClick={()=>{singleProductData(props)}}
    >
      <Box w={"100%"}>
        {/* <Ratings rating={rating} /> */}
        <Image src={images[0]} maxW={"250px"} w={"100%"} alt="demo" />
      </Box>

      <Stack justify={"space-between"} w={"100%"} p={"10px 5px"}>
        <Box>
          <Text
            fontWeight={"500"}
            m={"0px"}
            textAlign={"left"}
            fontSize={{ base: "13px", sm: "12px", md: "13px", lg: "14px" }}
          >
            {brand}
          </Text>

          <Text
            fontWeight={"400"}
            color={"gray.500"}
            textAlign={"left"}
            fontSize={{ base: "13px", sm: "12px", md: "13px", lg: "14px" }}
          >
            {shortTitle}
            {title.length > 20 ? "..." : ""}
          </Text>

          <HStack justify={"space-between"} align={"center"}>
            <HStack lineHeight={"8px"} letterSpacing={"2px"}>
              <Text
                mt={"0"}
                color={"green"}
                fontWeight={"500"}
                fontSize={{ base: "14px", sm: "13px", md: "14px", lg: "15px" }}
                textAlign={"left"}
              >
                ₹{variant_price}
              </Text>

              <Text
                m={"0"}
                fontSize={{ base: "13px", sm: "12px", md: "13px", lg: "14px" }}
                color={"gray.500"}
                fontWeight={"500"}
                textDecor={"line-through"}
                textAlign={"left"}
              >
                ₹{variant_mrp}
              </Text>
            </HStack>

            <Box
              fontWeight={"500"}
              color={"#ef5d58"}
              bg={"#fff6f5"}
              p={"2px 10px"}
              fontSize={{ base: "13px", sm: "12px", md: "13px", lg: "14px" }}
            >
              {Math.floor(((variant_mrp - variant_price) * 100) / variant_mrp)}%
              OFF
            </Box>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
};
