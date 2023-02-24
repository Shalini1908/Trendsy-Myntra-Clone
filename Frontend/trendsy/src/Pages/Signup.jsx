import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, TagLabel, VStack, Checkbox, CheckboxGroup,Text, Button, FormControl , FormErrorMessage } from '@chakra-ui/react'
import React, { useState } from 'react'
import * as yup from "yup"
import { useFormik } from 'formik'
const Signup = () => {

  const[num,Setnum] = useState("")
    const [pass,Setpass]  = useState("")
    const [name,Setname]  = useState("")
    const [email,Setemail]  = useState("")
    const[gender,Setgender] = useState("")

  


   
      

      const formik = useFormik({
        
        initialValues:{
          num:"" ,
          name:"" ,
            email:"" ,
            pass:"" ,
            gender:""
        } , validationSchema: yup.object({
          num: yup.string().required("number Required").min(10).max(10,"Please enter valid number") ,
          name : yup.string().required("name Required").min(6,"your name is too Short") ,
           email : yup.string().email().required("Please enter valid email") ,
           pass : yup.string().required("Please enter password ").min(6,"Your password is too Short"),
           gender: yup.array().required("Please select gender").max(1)
       })
        ,
        onSubmit :  (values,actions) =>{

      // console.log(values)
     
      const payload = {
      num: values.num,
    pass:values.pass,
    name : values.name,
    email : values.email,
    gender : values.gender[0]
    
       }

      //  console.log(payload)

      fetch("http://localhost:8080/user/register" ,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
          "Content-type":"application/json"
        }
    
      }).then(res=>res.json())
     
      .then(res=>{localStorage.setItem("trendsyToken",res.token);console.log(res);  {res.Msg=="user already present"?alert("user already present"):alert("user registered successfully")}})
    .catch(err=>console.log(err))
        
        }
    })
        


   



  return (
    <Box height="100vh" bg="#fdefec" > 
    <Box bg="white" padding="20px" display="inline-block"  width="500px" margin="50px auto" >
        <Heading fontSize='20px'>complete your sign up</Heading>
        <FormControl isInvalid={formik.errors.num && formik.touched.num } > 
        <InputGroup mt="30px" >
    <InputLeftElement  mt="30px"
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
     
    <Input mt="30px" name="num"  max={10} border="1px solid black" type='tel' placeholder='Phone number'  onChange={formik.handleChange}  value={formik.values.num} onBlur={formik.handleBlur} />
   
   
   
  </InputGroup>
  <FormErrorMessage>{formik.errors.num}</FormErrorMessage>
  </FormControl>
  <FormControl isInvalid={formik.errors.pass && formik.touched.pass } > 
    <Input mt="30px"  name="pass"  border="1px solid black" type='password' placeholder='enter password'  onChange={formik.handleChange}  value={formik.values.pass} onBlur={formik.handleBlur} /> 
    <FormErrorMessage>{formik.errors.pass}</FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={formik.errors.name && formik.touched.name } > 
    <Input mt="30px" name="name"   border="1px solid black" type='text' placeholder='Full name'  onChange={formik.handleChange}  value={formik.values.name}  onBlur={formik.handleBlur}/>   
    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={formik.errors.email && formik.touched.email } > 
    <Input mt="30px"  name="email"  border="1px solid black" type="email" placeholder='Email'  onChange={formik.handleChange}  value={formik.values.email} onBlur={formik.handleBlur} />  
    <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
    </FormControl>  
    <Flex  mt="30px" alignItems="center"  >
  <Text>Select Gender</Text>  <Stack  ml="50px" spacing={5} direction='row'>
  <FormControl isInvalid={formik.errors.gender && formik.touched.gender } > 
  <Checkbox name="gender"  colorScheme={formik.values.gender[0]=="male"?'red':""} value="male"  onChange={formik.handleChange} onBlur={formik.handleBlur}   >
    Male
  </Checkbox>
  <FormErrorMessage>{formik.errors.gender}</FormErrorMessage> 
  </FormControl> 
  <FormControl isInvalid={formik.errors.gender && formik.touched.gender } > 
  <Checkbox name="gender"  colorScheme ={formik.values.gender[0]=="female"?'green':""} value="female"  onChange={formik.handleChange} onBlur={formik.handleBlur}   >
    Female
  </Checkbox>
  <FormErrorMessage>{formik.errors.gender}</FormErrorMessage> 
  </FormControl> 
</Stack>
    </Flex>
    <Button onClick={formik.handleSubmit} mt="20px" width="100%" bgColor={"#f41cb2"} color="white" cursor="pointer"  _hover={{bgColor:"pink.500"}} >Create Account</Button>
    </Box>
    </Box>
  )
}

export default Signup
