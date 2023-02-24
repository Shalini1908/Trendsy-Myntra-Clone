import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const ProductImage = ({ img }) => {
  return (
    <Box w="100%" overflow={"hidden"}>
      <Image
        w="100%"
        src={img}
        transition={"0.3s all ease-in-out"}
        _hover={{ transform: "scale(1.1)" }}
      />
    </Box>
  );
};
