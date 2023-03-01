import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Ratings } from "./Ratings";
import { useNavigate, useParams } from "react-router-dom";
import { OnHoverProducts } from "./OnHoverProducts";

export const Product = ({ props }) => {
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

  const navigate = useNavigate();

  const handleProduct = () => {
    navigate(`/products/${ideal_for}/${title}/${_id}`);
    window.scrollTo(0, 0);
  };

  let shortTitle = title.split("")?.filter((el, i) => i <= 18);

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
        onClick={handleProduct}
      >
        {isHovering ? (
          <OnHoverProducts
            title={title}
            brand={brand}
            ideal_for={ideal_for}
            variant_price={variant_price}
            variant_mrp={variant_mrp}
            images={images}
            _id={_id}
            size={size}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        ) : (
          <>
            <Box w={"100%"}>
              {/* <Ratings rating={rating} /> */}
              <Image src={images[0]} maxW={"250px"} w={"100%"} alt="demo" />
            </Box>

            <Stack justify={"space-between"} w={"100%"} p={"10px 5px"}>
              <Box>
                <Box p={"10px 0px"}>
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
                    {brand}
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

                <HStack justify={"space-between"} align={"center"}>
                  <HStack lineHeight={"8px"} letterSpacing={"2px"}>
                    <Text
                      mt={"0"}
                      color={"green"}
                      fontWeight={"500"}
                      fontSize={{
                        base: "14px",
                        sm: "13px",
                        md: "14px",
                        lg: "15px",
                      }}
                      textAlign={"left"}
                    >
                      ₹{variant_price}
                    </Text>

                    <Text
                      m={"0"}
                      fontSize={{
                        base: "13px",
                        sm: "12px",
                        md: "13px",
                        lg: "14px",
                      }}
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
                    fontSize={{
                      base: "13px",
                      sm: "12px",
                      md: "13px",
                      lg: "14px",
                    }}
                  >
                    {Math.floor(
                      ((variant_mrp - variant_price) * 100) / variant_mrp
                    )}
                    % OFF
                  </Box>
                </HStack>
              </Box>
            </Stack>
          </>
        )}
      </Box>
    </>
  );
};
