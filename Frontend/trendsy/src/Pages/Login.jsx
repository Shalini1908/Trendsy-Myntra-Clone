import { Box, Button, Heading, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { PhoneIcon} from '@chakra-ui/icons'

const Login = () => {
const [num,Setnum] = useState("")
const[seen,Setseen] = useState(true)

const submit=()=>{
    console.log(num)
    Setnum("")
}


  return (
    <Box bg="pink.100" height="100vh" > 
    <Box  mt="100px" display={seen===true?"inline-block":"none"}  > 
    <Box bg="white"  padding="20px" width="500px"  margin="auto"  >

 <Heading size="lg" >Login<span style={{fontSize:"20px"}} >  or</span> Signup</Heading> 

 <InputGroup mt="30px" >
    <InputLeftElement  mt="30px"
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input mt="30px" value={num} max={10} border="1px solid black" type='tel' placeholder='Phone number' onChange={(e)=>Setnum(e.target.value)} />
   
  </InputGroup>

  


  <Text mt="10px" >By continuing, I agree to the <span style={{color:"blue"}} >  Terms of Use</span> &  <span style={{color:"blue"}} >Privacy policy</span></Text>


<Button mt="20px"  onClick={submit}  width="100%"  bg="pink.400"  _hover={{bgColor:"pink.500" , color:"white"}} >Continue</Button>


<Button mt="20px"  width="100%" bg="pink.400" _hover={{bgColor:"pink.500",color:"white"}} onClick={()=>Setseen(false)} >Sign in as Admin</Button>

    </Box>
    </Box>



    <Box  mt="100px" display={seen===false?"inline-block":"none"}  > 
    <Box bg="white"  padding="20px" width="500px"  margin="auto"  >

 <Heading size="lg" >Admin Login</Heading> 

 <InputGroup mt="30px" >
    <InputLeftElement  mt="30px"
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input mt="30px" value={num} max={10} border="1px solid black" type='tel' placeholder='Phone number' onChange={(e)=>Setnum(e.target.value)} />
   
  </InputGroup>

  

<Box> 
  <Text mt="10px" >By continuing, I agree to the <span style={{color:"blue"}} >  Terms of Use</span> &  <span style={{color:"blue"}} >Privacy policy</span></Text>
  </Box>

<Button mt="20px"  onClick={submit}  width="100%"  bg="pink.400"  _hover={{bgColor:"pink.500" , color:"white"}} >Continue</Button>



    </Box >
    </Box>

    </Box>
  )
}

export default Login
