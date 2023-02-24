import { Box, Button, FormControl, Heading, Input, InputGroup, InputLeftElement, Text, VStack, FormErrorMessage } from '@chakra-ui/react'
import React, { useState } from 'react'
import { PhoneIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { useFormik } from 'formik'

const Login = () => {
  const navigate = useNavigate()
  const [num, Setnum] = useState("")
  const [pass, Setpass] = useState("")
  const [seen, Setseen] = useState(true)



  const formik = useFormik({

    initialValues: {
      num: ""
    }, validationSchema: yup.object({
      num: yup.string().required("number Required").min(10).max(10, "Please enter valid number")
    })
    ,
    onSubmit: (values, actions) => {

      console.log(values)

      const payload = {
        num: values.num,

      }

      //  console.log(payload)

      fetch("http://localhost:8080/user/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json"
        }


      }).then(res => res.json())


        .then(res => { res.msg === "Login successfull" ? localStorage.setItem("num", res.num) : navigate("/signup"); Setseen(false) })

        .catch(err => console.log(err))

    }
  })



  const finalLogin = () => {

    const num1 = localStorage.getItem("num")
    const num = +num1
    const payload = {
      num,
      pass
    }

    fetch("http://localhost:8080/user/login1", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json"
      },
    }).then(res => res.json())
      .then(res => { localStorage.setItem("trendsyToken", res.token); console.log(res); alert("login successfull") })
      .catch(err => console.log(err))

  }


  return (
    <Box bg="#fdefec" height="100vh" >
      <Box mt="100px" display={seen === true ? "inline-block" : "none"}  >
        <Box bg="white" padding="20px" width="500px" margin="auto"  >

          <Heading size="lg" >Login<span style={{ fontSize: "20px" }} >  or</span> Signup</Heading>
          <FormControl isInvalid={formik.errors.num && formik.touched.num} >
            <InputGroup mt="30px" >
              <InputLeftElement mt="30px"
                pointerEvents='none'
                children={<PhoneIcon color='gray.300' />}
              />
              <Input mt="30px" name="num" onChange={formik.handleChange} value={formik.values.num} onBlur={formik.handleBlur} max={10} border="1px solid black" type='tel' placeholder='Phone number' />

            </InputGroup>
            <FormErrorMessage>{formik.errors.num}</FormErrorMessage>
          </FormControl>


          <Text mt="10px" >By continuing, I agree to the <span style={{ color: "blue" }} >  Terms of Use</span> &  <span style={{ color: "blue" }} >Privacy policy</span></Text>


          <Button mt="20px" onClick={formik.handleSubmit} width="100%" bg="#f41cb2" _hover={{ bgColor: "pink.500", color: "white" }} >Continue</Button>


          <Button mt="20px" width="100%" bg="#f41cb2" _hover={{ bgColor: "pink.500", color: "white" }} onClick={() => Setseen(false)} >Sign in as Admin</Button>

        </Box>
      </Box>



      <Box mt="100px" display={seen === false ? "inline-block" : "none"}  >
        <Box bg="white" padding="20px" width="500px" margin="auto"  >

          <Heading size="lg" >Enter your password</Heading>


          <Input mt="30px" value={pass} max={10} border="1px solid black" type='password' placeholder='enter password' onChange={(e) => Setpass(e.target.value)} />





          <Box>
            <Text mt="10px" >By continuing, I agree to the <span style={{ color: "blue" }} >  Terms of Use</span> &  <span style={{ color: "blue" }} >Privacy policy</span></Text>
          </Box>

          <Button mt="20px" onClick={finalLogin} width="100%" bg="pink.400" _hover={{ bgColor: "pink.500", color: "white" }} >Continue</Button>



        </Box >
      </Box>

    </Box>
  )
}

export default Login
