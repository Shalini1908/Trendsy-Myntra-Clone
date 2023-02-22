import { Box } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const BreadCrumb = () => {
  return (
    <>
      <Box mb={"10px"}>
        <Breadcrumb fontWeight="medium" fontSize="sm">
          <BreadcrumbItem
            fontSize={"13px"}
            color={"#696d7f"}
            fontWeight={"500"}
          >
            <Link to={"/"}>Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem
            fontWeight={"650"}
            fontSize={"13px"}
            textDecor={"none"}
            isCurrentPage
          >
            <Link to={"/products"}>Myntra Fashion Store</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};
