import {
  Box,
  Grid,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";

import { AiFillStar } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsTag } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { ProductImage } from "../Components/Single-Product-page/ProductImage";
import { useEffect, useRef, useState } from "react";
import { BreadCrumbSPP } from "../Components/Single-Product-page/BreadCrumbSPP";
import { Product } from "../Components/Products-page/Product";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  AddToCart,
  addToCartPostErrorAction,
  addToCartPostRequestAction,
  addToCartPostSuccessAction,
  getProducts,
} from "../Redux/actions";
import Navbar from "../Components/Navbar";

export const SingleProduct = () => {
  const { products, isLoading } = useSelector((store) => {
    return {
      products: store.products,
      isLoading: store.isLoading,
    };
  });

  const person = (name) => {
    const idealFor =
      name === "Men"
        ? "men"
        : name === "Women"
        ? "women"
        : name === "Boys"
        ? "boys"
        : name === "Girls"
        ? "girls"
        : name;

    return idealFor;
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useParams();
  const [data, setData] = useState({});
  const [img, setImg] = useState("");

  const getSingleProduct = (_id) => {
    axios
      .get(`${process.env.REACT_APP_TRENDZY_BASE_URL}/data/${_id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setImg(res.data.images[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleAddToCart = (data) => {
    dispatch(addToCartPostRequestAction());
    axios
      .post(`${process.env.REACT_APP_TRENDZY_BASE_URL}/cart/addtocart`, data, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("trendsyToken"))
            ?.token,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data == "please login first") {
          alert("please login first");
        } else {
          alert("Product added successfully ");
          dispatch(addToCartPostSuccessAction(res.data));
        }
      })
      .catch((err) => {
        dispatch(addToCartPostErrorAction());
        console.log(err.message);
      });
  };

  useEffect(() => {
    getSingleProduct(_id);
  }, [_id, img]);

  const dummySize = ["XS", "S", "M", "L", "XL", "XXL"];

  const Auth = localStorage.getItem("trendsyToken");
  //   console.log(Auth);
  const token = JSON.parse(Auth);
  const toast = useToast();

  const AddToWishlist = (data) => {
    if (token) {
      axios
        .post(
          `${process.env.REACT_APP_TRENDZY_BASE_URL}/wishlist/addtowishlist`,
          data,
          { headers: { authorization: token.token } }
        )
        .then((res) => {
          console.log(res);
          toast({
            position: "top",
            title: res.data,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err.message);
          toast({
            position: "top",
            title: err.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    } else {
      toast({
        position: "top",
        title: "Please login first",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // console.log(singleProduct);
  return (
    <>
      <Navbar />
      <Box w={"100%"}>
        <Stack
          w={"100%"}
          p={{ base: "15px", sm: "30px", md: "15px", lg: "25px" }}
        >
          <Box mb={"10px"} w={"100%"}>
            <BreadCrumbSPP />
          </Box>

          <Grid
            templateColumns={{
              base: "repeat(1, 100%)",
              sm: "repeat(1, 100%)",
              md: "repeat(2, 50% 50%)",
              lg: "repeat(2, 60% 40%)",
            }}
            w={"100%"}
          >
            <UnorderedList
              ml={"0px"}
              mb={"20px"}
              display={{ base: "block", sm: "block", md: "none", lg: "none" }}
            >
              <HStack w={"100%"} justify={"flex-start"} align={"flex-start"}>
                <Box w="82%">
                  <ProductImage img={img} />
                </Box>

                <Stack w={"18%"} justify={"space-between"} align={"center"}>
                  {data?.images?.map((item, i) => {
                    if (i < 4) {
                      return (
                        <Box key={i} width="100%" overflow={"hidden"}>
                          <Image
                            w={"100%"}
                            src={item}
                            alt={""}
                            onClick={() => setImg(item)}
                            transition={"0.3s all ease-in-out"}
                            _hover={{ transform: "scale(1.1)" }}
                          />
                        </Box>
                      );
                    }
                  })}
                </Stack>
              </HStack>
            </UnorderedList>

            <UnorderedList
              ml={"0px"}
              display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            >
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
                w={"100%"}
              >
                {data?.images?.map((item, i) => {
                  if (i < 4) {
                    return (
                      <Box key={i} m={"0px 20px 20px 0px"} overflow={"hidden"}>
                        <Image
                          src={item}
                          alt={""}
                          transition={"0.3s all ease-in-out"}
                          _hover={{ transform: "scale(1.1)" }}
                        />
                      </Box>
                    );
                  }
                })}
              </Grid>
            </UnorderedList>

            <Box w={"100%"}>
              <Stack
                justify={"flex-start"}
                align={"flex-start"}
                w={"100%"}
                borderBottom={"1px solid lightgray"}
                pb={"15px"}
              >
                <Box mb={"5px"}>
                  <Text
                    fontWeight={"700"}
                    textAlign={"left"}
                    fontSize={{ base: "20", sm: "20", md: "18", lg: "20" }}
                  >
                    {data?.brand}
                  </Text>
                  <Text
                    fontWeight={"450"}
                    textAlign={"left"}
                    color={"#535665"}
                    fontSize={{ base: "18", sm: "18", md: "17", lg: "18" }}
                  >
                    {data?.title}
                  </Text>
                </Box>

                <HStack border={"1px solid lightgray"} p={"5px 10px"}>
                  <Text
                    color={"#64cacc"}
                    borderRight={"1px solid lightgray"}
                    pr={"8px"}
                  >
                    <AiFillStar />
                  </Text>
                  <Text>5.3k Ratings</Text>
                </HStack>
              </Stack>

              <HStack
                justify={"flex-start"}
                align={"center"}
                p={"20px 0px 5px 0px"}
              >
                <HStack lineHeight={"8px"} letterSpacing={"2px"}>
                  <Text
                    mt={"0"}
                    fontWeight={"600"}
                    fontSize={{
                      base: "16px",
                      sm: "18px",
                      md: "18px",
                      lg: "20px",
                    }}
                    textAlign={"left"}
                  >
                    ₹{data?.variant_price}
                  </Text>

                  <Text
                    m={"0"}
                    fontSize={{
                      base: "14px",
                      sm: "15px",
                      md: "16px",
                      lg: "18px",
                    }}
                    color={"gray.500"}
                    fontWeight={"500"}
                    textDecor={"line-through"}
                    textAlign={"left"}
                  >
                    ₹{data?.variant_mrp}
                  </Text>
                </HStack>

                <Box
                  fontWeight={"700"}
                  color={"#ef5d58"}
                  fontSize={{
                    base: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "18px",
                  }}
                >
                  {Math.floor(
                    ((data?.variant_mrp - data?.variant_price) * 100) /
                      data?.variant_mrp
                  )}
                  % OFF
                </Box>
              </HStack>

              <Text
                m={"0px"}
                fontWeight={"600"}
                fontSize={"14px"}
                textAlign={"left"}
                color={"#319795"}
              >
                inclusive of all taxes
              </Text>

              <Box mt={"10px"}>
                <HStack>
                  <Text fontWeight={"500"} mr={"20px"}>
                    SELECT SIZE
                  </Text>
                  <HStack
                    fontSize={"14px"}
                    color={"#ff3e6c"}
                    fontWeight={"500"}
                    position={"relative"}
                    top={"1px"}
                  >
                    <Text fontWeight={"500"} cursor={"pointer"}>
                      SIZE CHART
                    </Text>
                    <Text
                      position={"relative"}
                      top={"-3px"}
                      fontSize={"28px"}
                      left={"-5px"}
                    >
                      &#8250;
                    </Text>
                  </HStack>
                </HStack>
                <Box
                  display={"flex"}
                  flexWrap={"wrap"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                >
                  {dummySize.map((item, i) => (
                    <Box
                      key={i}
                      border={
                        data?.size === item
                          ? "1px solid #ff3e6c"
                          : "1px solid lightgray"
                      }
                      color={data?.size === item ? "black" : "gray"}
                      m={"10px 10px 10px 0px"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={"50px"}
                      h={"50px"}
                      borderRadius={"50%"}
                      cursor={"pointer"}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>

              <HStack
                pb={"20px"}
                mt={"20px"}
                borderBottom={"1px solid lightgray"}
              >
                <HStack
                  mr={"10px"}
                  _hover={{ backgroundColor: "#fe5880" }}
                  cursor={"pointer"}
                  p={"10px 30px"}
                  color={"white"}
                  bg={"#ff3e6c"}
                  border={"1px solid #fe5880"}
                  borderRadius={"2px"}
                  fontWeight={"600"}
                  transition={"0.3s"}
                  onClick={() => handleAddToCart(products)}
                >
                  <Text>
                    <HiShoppingBag />
                  </Text>
                  <Text pr={"5px"}>ADD TO BAG</Text>
                </HStack>

                <HStack
                  border={"1px solid lightgray"}
                  _hover={{ border: "1px solid black" }}
                  cursor={"pointer"}
                  p={"10px 30px"}
                  borderRadius={"2px"}
                  fontWeight={"600"}
                  transition={"0.3s"}
                  onClick={() => AddToWishlist(data)}
                >
                  <Text
                    position={"relative"}
                    top={"1px"}
                    left={"2px"}
                    fontSize={"18px"}
                  >
                    <IoMdHeartEmpty />
                  </Text>
                  <Text pr={"15px"}>WISHLIST</Text>
                </HStack>
              </HStack>

              <Box mt={"20px"} borderBottom={"1px solid lightgray"}>
                <HStack>
                  <Text fontWeight={"500"}>DELIVERY OPTIONS</Text>
                  <Text fontSize={"23px"}>
                    <CiDeliveryTruck />
                  </Text>
                </HStack>

                <InputGroup w={"250px"} m={"20px 0px 10px 0px"}>
                  <Input
                    p={"23px 15px"}
                    border={"1px solid lightgray"}
                    _focus={{
                      border: "1px solid lightgray",
                    }}
                    type={"number"}
                    focusBorderColor="transparent"
                    fontSize={"15px"}
                    placeholder="Enter pincode"
                  />
                  <InputRightElement width="4.5rem" p={"23px 15px"}>
                    <Text
                      cursor={"pointer"}
                      fontSize={"14px"}
                      fontWeight={"600"}
                      color={"#ff3e6c"}
                    >
                      Check
                    </Text>
                  </InputRightElement>
                </InputGroup>

                <Text textAlign={"left"} fontSize={"13px"}>
                  Please enter PIN code to check delivery time & Pay on Delivery
                  Availability
                </Text>

                <Box
                  m={"20px 0px"}
                  textAlign={"left"}
                  fontSize={"14px"}
                  fontWeight={"400"}
                >
                  <Text>100% Original Products</Text>
                  <Text>Pay on delivery might be available</Text>
                  <Text>Easy 30 days returns and exchanges</Text>
                </Box>

                <Box>
                  <HStack>
                    <Text fontWeight={"500"}>BEST OFFERS</Text>
                    <Text fontSize={"20px"}>
                      <BsTag />
                    </Text>
                  </HStack>

                  <Box
                    m={"20px 0px"}
                    textAlign={"left"}
                    fontSize={"14px"}
                    fontWeight={"400"}
                  >
                    <HStack justify={"flex-start"} mb={"3px"} align={"center"}>
                      <Text fontWeight={"500"}>Best Price:</Text>
                      <Text fontWeight={"700"} color={"#ff905a"}>
                        Rs.
                        {data?.variant_price > 799
                          ? data?.variant_price - 200
                          : data?.variant_price}
                      </Text>
                    </HStack>
                    <li>
                      Applicable on: Orders above Rs. 799 (only on first
                      purchase)
                    </li>
                    <li>
                      Coupon code:{" "}
                      <span style={{ fontWeight: "600" }}>MYNTRA200</span>
                    </li>
                    <li>
                      Coupon Discount: Rs. 200 off (check cart for final
                      savings)
                    </li>
                    <Text
                      fontWeight={"500"}
                      cursor={"pointer"}
                      mt={"5px"}
                      color={"#ff3f6c"}
                    >
                      View Eligible Products
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box mt={"20px"} textAlign={"left"}>
                <HStack mb={"10px"}>
                  <Text fontWeight={"500"}>PRODUCT DETAILS</Text>
                  <Text fontSize={"20px"}>
                    <BiDetail />
                  </Text>
                </HStack>

                <Text fontSize={"14px"}>{data?.title}</Text>
                <Text mt={"10px"} fontSize={"14px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et ipsum aliqua dolor
                  sit dolore magna aliqua. Ut enim ad minim et dolore veniam.
                </Text>

                <Text mt={"10px"} fontSize={"14px"} textAlign={"justify"}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  rerum facilis est et expedita distinctio. Nam libero tempore,
                  cum soluta nobis est eligendi optio cumque nihil impedit quo
                  minus id quod maxime placeat facere possimus, omnis voluptas
                  assumenda est, omnis dolor repellendus. Temporibus autem
                  eveniet ut et voluptates repudiandae sint et molestiae non
                  recusandae. Itaque earum rerum hic tenetur a sapiente
                  delectus, ut aut reiciendis voluptatibus maiores alias
                  consequatur aut perferendis doloribus asperiores repellat.
                </Text>

                <Text mt={"10px"} fontSize={"14px"}>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  ut labore et ipsum aliqua dolor sit dolore magna aliqua. Ut
                  enim ad minim et dolore veniam.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Stack>

        <Box
          position={"relative"}
          top={"100px"}
          p={{
            base: "0px 5px",
            sm: "0px 20px",
            md: "0px 5px",
            lg: "0px 15px",
          }}
        >
          <Text pl={"10px"} textAlign={"left"} fontWeight={"600"}>
            SIMILAR PRODUCTS
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            w={"100%"}
            boxSizing={"border-box"}
          >
            {products
              ?.filter((e, i) => i < 20)
              .map((item) => (
                <Product key={item.id} props={item} />
              ))}
          </Grid>
        </Box>

        <Box
          m={"150px 0px 50px 0px"}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            m={"10px"}
            p={"5px 20px 12px 20px"}
            borderRadius={"50px"}
            border={"1px solid lightgray"}
            color={"#ff3e6c"}
            fontWeight={"500"}
            fontSize={{ base: "14px", sm: "14px", md: "14px", lg: "15px" }}
            _hover={{ border: "1px solid #ff3e6c" }}
            cursor={"pointer"}
            transition={"0.3s"}
            // onClick={() => {
            //   navigate(
            //     `/products/${person(data?.ideal_for)}?brand=${data?.brand}`
            //   );
            //   window.scrollTo(0, 0);
            // }}
          >
            MORE KURTA SETS BY {data?.brand?.toUpperCase()}{" "}
            <span
              style={{ fontSize: "28px", position: "relative", top: "2px" }}
            >
              &#8250;
            </span>
          </Text>

          <Text
            m={"10px"}
            p={"5px 20px 12px 20px"}
            borderRadius={"50px"}
            border={"1px solid lightgray"}
            color={"#ff3e6c"}
            fontWeight={"500"}
            fontSize={{ base: "14px", sm: "14px", md: "14px", lg: "15px" }}
            _hover={{ border: "1px solid #ff3e6c" }}
            cursor={"pointer"}
            transition={"0.3s"}
            // onClick={() => {
            //   navigate(
            //     `/products/${person(data?.ideal_for)}?product_type=${
            //       data?.product_type
            //     }`
            //   );
            //   window.scrollTo(0, 0);
            // }}
          >
            MORE KURTA SETS BY {data?.product_type?.toUpperCase()}{" "}
            <span
              style={{ fontSize: "28px", position: "relative", top: "2px" }}
            >
              &#8250;
            </span>
          </Text>
        </Box>
      </Box>
    </>
  );
};
