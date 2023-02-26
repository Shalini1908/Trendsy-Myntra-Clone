import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  TagLabel,
  VStack,
  Checkbox,
  CheckboxGroup,
  Text,
  Image,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import swal from "sweetalert";
import { useDispatch, useSelector } from 'react-redux';
import { LoginFunctionSuccess } from '../Redux/actions'
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const dispatch = useDispatch()
  const [num, Setnum] = useState("");
  const [pass, Setpass] = useState("");
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [gender, Setgender] = useState("");
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      num: localStorage.getItem("num"),
      name: "",
      email: "",
      pass: "",
      gender: "",
    },
    validationSchema: yup.object({
      num: yup
        .string()
        .required("number Required")
        .min(10)
        .max(10, "Please enter valid number"),
      name: yup
        .string()
        .required("name Required")
        .min(6, "your name is too Short"),
      email: yup.string().email().required("Please enter valid email"),
      pass: yup
        .string()
        .required("Please enter password ")
        .min(6, "Your password is too Short"),
      gender: yup.array().required("Please select gender").max(1),
    }),
    onSubmit: (values, actions) => {
      // console.log(values)

      const payload = {
        num: values.num,
        pass: values.pass,
        name: values.name,
        email: values.email,
        gender: values.gender[0],
      };

      //  console.log(payload)

      fetch("https://zany-bikini-bass.cyclic.app/user/register", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())

        .then((res) => {
          localStorage.setItem("trendsyToken", JSON.stringify(res.token));
          console.log(res);dispatch(LoginFunctionSuccess({name:values.name}));
          {
            res.Msg == "user already present"
              ? swal("user already present")
              : swal(
                  "account created Successfully",
                  "you are being redirected",
                  "success"
                );
          }; navigate("/")
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <Box height={["100vh","100vh","100vh","100vh"]} bg="#fdefec" w={["100%","100%","100%","100%"]}>
    
      <Box
        bg="white"
        padding="20px"
        display="inline-block"
        width={["310px", "310px", "310px", "380px"]}
        margin="50px auto"
      >
          <Image
          src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
          alt="signupimage"
         m={"auto"}
         w={"380px"}
        />
        {/* <Heading size={["xs", "xs", "sm", "md"]} color={"#342c34"}>Create your account</Heading> */}
        <FormControl isInvalid={formik.errors.num && formik.touched.num}>
          <InputGroup mt={["5px", "10px", "10px", "-10px"]}>
            <InputLeftElement
              mt="30px"
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />

            <Input
              mt="30px"
              name="num"
              max={10}
              border="1px solid #f5f5f6"
              type="tel"
              placeholder="Phone number"
              // disabled
              backgroundColor={"white"}
              onChange={formik.handleChange}
              value={formik.values.num}
              onBlur={formik.handleBlur}
            />
          </InputGroup>
          <FormErrorMessage>{formik.errors.num}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.pass && formik.touched.pass}>
          <Input
            mt={["10px", "10px", "20px", "20px"]}
            name="pass"
            border="1px solid #f5f5f6"
            type="password"
            backgroundColor={"white"}
            placeholder="enter password"
            onChange={formik.handleChange}
            value={formik.values.pass}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.pass}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.name && formik.touched.name}>
          <Input
            mt={["10px", "10px", "20px", "20px"]}
            name="name"
            border="1px solid #f5f5f6"
            type="text"
            backgroundColor={"white"}
            placeholder="Full name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.email && formik.touched.email}>
          <Input
            mt={["10px", "10px", "20px", "20px"]}
            name="email"
            border="1px solid #f5f5f6"
            type="email"
            backgroundColor={"white"}
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <Flex mt={["10px", "10px", "20px", "20px"]} alignItems="center">
          <Text fontSize={["xs", "xs", "sm", "sm"]}>Select Gender</Text>{" "}
          <Stack ml="50px" spacing={5} direction="row">
            <FormControl
              isInvalid={formik.errors.gender && formik.touched.gender}
            >
              <Checkbox
                name="gender"
                colorScheme={formik.values.gender[0] === "male" ? "red" : ""}
                value="male"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                Male
              </Checkbox>
              <FormErrorMessage>{formik.errors.gender}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.gender && formik.touched.gender}
            >
              <Checkbox
                name="gender"
                colorScheme={
                  formik.values.gender[0] === "female" ? "green" : ""
                }
                value="female"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                Female
              </Checkbox>
              <FormErrorMessage>{formik.errors.gender}</FormErrorMessage>
            </FormControl>
          </Stack>
        </Flex>
        <Button
          onClick={formik.handleSubmit}
          mt="20px"
          width={["85%","90%","90%","100%"]}
          bgColor={"#ff3f6c"}
          color="white"
          cursor="pointer"
          _hover={{ bgColor: "#ff3f6c" }}
        >
          Create Account
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
