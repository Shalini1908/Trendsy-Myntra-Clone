import {
  Box,
  Grid,
  HStack,
  Select,
  Stack,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { FiltersTop } from "../Components/Products-page/FiltersTop";
import { BreadCrumb } from "../Components/Products-page/BreadCrumb";
import { Product } from "../Components/Products-page/Product";
import { CheckBoxPerson } from "../Components/Products-page/Filters/CheckBoxPerson";
import { CheckBoxCategory } from "../Components/Products-page/Filters/CheckBoxCategory";
import { CheckBoxPrice } from "../Components/Products-page/Filters/CheckBoxPrice";
import { CheckBoxBrands } from "../Components/Products-page/Filters/CheckBoxBrands";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { CheckBoxColors } from "../Components/Products-page/Filters/CheckBoxColors";
import { FiltersDrawer } from "../Components/Products-page/Filters/FiltersDrawer";
import {
  getProducts,
  productsGetErrorAction,
  productsGetRequestAction,
  productsGetSuccessAction,
} from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PriceFilter } from "../Components/Products-page/Filters/PriceFilter";
import { Pagination } from "../Components/Products-page/Pagination";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { OnHoverProducts } from "../Components/Products-page/OnHoverProducts";

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);

  const initialBrands = searchParams.getAll("brands");
  const [brands, setBrands] = useState(initialBrands || []);

  const initialColors = searchParams.getAll("colors");
  const [colors, setColors] = useState(initialColors || []);

  const initialPrice = searchParams.getAll("price");
  const [price, setPrice] = useState(initialPrice || []);

  const initialSize = searchParams.getAll("size");
  const [size, setSize] = useState(initialSize || []);

  const { products, isLoading, TotalData } = useSelector((store) => {
    return {
      products: store.products,
      isLoading: store.isLoading,
      TotalData: store.TotalData,
    };
  });

  const collections = (data, name) => {
    const unique = [];

    data?.forEach((item) => {
      if (!unique.includes(item[name])) {
        unique.push(item[name]);
      }
    });

    const newArr = unique.filter((str) => str !== "");

    return newArr;
  };

  const filterData = (data, name) => {
    let collectionQueries = "";
    for (let i = 0; i <= data.length - 1; i++) {
      collectionQueries += `${name}=${data[i]}&`;
    }
    return collectionQueries;
  };

  const [value, setValue] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  // console.log(value);

  const { Q } = useParams();
  const ideal =
    Q === "men"
      ? "Men"
      : Q === "women"
      ? "Women"
      : Q === "boys"
      ? "Boys"
      : Q === "girls"
      ? "Girls"
      : Q;

  const dispatch = useDispatch();

  const getFilterProducts = (data) => {
    const brandCollection = filterData(data?.brands, "brand");
    const categoryCollection = filterData(data?.category, "category");
    const colorsCollection = filterData(data?.colors, "colors");
    const sizeCollection = filterData(data?.size, "size");
    // console.log(sizeCollection);
    dispatch(productsGetRequestAction());
    axios
      .get(
        `${process.env.REACT_APP_TRENDZY_BASE_URL}/data?ideal=${ideal}&${brandCollection}${categoryCollection}${colorsCollection}${sizeCollection}sortBy=${value}&page=${page}&limit=${limit}`
      )
      .then((res) => {
        dispatch(productsGetSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(productsGetErrorAction());
        console.log(err.message);
      });
  };

  useEffect(() => {
    dispatch(getProducts(ideal));

    const params = {
      brands,
      category,
      colors,
      price,
      size,
    };
    getFilterProducts(params);
    setSearchParams(params);
  }, [brands, category, colors, price, size, value, page, limit]);

  const handleClear = () => {
    setCategory([]);
    setBrands([]);
    setColors([]);
    setPrice([]);
    setSize([]);
  };

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
  // console.log(brands);

  return (
    <>
      <Navbar />
      <Stack
        w={"100%"}
        p={{ base: "10px", sm: "10px", md: "15px", lg: "25px" }}
      >
        <Box mb={"15px"}>
          <BreadCrumb />
          <HStack w={"100%"}>
            <HStack w={"100%"}>
              <Text fontSize={"16px"} fontWeight={"650"} textAlign={"left"}>
                Myntra Fashion Store
              </Text>
              <Text fontSize={"14px"} color={"#696d7f"} fontWeight={"450"}>
                {" "}
                - {TotalData?.length} items
              </Text>
            </HStack>
            <UnorderedList
              display={{ base: "block", sm: "block", md: "none", lg: "none" }}
            >
              <Stack w={"100%"} justify={"flex-start"} align={"flex-start"}>
                <FiltersDrawer
                  Q={Q}
                  category={category}
                  setCategory={setCategory}
                  brands={brands}
                  setBrands={setBrands}
                  colors={colors}
                  setColors={setColors}
                  price={price}
                  setPrice={setPrice}
                  size={size}
                  setSize={setSize}
                  handleClear={handleClear}
                  initialCategory={initialCategory}
                  initialBrands={initialBrands}
                  initialColors={initialColors}
                  initialPrice={initialPrice}
                  initialSize={initialSize}
                />
              </Stack>
            </UnorderedList>
          </HStack>
        </Box>

        <Grid
          templateColumns={{
            base: "repeat(1, 100%)",
            sm: "repeat(1, 100%)",
            md: "repeat(2, 25% 75%)",
            lg: "repeat(2, 18% 82%)",
          }}
          w={"100%"}
          boxSizing={"border-box"}
        >
          <UnorderedList
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            marginLeft={"0px"}
          >
            <Stack w={"100%"} maxW={"240px"}>
              <HStack justify={"space-between"} mb={"12px"}>
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
              <Stack
                w={"95%"}
                borderRight={"1px solid #f2f2f2"}
                position={"relative"}
                top={"5px"}
              >
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
                {/* <PriceFilter /> */} {/* PRICE SLIDER  */}
              </Stack>
            </Stack>
          </UnorderedList>

          <Stack>
            <HStack w={"100%"} mt={"0px"}>
              <FiltersTop
                collections={collections}
                category={category}
                brands={brands}
                colors={colors}
                price={price}
                size={size}
                setSize={setSize}
                setCategory={setCategory}
                setBrands={setBrands}
                setColors={setColors}
                setPrice={setPrice}
                value={value}
                setValue={setValue}
              />
            </HStack>

            <Grid
              position={"relative"}
              top={"-40px"}
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              w={"100%"}
              boxSizing={"border-box"}
            >
              {products?.map((item, i) => (
                <Product
                  handleOption={AddToWishlist}
                  option={"WISHLIST"}
                  key={item._id}
                  props={item}
                />
              ))}
            </Grid>

            <Stack minW={"300px"} justify={"space-between"} align={"center"}>
              <Pagination
                current={page}
                total={Math.ceil(TotalData.length / limit)}
                onChange={(value) => setPage(value)}
              />
            </Stack>
          </Stack>
        </Grid>
      </Stack>
      <Footer />
    </>
  );
};
