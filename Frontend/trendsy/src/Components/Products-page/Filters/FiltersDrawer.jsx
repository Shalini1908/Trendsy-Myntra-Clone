import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  HStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CheckBoxBrands } from "./CheckBoxBrands";
import { CheckBoxCategory } from "./CheckBoxCategory";
import { CheckBoxColors } from "./CheckBoxColors";
import { CheckBoxPerson } from "./CheckBoxPerson";
import { CheckBoxPrice } from "./CheckBoxPrice";

export const FiltersDrawer = ({
  Q,
  category,
  setCategory,
  brands,
  setBrands,
  colors,
  setColors,
  price,
  setPrice,
  size,
  setSize,
  handleClear,
  initialCategory,
  initialBrands,
  initialColors,
  initialPrice,
  initialSize,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { products, isLoading, TotalData } = useSelector((store) => {
    return {
      products: store.products,
      isLoading: store.isLoading,
      TotalData: store.TotalData,
    };
  });

  const collections = (data, name) => {
    const unique = [];

    data.forEach((item) => {
      if (!unique.includes(item[name])) {
        unique.push(item[name]);
      }
    });

    const newArr = unique.filter((str) => str !== "");

    return newArr;
  };

  return (
    <>
      <Button
        size={"sm"}
        pb={"2px"}
        bg={"#ff3f6c"}
        zIndex={"50"}
        rightIcon={<BiFilterAlt />}
        ref={btnRef}
        color={"white"}
        onClick={onOpen}
        _hover={{ color: "white", backgroundColor: "#fb5d82" }}
        _active={{ color: "white", backgroundColor: "#ff3f6c" }}
        transition={"0.3s"}
      >
        Filters
      </Button>
      <Drawer
        size={"xs"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Text
            mt={"10px"}
            pb={"10px"}
            pl={"25px"}
            fontSize={"18px"}
            fontWeight={"600"}
            borderBottom={"1px solid lightgray"}
          >
            TRENDZY
          </Text>

          <DrawerBody>
            <Stack w={"100%"} maxW={"240px"}>
              <HStack justify={"space-between"}>
                <Text fontSize={"18px"} fontWeight={"600"}>
                  FILTERS
                </Text>
                <Text
                  pr={{ base: "5px", sm: "5px", md: "10px", lg: "20px" }}
                  fontSize={"14px"}
                  fontWeight={"600"}
                  color={"#ff3f6c"}
                  cursor={"pointer"}
                  onClick={handleClear}
                >
                  CLEAR ALL
                </Text>
              </HStack>
              <Stack w={"95%"} position={"relative"} top={"5px"}>
                <CheckBoxPerson
                  Q={Q}
                  setCategory={setCategory}
                  setBrands={setBrands}
                  setColors={setColors}
                  setPrice={setPrice}
                  setSize={setSize}
                  initialCategory={initialCategory}
                  initialBrands={initialBrands}
                  initialColors={initialColors}
                  initialPrice={initialPrice}
                  initialSize={initialSize}
                />

                <CheckBoxCategory
                  options={collections(TotalData, "product_type")}
                  name={"Category"}
                  setCategory={setCategory}
                  category={category}
                />

                <CheckBoxBrands
                  options={collections(TotalData, "brand")}
                  name={"Brands"}
                  setBrands={setBrands}
                  brands={brands}
                />

                <CheckBoxColors
                  options={collections(TotalData, "actual_color")}
                  name={"Colors"}
                  setColors={setColors}
                  colors={colors}
                />

                {/* <CheckBoxPrice
                  options={[
                    "Rs.149 to Rs.500",
                    "Rs.500 to Rs.999",
                    "Rs.1000 to Rs.1499",
                    "Rs.1500 to Rs.1999",
                    "Rs.2000 to Rs.2499",
                    "Rs.2500 to Rs.2999",
                    "Rs.3000 to Rs.3499",
                    "Rs.3499 to Rs.4000",
                  ]}
                  setPrice={setPrice}
                  price={price}
                /> */}
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
