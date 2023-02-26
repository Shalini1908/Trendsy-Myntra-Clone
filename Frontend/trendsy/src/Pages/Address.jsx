import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  VStack,
  Text,
  Checkbox,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { PhoneIcon } from "@chakra-ui/icons";
const Address = () => {
  const navigate = useNavigate();

  const [close, Setclose] = useState(false); //button disabled
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [num, Setnum] = useState("");
  const [pass, Setpass] = useState("");
  const [pin, Setpin] = useState("");
  const [add, Setadd] = useState("");
  const [town, Settown] = useState("");
  const [state, Setstate] = useState("");
  const [save, Setsave] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      num: "",
      email: "",
      password: "",
      pin: "",
      add: "",
      town: "",
      state: "",
      save: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("name Required")
        .min(6, "your name is too Short"),
      num: yup
        .string()
        .required("number Required")
        .min(10)
        .max(10, "Please enter valid number"),
      pin: yup
        .string()
        .required("Please enter your pin")
        .min(6)
        .max(6, "Please enter valid pin"),
      add: yup.string().required("Please enter Address"),
      town: yup.string().required("Please enter your city"),
      state: yup.string().required("Please enter your state"),
      save: yup.string().required("Please check the checkbox"),
    }),
    onSubmit: (values, actions) => {
      Setclose(true)
        // const emails = values.email; const names = values.name
        // createUserWithEmailAndPassword(auth,values.email,values.password).then(res=>{console.log(res);dispatch(SignupFunctionSuccess({names,emails})); navigate("/Login");
        // swal("Signup Success", "You are redirected to Login Page!", "success") ;} )

        .catch((err) => console.log(err));

      Setclose(false);
      actions.resetForm();
    },
  });

  return (
    <Box>
      <Flex
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
      >
        <VStack
          margin="auto"
          mt="20px"
          as="form"
          border="1px solid black"
          onSubmit={formik.handleSubmit}
          p={5}
          width={["90%", "90%", "400px", "500px"]}
        >
          {/* <Text>Contact details</Text> */}

          <FormControl isInvalid={formik.errors.name && formik.touched.name}>
            <FormLabel>Contact details</FormLabel>
            <Input
              name="name"
              type="name"
              border="1px solid black"
              placeholder="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.num && formik.touched.num}>
            <InputGroup mt={["5px", "10px", "10px", "10px"]}>
              <InputLeftElement
                pointerEvents="none"
                children={<PhoneIcon color="gray.300" />}
              />

              <Input
                name="num"
                max={10}
                border="1px solid black"
                type="tel"
                placeholder="mobile no"
                onChange={formik.handleChange}
                value={formik.values.num}
                onBlur={formik.handleBlur}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.num}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.pin && formik.touched.pin}>
            <FormLabel mt="20px">Address</FormLabel>
            <Input
              mt={["5px", "10px", "10px", "10px"]}
              border="1px solid black"
              name="pin"
              type="text"
              placeholder="Pin code"
              onChange={formik.handleChange}
              value={formik.values.pin}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.pin}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.add && formik.touched.add}>
            <Input
              mt={["5px", "10px", "10px", "10px"]}
              border="1px solid black"
              name="add"
              type="text"
              placeholder="Address"
              onChange={formik.handleChange}
              value={formik.values.add}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.add}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.town && formik.touched.town}>
            <Input
              mt={["5px", "10px", "10px", "10px"]}
              border="1px solid black"
              name="town"
              type="text"
              placeholder="Town"
              onChange={formik.handleChange}
              value={formik.values.town}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.town}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.state && formik.touched.state}>
            <Input
              mt={["5px", "10px", "10px", "10px"]}
              border="1px solid black"
              name="state"
              type="text"
              placeholder="State"
              onChange={formik.handleChange}
              value={formik.values.state}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.state}</FormErrorMessage>
          </FormControl>

          <Flex mt={["10px", "10px", "20px", "20px"]} alignItems="center">
            <Stack mt="5px" mr="10px">
              <FormControl
                isInvalid={formik.errors.gender && formik.touched.gender}
              >
                <Checkbox
                  name="save"
                  colorScheme="red"
                  value="true"
                  border="0px solid black"
                  defaultChecked
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Checkbox>
                <FormErrorMessage>{formik.errors.gender}</FormErrorMessage>
              </FormControl>
            </Stack>
            <Text display="block">Mark this as Default Address</Text>
          </Flex>

          {/* <Button type="submit" bgColor="blue.100" disabled={close} _hover={{color:"white"}} >A</Button> */}
          <Button
            type="submit"
            mt="20px"
            width="100%"
            bgColor={"#ff3f6c"}
            color="white"
            cursor="pointer"
            _hover={{ bgColor: "#ff3f6c" }}
          >
            Add Address
          </Button>
        </VStack>
        <VStack
          margin="0 auto"
          ml={["", "", "60px", "100px"]}
          width={["90%", "90%", "300px", "400px"]}
          padding="20px"
        >
          <FormLabel mt="20px">Price Details</FormLabel>
          <Flex width="100%">
            <Text>Total MRP</Text> <Spacer /> <Text>$</Text>
          </Flex>
          <Flex width="100%">
            <Text>Discount on MRP</Text> <Spacer /> <Text>$</Text>
          </Flex>
          <Flex width="100%">
            <Text>Coupon Discount</Text> <Spacer /> <Text>$</Text>
          </Flex>
          <Flex width="100%">
            <Text>Convienience Fee</Text> <Spacer /> <Text>$</Text>
          </Flex>

          <Divider />
          <Flex width="100%">
            <Text>Total Amount</Text> <Spacer /> <Text>$</Text>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Address;
