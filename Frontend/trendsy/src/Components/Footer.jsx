import {
  Box,
  Heading,
  Text,
  HStack,
  Flex,
  Grid,
  GridItem,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { shortID } from "./short_key.generator";

const onlineShoping = [
  "Men",
  " Women",
  "Kids",
  "Home & Living",
  " Beauty",
  " Gift Cards",
  "Myntra Insider",
];
const useFulLink = [
  " Blog",
  "   Careers",
  "  Site Map",
  "Corporate Information",
  " Whitehat",
];
const customerPolicies = [
  "Contact Us",
  " FAQ",
  "T&C",
  "Terms Of Use",
  " BTrack Orders",
  " Shipping",
  "Cancellation",
  " Returns",
  " Privacy policy",
  "Grievance Officer",
];
const logoImages = [
  "https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png",
  "https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png",
  "https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png",
  "https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png",
];
const text = [
  "Dishant Patel",
  "Adidas",
  "Arrow",
  "Fila",
  "Online Shopping",
  "Nike",
  "Pepe Jeans",
  "Puma",
  "United Colors Of Benetton",
  "Fastrack ",
  "Shorts",
  "Being Human",
  "Skirts",
  "Woodland",
  "Supra",
  "Dresses",
  "Men Shopping ",
  "Women Shopping",
  "Blazers",
  "Sherwani",
  "Online Shopping ",
  "Men Olive",
  "Green & Cream Coloured St",
  "Rahul Raina ",
  "Saurabh Sharma ",
  "Clothing",
  "Jewellery",
  "T Shirts",
  "Shoes",
  "Bags",
  "Watches",
  "Caps ",
  "Shirts",
  "Backpacks",
  "Puma",
  "Tshirts",
  "Woodland Shoes",
  "Titan Watches ",
  "Fastrack Watches",
  "Wrangler",
  "Shirts",
  "Adidas",
  "Tshirts",
  "Nike Shoes",
  "Roadster Shirts ",
  "Casual Shoes ",
  "Running Shoes",
  "Nike Sports Shoes",
  "Jeans",
  "Being Human",
  "Tshirts",
  "Converse Shoes",
  "Cricket Shoes",
];
const Footer = () => {
  return (
    <VStack mt={["30px", "50px", null, "70px"]} justify="center">
      {/* <Grid  templateColumns="repeat(11, 1fr)" spacing="10px"  alignItems="start"   fontSize="sm" justifyContent="center" textAlign="start" border="1px solid red"  > */}
      <Flex
        textAlign="start"
        gap={{base:"20px",lg:"50px"}}
        flexWrap="wrap"
        justify={{base:"start",lg:"center"}}
        fontSize="sm"
        ml={{base:"30px",lg:"0px"}}
      >
        <Box>
          <Box>
            <Heading fontSize="xs" mb="20px">
              ONLINE SHOPPING
            </Heading>
            {onlineShoping.map((text, i) => (
              <Text key={shortID()} mb="5px" color="blackAlpha.700">
                {text}
              </Text>
            ))}
          </Box>
          <Box>
            <Heading fontSize="xs" m="20px 0px">
              USEFUL LINKS
            </Heading>
            {useFulLink.map((text, i) => (
              <Text key={shortID()} mb="5px" color="blackAlpha.700">
                {text}
              </Text>
            ))}
          </Box>
        </Box>
        <Box>
          <Heading fontSize="xs" mb="20px">
            CUSTOMER POLICIES
          </Heading>
          {customerPolicies.map((text, i) => (
            <Text key={shortID()} mb="5px" fontSize="sm" color="blackAlpha.700">
              {text}
            </Text>
          ))}
        </Box>

        <Box>
          <Heading fontSize="xs" mb="20px">
            EXPERIENCE MINTRA APP ON MOBILE
          </Heading>
          <HStack>
            <Image
              w="150px"
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              alt="google play store"
            />
            <Image
              w="150px"
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              alt="apple store"
            />
          </HStack>
          <Heading fontSize="xs" m="15px 0px">
            KEEP IN TOUCH
          </Heading>
          <Flex gap="20px">
            {logoImages.map((image, i) => (
              <Image key={shortID()} w="25px" h="20px" src={image} alt={i} />
            ))}
          </Flex>
        </Box>
        <Box>
          <Grid
            templateColumns="repeat(5, 1fr)"
            alignItems={"center"}
            templateRows="repeat(2, 1fr)"
            spacing="10px"
            columnGap="20px"
            rowGap="30px"
            w="300px"
            color="blackAlpha.700"
          >
            <GridItem colSpan={1}>
              <Image
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                alt="ap"
              />
            </GridItem>
            <GridItem colSpan={4}>
              <Text fontSize="md">
                <Text as="b" color="black">
                  100% ORIGINAL{" "}
                </Text>
                guarantee for all products at tendsy.com
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Image
                src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                alt="ap"
              />
            </GridItem>
            <GridItem colSpan={4} display="flex">
              <Text fontSize="md">
                <Text as="b" color="black">
                  Return within 30 days{" "}
                </Text>
                of receiving your order
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
      {/*  alignItems={"center"} alignSelf={"center"} */}
      <Box fontSize="sm" w={["85%",null,"90%","67%"]} m="auto">
        <Flex wrap="wrap" align="center" gap="10px" >
          <Heading fontSize="xs" m="15px 0px">
            POPULAR SEARCHES
          </Heading>

          <Box
            borderWidth="1px"
            borderColor="blackAlpha.500"
            h="0.5px"
            w="90%"
            flex={"1"}
          />
        </Flex>
        <Flex wrap="wrap" color="blackAlpha.700" gap="7px" textAlign="justify">
          {text.map((text, i) => (
            <Flex key={shortID()} align="center" gap="9px">
              <Text>{text} </Text>
              <Box borderWidth="1px" borderColor="blackAlpha.700" h="14px" />
            </Flex>
          ))}
        </Flex>
      </Box>
    </VStack>
  );
};

export default Footer;
