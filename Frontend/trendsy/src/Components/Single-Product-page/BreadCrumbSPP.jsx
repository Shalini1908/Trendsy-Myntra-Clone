import { Box } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

export const BreadCrumbSPP = () => {
  const { Q, title, id } = useParams();

  const person =
    Q === "Men"
      ? "men"
      : Q === "Women"
      ? "women"
      : Q === "Boys"
      ? "boys"
      : Q === "Girls"
      ? "girls"
      : Q;

  const NewPerson =
    Q === "men"
      ? "Men"
      : Q === "women"
      ? "Women"
      : Q === "boys"
      ? "Boys"
      : Q === "girls"
      ? "Girls"
      : Q;

  return (
    <>
      <Box mb={"10px"}>
        <Breadcrumb
          fontWeight="medium"
          fontSize={{ base: "8px", sm: "10px", md: "14px", lg: "14px" }}
        >
          <BreadcrumbItem
            _hover={{ color: "black" }}
            color={"#696d7f"}
            fontWeight={"500"}
          >
            <Link to={"/"}>Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem
            _hover={{ color: "black" }}
            textDecor={"none"}
            color={"#696d7f"}
          >
            <Link to={`/products/${person}`}>Myntra Fashion Store</Link>
          </BreadcrumbItem>

          <BreadcrumbItem
            _hover={{ color: "black" }}
            textDecor={"none"}
            color={"#696d7f"}
          >
            <Link to={`/products/${person}`}>{NewPerson}</Link>
          </BreadcrumbItem>

          <BreadcrumbItem fontWeight={"600"} textDecor={"none"} isCurrentPage>
            <Link to={`/products/${person}/${title}/${id}`}>{title}</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};
