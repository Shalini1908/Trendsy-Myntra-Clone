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
} from "@chakra-ui/react";

import { AiFillStar } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsTag } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { ProductImage } from "../Components/Single-Product-page/ProductImage";
import { useState } from "react";
import { BreadCrumbSPP } from "../Components/Single-Product-page/BreadCrumbSPP";
import { Product } from "../Components/Products-page/Product";

export const SingleProduct = () => {
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

  const data = {
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
  };

  const [img, setImg] = useState(data.images[0]);
  const dummySize = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <>
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
                  {data.images.map((item, i) => {
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
                {data.images.map((item, i) => {
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
                    {data.brand}
                  </Text>
                  <Text
                    fontWeight={"450"}
                    textAlign={"left"}
                    color={"#535665"}
                    fontSize={{ base: "18", sm: "18", md: "17", lg: "18" }}
                  >
                    {data.title}
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
                    ₹{data.variant_price}
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
                    ₹{data.variant_mrp}
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
                    ((data.variant_mrp - data.variant_price) * 100) /
                      data.variant_mrp
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
                  {dummySize.map((item) => (
                    <Box
                      border={
                        data.size === item
                          ? "1px solid #ff3e6c"
                          : "1px solid lightgray"
                      }
                      color={data.size === item ? "black" : "gray"}
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
                        {data.variant_price > 799
                          ? data.variant_price - 200
                          : data.variant_price}
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

                <Text fontSize={"14px"}>{data.title}</Text>
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
            {products.map((item) => (
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
          >
            MORE KURTA SETS BY {data.brand.toUpperCase()}{" "}
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
          >
            MORE KURTA SETS BY {data.product_type.toUpperCase()}{" "}
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
