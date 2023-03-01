import {
  Box,
  Grid,
  HStack,
  Select,
  Stack,
  Text,
  UnorderedList,
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
  const products = [
    {
      id: 6937673,
      title: "IMARA Women Black Solid Top",
      brand: "IMARA",
      size: "XL",
      product_type: "Top",
      variant_price: 959,
      variant_mrp: 1599,
      dominant_material: "Polyester",
      care_instructions: "Polyester | Dry-clean",
      actual_color: "Black",
      dominant_color: "Black",
      images: [
        "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/88c6ad02-eab9-42c8-8b8e-cbcd8f015d361535627393491-IMARA-Women-Black-Solid-Top-7471535627393374-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/06f7fe3a-08c5-4718-9d5b-d2e82f7806a71535627393473-IMARA-Women-Black-Solid-Top-7471535627393374-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/9f9ad6fe-3260-4bf8-9088-59dd7351a0f41535627393453-IMARA-Women-Black-Solid-Top-7471535627393374-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/8e268984-4d24-4563-b3ee-c2ff0f2c600c1535627393440-IMARA-Women-Black-Solid-Top-7471535627393374-4.jpg",
        "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/bf975857-fee6-4685-9630-ca7cd4f13d631535629577797-IMARA-Women-Black-Solid-Top-81535629577403-5.jpg",
      ],
      type: "Clothing/Women/Tops/IMARA/More by IMARA",
      ideal_for: "Women",
      is_in_stock: "Out of Stock",
    },
    {
      id: 7441182,
      title: "House of Pataudi Men Black Printed Straight Kurta",
      brand: "House of Pataudi",
      size: "XL",
      product_type: "Straight Kurta",
      variant_price: 799,
      variant_mrp: 1999,
      dominant_material: "cotton",
      care_instructions: "100% cottonMachine-wash",
      actual_color: "Black",
      dominant_color: "Black",
      images: [
        "http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/7f473119-8e08-4548-b5f3-689c25b698b11541830165496-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/28c93a4d-ff32-4418-a213-d6c8d8ce4a761541830165474-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/d859a4ad-46e8-4a00-8fb0-581ad42371ff1541830165454-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/f5427679-c669-42b7-86a1-9aec1d1837f81541830165438-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-4.jpg",
        "",
      ],
      type: "Clothing/Men/Kurtas/House of Pataudi/More by House of Pataudi",
      ideal_for: "Men",
      is_in_stock: "In Stock",
    },
    {
      id: 1314889,
      title: "Dupatta Bazaar Pink Dupatta",
      brand: "Dupatta Bazaar",
      size: "Onesize",
      product_type: "Dupatta",
      variant_price: 349,
      variant_mrp: 499,
      dominant_material: "Chiffon",
      care_instructions: "Chiffon | Hand-wash",
      actual_color: "Pink",
      dominant_color: "Pink",
      images: [
        "http://assets.myntassets.com/v1/assets/images/1314889/2016/4/20/11461153070320-Dupatta-Bazaar-Black--Beige-Checked-Dupatta-1961461153069992-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/1314889/2016/4/20/11461153070226-Dupatta-Bazaar-Black--Beige-Checked-Dupatta-1961461153069992-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/1314889/2016/4/20/11461153070149-Dupatta-Bazaar-Black--Beige-Checked-Dupatta-1961461153069992-3.jpg",
      ],
      type: "Clothing/Women/Dupatta/Dupatta Bazaar/More by Dupatta Bazaar",
      ideal_for: "Women",
      is_in_stock: "In Stock",
    },
    {
      id: 7705322,
      title: "Manyavar Men Yellow & White Self Design Kurta with Churidar",
      brand: "Manyavar",
      size: "S",
      product_type: "Kurta with Churidar",
      variant_price: 2999,
      variant_mrp: 2999,
      dominant_material: "Silk",
      care_instructions:
        "Top fabric: Silk Blend | Bottom fabric: Silk Blend | Dry-clean",
      actual_color: "Yellow | White",
      dominant_color: "Yellow",
      images: [
        "http://assets.myntassets.com/v1/assets/images/7705322/2018/10/29/e9ea701d-93aa-460f-a0dc-e916afdb4f6a1540807741626-Manyavar-Mens-Yellow-Full-Sleeve-Regular-Fit-Banded-Collar-Kurta--Churidar-Set-4991540807741431-1.jpg",
        "",
        "",
        "",
        "",
      ],
      type: "Clothing/Men/Kurta Sets/Manyavar/More by Manyavar",
      ideal_for: "Men",
      is_in_stock: "Out of Stock",
    },
    {
      id: 7766518,
      title: "Geroo Women Green cotton hand block print skirt",
      brand: "Geroo Jaipur",
      size: "34",
      product_type: "",
      variant_price: 1572,
      variant_mrp: 1850,
      dominant_material: "",
      care_instructions: "First wash dry clean than after hand wash",
      actual_color: "Green",
      dominant_color: "Green",
      images: [
        "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/ec7ea490-1f0a-47a2-952d-830bf7db95591542012680302-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/04ad2286-2977-48f4-9d47-df1fe73a84731542012680275-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/523a090a-0e40-4191-8044-0201172066de1542012680248-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/de412e35-424c-45d3-82f1-1d75bb8e321b1542012680224-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-4.jpg",
        "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/991472fd-1e7b-4539-97d9-3d93953de8a01542012680206-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-5.jpg",
      ],
      type: "Clothing/Women/Skirts/Geroo Jaipur/More by Geroo Jaipur",
      ideal_for: "Women",
      is_in_stock: "Out of Stock",
    },
    {
      id: 1923426,
      title: "The Indian Garage Co Men Blue & White Printed A-Line Kurta",
      brand: "The Indian Garage Co",
      size: "XL",
      product_type: "A-Line Kurta",
      variant_price: 479,
      variant_mrp: 1199,
      dominant_material: "Cotton",
      care_instructions: "Cotton  | Machine-wash",
      actual_color: "Blue | White",
      dominant_color: "Blue",
      images: [
        "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802877-The-Indian-Garage-Co-Men-Blue--White-Printed-A-Line-Kurta-7691498040798521-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802858-The-Indian-Garage-Co-Men-Blue--White-Printed-A-Line-Kurta-7691498040798521-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802845-The-Indian-Garage-Co-Men-Blue--White-Printed-A-Line-Kurta-7691498040798521-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802824-The-Indian-Garage-Co-Men-Blue--White-Printed-A-Line-Kurta-7691498040798521-4.jpg",
        "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802800-The-Indian-Garage-Co-Men-Blue--White-Printed-A-Line-Kurta-7691498040798521-5.jpg",
      ],
      type: "Clothing/Men/Kurtas/The Indian Garage Co/More by The Indian Garage Co",
      ideal_for: "Men",
      is_in_stock: "In Stock",
    },
    {
      id: 6551403,
      title: "Anouk Women Maroon Solid A-Line Kurta",
      brand: "Anouk",
      size: "XS",
      product_type: "A-Line Kurta",
      variant_price: 1359,
      variant_mrp: 3399,
      dominant_material: "Polyester",
      care_instructions: "Polyester |  Dry-clean",
      actual_color: "Maroon",
      dominant_color: "Maroon",
      images: [
        "http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/1ab6bfba-4825-4e59-ac0e-21e1ebb63aeb1545212392273-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/b3670fb6-a561-40b1-9d69-9493cbbc582c1545212392251-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/848be171-6b6f-41e6-9af8-0409bdb545f31545212392236-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/d3af7853-de3f-406e-a895-c86ca8a5347f1545212392223-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-4.jpg",
        "",
      ],
      type: "Clothing/Women/Kurtas/Anouk/More by Anouk",
      ideal_for: "Women",
      is_in_stock: "In Stock",
    },
    {
      id: 8389801,
      title: "SALWAR STUDIO Boys Orange & White Printed Kurta with Pyjamas",
      brand: "SALWAR STUDIO",
      size: "3-4Y",
      product_type: "Kurta with Pyjamas",
      variant_price: 586,
      variant_mrp: 1955,
      dominant_material: "Cotton",
      care_instructions:
        "Top fabric: Pure Cotton | Bottom fabric: Pure Cotton | Hand-wash",
      actual_color: "White | Orange",
      dominant_color: "Orange",
      images: [
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/4/524faa41-cecd-48b9-bfcf-f92b696e80581546592411715-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/4/0c80d05b-9e7e-4622-ab41-8a898caa906e1546592411750-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/4/6171830a-5f9c-4488-9d53-d8f34b002bce1546592411790-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/4/af14cc98-060c-4a8d-8ebc-f688d58662dd1546592411828-4.jpg",
        "",
      ],
      type: "Clothing/Boys/Kurta Sets/SALWAR STUDIO/More by SALWAR STUDIO",
      ideal_for: "Boys",
      is_in_stock: "Out of Stock",
    },
    {
      id: 9791991,
      title: "Clora Creation Women Navy Blue Wide Leg Printed Palazzos",
      brand: "Clora Creation",
      size: "40",
      product_type: "Printed Palazzos",
      variant_price: 979,
      variant_mrp: 1399,
      dominant_material: "Viscose Rayon",
      care_instructions: "Viscose Rayon | Hand-wash",
      actual_color: "Blue | Navy",
      dominant_color: "Navy",
      images: [
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/cd9e6d5d-50cf-4188-b229-8b890c4210ae1558658750484-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/2e63922a-1ba1-41d1-a3e0-c698eef586fe1558658750516-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/cb471a2d-c834-4178-ad78-28b99e4047261558658750548-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/97b1c435-8469-480e-bbf3-ec88d69734a81558658750576-4.jpg",
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/1c7ad837-82e0-47e7-90fd-e6a60f586f161558658750603-5.jpg",
      ],
      type: "Clothing/Women/Palazzos/Clora Creation/More by Clora Creation",
      ideal_for: "Women",
      is_in_stock: "Out of Stock",
    },
    {
      id: 7098789,
      title: "Libas Women Blue & White Striped Straight Kurta",
      brand: "Libas",
      size: "S",
      product_type: "Straight Kurta",
      variant_price: 519,
      variant_mrp: 1299,
      dominant_material: "Rayon",
      care_instructions: "Rayon | Hand-wash",
      actual_color: "Blue | White",
      dominant_color: "Blue",
      images: [
        "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/dad722b8-f2c0-4e7e-aa5f-a3814856f8581534741627049-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/239210d3-5481-48a9-94b4-c52b84c915411534741627030-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/b433c95b-02df-4729-85d6-450f8a72c34e1534741627003-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/d0e224aa-9a05-429e-a699-d19e5e16e4d01534741626984-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-4.jpg",
        "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/9b50c872-e850-4523-ba8f-8bab4b8e4c291534741626965-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-5.jpg",
      ],
      type: "Clothing/Women/Kurtas/Libas/More by Libas",
      ideal_for: "Women",
      is_in_stock: "In Stock",
    },
    {
      id: 7098851,
      title: "Libas Women Coffee Brown Solid Kurta with Palazzos",
      brand: "Libas",
      size: "M",
      product_type: "Kurta with Palazzos",
      variant_price: 1119,
      variant_mrp: 2799,
      dominant_material: "Silk",
      care_instructions:
        "Top fabric: Tussar Silk | Bottom fabric: Tussar Silk | Hand-wash",
      actual_color: "Brown | Coffee Brown",
      dominant_color: "Coffee Brown",
      images: [
        "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/8728af1c-969f-445c-b12d-12b6c3fb589e1534495475899-Libas-Women-Kurta-Sets-1471534495475783-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/be3fd714-e82a-472c-94b3-3481576f8d3d1534495475880-Libas-Women-Kurta-Sets-1471534495475783-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/dfc51022-ea2a-4732-aaee-a5cc34560cf01534495475862-Libas-Women-Kurta-Sets-1471534495475783-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/27d1a787-4ba5-40c9-a132-1ed8624c8d081534495475843-Libas-Women-Kurta-Sets-1471534495475783-4.jpg",
        "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/86e5b9d0-2843-4250-be39-f6ebb54244001534495475918-Libas-Women-Kurta-Sets-1471534495475783-5.jpg",
      ],
      type: "Clothing/Women/Kurta Sets/Libas/More by Libas",
      ideal_for: "Women",
      is_in_stock: "Out of Stock",
    },
    {
      id: 1681450,
      title: "Anouk Women Navy Printed Straight Kurta",
      brand: "Anouk",
      size: "XL",
      product_type: "Straight Kurta",
      variant_price: 1099,
      variant_mrp: 1099,
      dominant_material: "viscose",
      care_instructions: "100% viscose  Machine-wash",
      actual_color: "Navy",
      dominant_color: "Navy",
      images: [
        "http://assets.myntassets.com/v1/assets/images/1681450/2017/1/27/11485516674302-Anouk-Women-Navy-Blue-Printed-Straight-Kurta-361485516674086-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/1681450/2017/1/27/11485516674283-Anouk-Women-Navy-Blue-Printed-Straight-Kurta-361485516674086-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/1681450/2017/1/27/11485516674263-Anouk-Women-Navy-Blue-Printed-Straight-Kurta-361485516674086-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/1681450/2017/1/27/11485516674223-Anouk-Women-Navy-Blue-Printed-Straight-Kurta-361485516674086-4.jpg",
        "",
      ],
      type: "Clothing/Women/Kurtas/Anouk/More by Anouk",
      ideal_for: "Women",
      is_in_stock: "Out of Stock",
    },
    {
      id: 4879689,
      title: "Twisha Girls Green & Yellow Printed Kurta with Churidar",
      brand: "Twisha",
      size: "3-4Y",
      product_type: "Kurta with Churidar",
      variant_price: 639,
      variant_mrp: 1599,
      dominant_material: "Cotton",
      care_instructions:
        "Top fabric: Pure Cotton | Bottom fabric: Pure Cotton | Machine-wash",
      actual_color: "Yellow | Green",
      dominant_color: "Green",
      images: [
        "http://assets.myntassets.com/v1/assets/images/4879689/2018/5/4/11525438181230-Girls-Kurta-Leggings-set-7771525438181121-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/4879689/2018/5/4/11525438181214-Girls-Kurta-Leggings-set-7771525438181121-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/4879689/2018/5/4/11525438181199-Girls-Kurta-Leggings-set-7771525438181121-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/4879689/2018/5/4/11525438181176-Girls-Kurta-Leggings-set-7771525438181121-4.jpg",
        "",
      ],
      type: "Clothing/Girls/Kurta Sets/Twisha/More by Twisha",
      ideal_for: "Girls",
      is_in_stock: "Out of Stock",
    },
    {
      id: 7110603,
      title: "K&U Girls Brown & Red Printed Kurti",
      brand: "K&U",
      size: "5-6Y",
      product_type: "Kurti",
      variant_price: 1099,
      variant_mrp: 1099,
      dominant_material: "Cotton",
      care_instructions: "CottonDry-clean",
      actual_color: "Brown | Red",
      dominant_color: "Brown",
      images: [
        "http://assets.myntassets.com/v1/assets/images/7110603/2018/8/24/f014c58b-000d-44cd-aabc-5d27c38eb8be1535100245382-KU-Girls-Kurtis-1491535100245272-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/7110603/2018/8/24/60675b96-c79e-4957-8f6f-cb9a345ef6251535100245351-KU-Girls-Kurtis-1491535100245272-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/7110603/2018/8/24/373218c6-8728-4c00-bbee-90e2740fbe221535100245316-KU-Girls-Kurtis-1491535100245272-3.jpg",
        "",
        "",
      ],
      type: "Clothing/Girls/Kurtis/K&U/More by K&U",
      ideal_for: "Girls",
      is_in_stock: "Out of Stock",
    },
    {
      id: 9313463,
      title:
        "Raymond Home Pink & Purple Geometric 200 TC Cotton 1 Queen Bedsheet with 2 Pillow Covers",
      brand: "Raymond Home",
      size: "Double Queen",
      product_type: "",
      variant_price: 1499,
      variant_mrp: 1499,
      dominant_material: "Cotton",
      care_instructions: "Cotton | Machine-wash",
      actual_color: "Pink | Purple",
      dominant_color: "Pink",
      images: [
        "http://assets.myntassets.com/v1/assets/images/9313463/2019/4/15/8ac14b89-fe99-4a81-a6a4-e9401b1d6f4c1555307689908-Raymond-Home-2291555307688631-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/9313463/2019/4/15/0d1f6125-a149-4ae2-afbc-6b4e81d41d8b1555307689888-Raymond-Home-2291555307688631-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/9313463/2019/4/15/8a66a70a-e569-438a-b2e6-762e4f0d5ac11555307689869-Raymond-Home-2291555307688631-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/9313463/2019/4/15/95f25f5c-2732-4528-82b9-5dab734b9e031555307689838-Raymond-Home-2291555307688631-4.jpg",
        "",
      ],
      type: "Home/Unisex/Bedsheets/Raymond Home/More by Raymond Home",
      ideal_for: "Unisex",
      is_in_stock: "Out of Stock",
    },
    {
      id: 4375584,
      title: "Shree Women Beige & Red Rayon Printed Straight Kurta",
      brand: "Shree",
      size: "XL",
      product_type: "Straight Kurta",
      variant_price: 499,
      variant_mrp: 999,
      dominant_material: "Viscose Rayon",
      care_instructions: "Viscose Rayon |  Hand-wash",
      actual_color: "Beige | Red",
      dominant_color: "Beige",
      images: [
        "http://assets.myntassets.com/v1/assets/images/4375584/2018/4/10/11523364065324-Shree-Women-Kurtas-6671523364065087-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/4375584/2018/4/10/11523364065288-Shree-Women-Kurtas-6671523364065087-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/4375584/2018/4/10/11523364065259-Shree-Women-Kurtas-6671523364065087-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/4375584/2018/4/10/11523364065231-Shree-Women-Kurtas-6671523364065087-4.jpg",
        "http://assets.myntassets.com/v1/assets/images/4375584/2018/4/10/11523364065187-Shree-Women-Kurtas-6671523364065087-5.jpg",
      ],
      type: "Clothing/Women/Kurtas/Shree/More by Shree",
      ideal_for: "Women",
      is_in_stock: "Out of Stock",
    },
  ];

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

  const { isLoading, TotalData } = useSelector((store) => {
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
                - {products?.length} items
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
              {products?.map((item, i) => {
                if (i < 30) {
                  return <Product key={item._id} props={item} />;
                }
              })}
            </Grid>

            {/* <Stack minW={"300px"} justify={"space-between"} align={"center"}>
              <Pagination
                current={page}
                total={Math.ceil(products.length / limit)}
                onChange={(value) => setPage(value)}
              />
            </Stack> */}
          </Stack>
        </Grid>
      </Stack>
      <Footer />
    </>
  );
};
