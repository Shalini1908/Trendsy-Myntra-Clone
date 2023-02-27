import {
  Box,
  Heading,
  Text,
  HStack,
  Flex,
  Grid,
  GridItem,
  Center,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { shortID } from './short_key.generator';
const onlineShoping = [
  'Men',
  ' Women',
  'Kids',
  'Home & Living',
  ' Beauty',
  ' Gift Cards',
  'Myntra Insider',
];
const useFulLink = [
  ' Blog',
  '   Careers',
  '  Site Map',
  'Corporate Information',
  ' Whitehat',
];
const customerPolicies = [
  'Contact Us',
  ' FAQ',
  'T&C',
  'Terms Of Use',
  ' BTrack Orders',
  ' Shipping',
  'Cancellation',
  ' Returns',
  ' Privacy policy',
  'Grievance Officer',
];
const logoImages = [
  'https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png',
  'https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png',
  'https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png',
  'https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png',
];
const text = [
  'Dishant Patel',
  'Adidas',
  'Arrow',
  'Fila',
  'Online Shopping',
  'Nike',
  'Pepe Jeans',
  'Puma',
  'United Colors Of Benetton',
  'Fastrack ',
  'Shorts',
  'Being Human',
  'Skirts',
  'Woodland',
  'Supra',
  'Dresses',
  'Men Shopping ',
  'Women Shopping',
  'Blazers',
  'Sherwani',
  'Online Shopping ',
  'Men Olive',
  'Green & Cream Coloured St',
  'Rahul Raina ',
  'Saurabh Sharma ',
  'Clothing',
  'Jewellery',
  'T Shirts',
  'Shoes',
  'Bags',
  'Watches',
  'Caps ',
  'Shirts',
  'Backpacks',
  'Puma',
  'Tshirts',
  'Woodland Shoes',
  'Titan Watches ',
  'Fastrack Watches',
  'Wrangler',
  'Shirts',
  'Adidas',
  'Tshirts',
  'Nike Shoes',
  'Roadster Shirts ',
  'Casual Shoes ',
  'Running Shoes',
  'Nike Sports Shoes',
  'Jeans',
  'Being Human',
  'Tshirts',
  'Converse Shoes',
  'Cricket Shoes',
];
const Footer = () => {
  return (
    <Box>
      <Center pt="70px">
        <HStack gap="40px" alignItems="start">
          <Box>
            <Box>
              <Heading fontSize="12px" m="15px 0px">
                ONLINE SHOPPING
              </Heading>
              {onlineShoping.map((text, i) => (
                <Text key={shortID ()} m="5px" fontSize="14px" color="gray">
                  {text}
                </Text>
              ))}
            </Box>
            <Box>
              <Heading fontSize="12px" m="15px 0px">
                USEFUL LINKS
              </Heading>
              {useFulLink.map((text, i) => (
                <Text key={shortID ()} m="5px" fontSize="14px" color="gray">
                  {text}
                </Text>
              ))}
            </Box>
          </Box>
          <Box>
            <Heading fontSize="12px" m="15px 0px">
              CUSTOMER POLICIES
            </Heading>
            {customerPolicies.map((text, i) => (
              <Text key={shortID()} m="5px" fontSize="14px" color="gray">
                {text}
              </Text>
            ))}
          </Box>

          <Box>
            <Heading fontSize="12px" m="15px 0px">
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
            <Heading fontSize="12px" m="15px 0px">
              KEEP IN TOUCH
            </Heading>
            <Flex gap="20px">
              {logoImages.map((image, i) => (
                <Image key={shortID ()} w="25px" h="20px" src={image} alt={i} />
              ))}
            </Flex>
          </Box>
          <Box maxW="450px" p="20px">
            <Grid templateColumns="repeat(5, 1fr)" spacing="10px" gap="25px">
              <GridItem colSpan={1}>
                <Image
                  w="60px"
                  h="30px"
                  src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                  alt="ap"
                />
              </GridItem>
              <GridItem colSpan={4}>
                <Text fontSize="14px" color="gray">
                  <Heading fontSize="15px" color="black">
                    100% ORIGINAL guarantee
                  </Heading>
                  for all products at myntra.com Return within 30days of
                </Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  w="60px"
                  h="30px"
                  src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                  alt="ap"
                />
              </GridItem>
              <GridItem colSpan={4}>
                <Text fontSize="14px" color="gray">
                  <Heading fontSize="15px" color="black">
                    Return within 30days
                  </Heading>
                  of receiving your order
                </Text>
              </GridItem>
            </Grid>
          </Box>
        </HStack>
      </Center>

      <Box w="77%" m="auto">
        <Heading fontSize="12px" m="15px 0px">
          POPULAR SEARCHES
        </Heading>
        <Box>
          {text.map((text, i) => (
            <Box display="inline-flex" key={shortID ()} alignItems="center" gap="7px">
              <Text color="gray">{text}</Text>
              <Text color="gray" fontSize="20px" fontWeight="600" pr="7px">
                |
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
