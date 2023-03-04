import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Ratings } from "./Ratings";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import "../../App.css";

export const OnHoverProducts = ({
  title,
  brand,
  ideal_for,
  variant_price,
  variant_mrp,
  images,
  _id,
  size,
}) => {
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate(`/products/${ideal_for}/${title}/${_id}`);
    window.scrollTo(0, 0);
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
  };

  return (
    <>
      <Box w={"100%"}>
        <Slider {...settings}>
          {images
            .filter((e) => e !== "")
            .map((el) => (
              <Box mb={"10px"}>
                <Image m={"0"} h={"50%"} src={el} w={"100%"} alt="demo" />
              </Box>
            ))}
        </Slider>
      </Box>

      <Stack
        position={"relative"}
        bottom={"10px"}
        justify={"space-between"}
        w={"100%"}
        p={"0px 10px"}
      >
        <HStack
          border={"1px solid lightgray"}
          _hover={{ border: "1px solid black" }}
          cursor={"pointer"}
          p={"5px 20px"}
          borderRadius={"2px"}
          fontWeight={"600"}
          transition={"0.3s"}
          justify={"center"}
          align={"center"}
        >
          <Text>
            <IoMdHeartEmpty />
          </Text>
          <Text pr={"15px"}>WISHLIST</Text>
        </HStack>
        <Box position={"relative"} top={"-5px"} lineHeight={"20px"}>
          <Text
            m={"0px"}
            fontWeight={"400"}
            color={"gray.500"}
            textAlign={"left"}
            fontSize={{ base: "13px", sm: "12px", md: "13px", lg: "14px" }}
          >
            Sizes: {size}
          </Text>

          <HStack
            justify={"space-between"}
            align={"center"}
            fontSize={{
              base: "13px",
              sm: "12px",
              md: "12px",
              lg: "13px",
            }}
          >
            <HStack letterSpacing={"2px"}>
              <Text
                mt={"0"}
                color={"green"}
                fontWeight={"500"}
                textAlign={"left"}
              >
                ₹{variant_price}
              </Text>

              <Text
                m={"0"}
                color={"gray.500"}
                fontWeight={"500"}
                textDecor={"line-through"}
                textAlign={"left"}
              >
                ₹{variant_mrp}
              </Text>
            </HStack>

            <Box fontWeight={"500"} color={"#ef5d58"}>
              {Math.floor(((variant_mrp - variant_price) * 100) / variant_mrp)}%
              OFF
            </Box>
          </HStack>
        </Box>
      </Stack>
    </>
  );
};
