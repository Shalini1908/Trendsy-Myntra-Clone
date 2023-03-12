import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Ratings } from "./Ratings";
import { useNavigate, useParams } from "react-router-dom";
import { OnHoverProducts } from "./OnHoverProducts";
import { CloseIcon } from "@chakra-ui/icons";

export const Product = ({ props, option, handleOption, handleDelete }) => {
  const {
    title,
    brand,
    ideal_for,
    variant_price,
    variant_mrp,
    images,
    _id,
    size,
  } = props;

  let shortTitle = title.split("")?.filter((el, i) => i <= 16);
  let shortBrand = brand.split("")?.filter((el, i) => i <= 16);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Box
        position={"relative"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
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
        boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}
        transition={"0.3s"}
        _hover={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        {isHovering ? (
          <OnHoverProducts
            props={props}
            option={option}
            handleOption={handleOption}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            handleDelete={handleDelete}
          />
        ) : (
          <>
            <Box w={"100%"}>
              {handleDelete && (
                <Stack
                  justify={"center"}
                  align={"center"}
                  position={"absolute"}
                  top={"5px"}
                  right={"5px"}
                >
                  <Text
                    bg={"#f1f2f6"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"1px solid gray"}
                    borderRadius={"25px"}
                    p={"5px"}
                  >
                    <CloseIcon boxSize={2} />
                  </Text>
                </Stack>
              )}
              <Image src={images[0]} w={"100%"} alt="demo" />
            </Box>

            <Stack
              justify={"space-between"}
              w={"100%"}
              p={"10px 10px 14px 10px"}
            >
              <Box lineHeight={"20px"}>
                <Box mb={"10px"}>
                  <Text
                    fontWeight={"500"}
                    m={"0px"}
                    textAlign={"left"}
                    fontSize={{
                      base: "13px",
                      sm: "12px",
                      md: "13px",
                      lg: "14px",
                    }}
                  >
                    {shortBrand}
                    {brand.length > 20 ? "..." : ""}
                  </Text>

                  <Text
                    fontWeight={"400"}
                    color={"gray.500"}
                    textAlign={"left"}
                    fontSize={{
                      base: "13px",
                      sm: "12px",
                      md: "13px",
                      lg: "14px",
                    }}
                  >
                    {shortTitle}
                    {title.length > 20 ? "..." : ""}
                  </Text>
                </Box>

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
                  <HStack lineHeight={"8px"} letterSpacing={"2px"}>
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
                  <Text ml={"0px"} fontWeight={"500"} color={"#ef5d58"}>
                    {Math.floor(
                      ((variant_mrp - variant_price) * 100) / variant_mrp
                    )}
                    % OFF
                  </Text>
                </HStack>
              </Box>
            </Stack>
          </>
        )}
      </Box>
    </>
  );
};
