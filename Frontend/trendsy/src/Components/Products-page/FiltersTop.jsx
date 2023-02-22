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
// import { BsFilterCircle } from "react-icons/bs";
// import { RiArrowDropDownLine } from "react-icons/ri";

export const FiltersTop = () => {
  return (
    <>
      <Stack
        w={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
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
              <Text>{/* <BsFilterCircle /> */}</Text>
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
                {/* <RiArrowDropDownLine /> */}
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
                {/* <RiArrowDropDownLine /> */}
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
                {/* <RiArrowDropDownLine /> */}
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
            mt={"10px"}
          >
            <TabPanel
              boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}
              borderRadius={"25px"}
            ></TabPanel>
            <TabPanel
              boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}
              borderRadius={"25px"}
            ></TabPanel>
            <TabPanel
              boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}
              borderRadius={"25px"}
            ></TabPanel>
            <TabPanel
              boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}
              borderRadius={"25px"}
            ></TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
};
