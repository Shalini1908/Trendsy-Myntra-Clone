import { Box, Button, FormControl, Heading, Input, InputGroup, InputLeftElement, Text, VStack, FormErrorMessage,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { PhoneIcon } from '@chakra-ui/icons'
import { useNavigate ,Link} from 'react-router-dom'
import * as yup from "yup"
import { useFormik } from 'formik'
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFunctionSuccess } from '../Redux/actions'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [num, Setnum] = useState("")
  const [pass, Setpass] = useState("")
  const [seen, Setseen] = useState(true)

  const name =  useSelector((store)=>
  store.name
 )
 const isAuth =  useSelector((store)=>
 store.isAuth
)
console.log(name,isAuth)
  const formik = useFormik({

    initialValues: {
      num: ""
    }, validationSchema: yup.object({
      num: yup.string().required("number Required").min(10).max(10, "Please enter valid number")
    })
    ,
    onSubmit: (values, actions) => {

      console.log(values)
      localStorage.setItem("num", values.num)
      const payload = {
        num: values.num,

      }

      //  console.log(payload)

      fetch("https://wild-red-bunny-tux.cyclic.app/user/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json"
        }


      }).then(res => res.json())


        .then(res => { res.msg === "Login successfull" ? localStorage.setItem("num", res.num) : navigate("/signup");Setseen(false) 
       })

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

    fetch("https://wild-red-bunny-tux.cyclic.app/user/login1", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json"
      },
    }).then(res => res.json())
      .then(res => { localStorage.setItem("trendsyToken", res.token);dispatch(LoginFunctionSuccess()); console.log(res); swal("login Successfull", "you are being redirected" , "success");navigate("/") })
      .catch(err => console.log(err))

  }


  return (
    <Box bg="#fdefec" height="100vh" >
      <Box mt="100px" display={seen === true ? "inline-block" : "none"}  >
        <Box bg="white" padding="20px"  width={["310px", "310px", "310px", "380px"]} margin="auto"  >
        <Image src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg" />
          <Heading size={["xs", "xs", "sm", "lg"]} mt="10px" color={"#342c34"}>Login  <Text display="inline-block" size={["sm","sm","md","md"]} > or </Text>  Signup</Heading>
          <FormControl isInvalid={formik.errors.num && formik.touched.num} >
            <InputGroup mt={[ "5px","10px","10px", "10px" ]} >
              <InputLeftElement mt={[ "5px","10px","10px", "10px" ]}
                pointerEvents='none'
                children={<PhoneIcon color='gray.300' />}
              />
              <Input mt={[ "5px","10px","10px", "10px" ]} name="num" onChange={formik.handleChange} value={formik.values.num} onBlur={formik.handleBlur} max={10} border="1px solid #dbdbdb" type='tel' placeholder='Phone number' />

            </InputGroup>
            <FormErrorMessage>{formik.errors.num}</FormErrorMessage>
          </FormControl>


          <Text mt="10px" >By continuing, I agree to the <span style={{ color: "#ff3f6c" }} >  Terms of Use</span> &  <span style={{ color: "#ff3f6c" }} >Privacy policy</span></Text>


          <Button mt="20px" onClick={formik.handleSubmit} width="100%" bg="pink.500" _hover={{ bgColor: "pink.500", color: "white" }} >Continue</Button>


         <Link to="/adminsignin" >  <Button mt="20px" width="100%" bg="pink.500" _hover={{ bgColor: "pink.500", color: "white" }}  >Sign in as Admin</Button> </Link>

        </Box>
      </Box>



      <Box mt="100px" display={seen === false ? "inline-block" : "none"}  >
        <Box bg="white" padding="20px"  width={["300px","400px","400px","500px"]} margin="auto"  >
        <Image src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg" />
          <Heading size={["sm","md","md","md"]} mt="10px" >Enter your password</Heading>


          <Input mt={[ "10px","10px","20px", "20px" ]} value={pass} max={10} border="1px solid black" type='password' placeholder='enter password' onChange={(e) => Setpass(e.target.value)} />





          <Box>
            <Text mt="10px" >By continuing, I agree to the <span style={{ color: "#ff3f6c" }} >  Terms of Use</span> &  <span style={{ color: "#ff3f6c" }} >Privacy policy</span></Text>
          </Box>

          <Button mt="20px" onClick={finalLogin} width="100%" bg="pink.500" _hover={{ bgColor: "pink.500", color: "white" }} >Continue</Button>



        </Box >
      </Box>

    </Box>
  )
}

export default Login
