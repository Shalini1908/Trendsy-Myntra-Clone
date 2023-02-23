import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";
import { BsFilterCircle } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CheckBoxSize } from "./Filters/CheckBoxSize";
import { CommonFilter } from "./Filters/CommonFilter";
import { Filters } from "./Filters/Filters";

export const FiltersTop = ({
  category,
  brands,
  colors,
  price,
  size,
  setSize,
  setCategory,
  setBrands,
  setColors,
  setPrice,
}) => {
  return (
    <>
      <Stack
        w={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={"0px"}
      >
        <Tabs variant="soft-rounded" w={"100%"}>
          <TabList
            pl={{
              base: "0px",
              sm: "0px",
              md: "10px",
              lg: "10px",
            }}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Tab
              h={"35px"}
              _selected={{
                bg: "#f4f4f5",
                color: "black",
              }}
            >
              <Text>
                <BsFilterCircle />{" "}
              </Text>
            </Tab>

            <Tab
              h={"35px"}
              _selected={{
                bg: "#f4f4f5",
                color: "black",
              }}
              fontSize={{ base: "13px", md: "14px", lg: "15px" }}
            >
              <Text fontSize={"13px"}>Bunddles</Text>
              <Text fontSize={"20px"} position={"relative"} top={"2px"}>
                <RiArrowDropDownLine />
              </Text>
            </Tab>

            <Tab
              h={"35px"}
              _selected={{
                bg: "#f4f4f5",
                color: "black",
              }}
              fontSize={{ base: "13px", md: "14px", lg: "15px" }}
            >
              <Text fontSize={"13px"}>Origin</Text>
              <Text fontSize={"20px"} position={"relative"} top={"2px"}>
                <RiArrowDropDownLine />
              </Text>
            </Tab>

            <Tab
              h={"35px"}
              _selected={{
                bg: "#f4f4f5",
                color: "black",
              }}
              fontSize={{ base: "13px", md: "14px", lg: "15px" }}
            >
              <Text fontSize={"13px"}>Sizes</Text>
              <Text fontSize={"20px"} position={"relative"} top={"2px"}>
                <RiArrowDropDownLine />
              </Text>
            </Tab>
          </TabList>

          <TabPanels
            w={"100%"}
            pl={{
              base: "0px",
              sm: "0px",
              md: "10px",
              lg: "10px",
            }}
          >
            <TabPanel p={"7px 0px 24px 0px"} minH={"0px"}>
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"flex-start"}
                alignItems={"center"}
              >
                {brands.map((item, i) => (
                  <Filters
                    key={i}
                    option={brands}
                    setOption={setBrands}
                    name={item}
                  />
                ))}
                {category.map((item, i) => (
                  <Filters
                    key={i}
                    option={category}
                    setOption={setCategory}
                    name={item}
                  />
                ))}
                {colors.map((item, i) => (
                  <Filters
                    key={i}
                    option={colors}
                    setOption={setColors}
                    name={item}
                  />
                ))}
                {price.map((item, i) => (
                  <Filters
                    key={i}
                    option={price}
                    setOption={setPrice}
                    name={item}
                  />
                ))}
                {size.map((item, i) => (
                  <Filters
                    key={i}
                    option={size}
                    setOption={setSize}
                    name={item}
                  />
                ))}
              </Box>
            </TabPanel>

            <TabPanel mb={"12px"} pt={"8px"} h={"50px"}>
              <CommonFilter options={["Bundles", "Singles Styles"]} />
            </TabPanel>

            <TabPanel mb={"12px"} pt={"8px"} h={"50px"}>
              <CommonFilter options={["All Countries", "India"]} />
            </TabPanel>

            <TabPanel
              mb={{ base: "25px", sm: "12px", md: "12px", lg: "12px" }}
              pt={"8px"}
              h={"50px"}
            >
              <CheckBoxSize
                setSize={setSize}
                size={size}
                options={["XS", "S", "M", "L", "XL", "XXL", "Onesize"]}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
};
