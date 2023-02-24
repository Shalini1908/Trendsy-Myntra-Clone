import { Box, Button, Heading, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { PhoneIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
const [num,Setnum] = useState("")
const[pass,Setpass] = useState("")
const[seen,Setseen] = useState(true)

const submit = ()=>{
      
  const payload = {
   num
  }
  
if(num){

 fetch("http://localhost:8080/user/login" ,{
   method:"POST",
   body:JSON.stringify(payload),
   headers:{
     "Content-type":"application/json"
   }
  //  localStorage.setItem("num" , user[0].num  )           

 }).then(res=>res.json())


.then(res=>{res.msg==="Login successfull"?localStorage.setItem("num" , res.num ) :navigate("/signup");Setseen(false)})

.catch(err=>console.log(err))


}else{
 alert("fill all the required fields")
}



    }


    const finalLogin = ()=>{

      const num1= localStorage.getItem("num")
 const num = +num1
      const payload={
        num,
        pass
      }

      fetch("http://localhost:8080/user/login1",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
          "Content-type":"application/json"
        },
      }).then(res=>res.json())
      .then(res=>{localStorage.setItem("trendsyToken",res.token);console.log(res);alert("login successfull")})
      .catch(err=>console.log(err))
    }


  return (
    <Box bg="#fdefec" height="100vh" > 
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


<Button mt="20px"  onClick={submit}  width="100%"  bg="#f41cb2"  _hover={{bgColor:"pink.500" , color:"white"}} >Continue</Button>


<Button mt="20px"  width="100%" bg="#f41cb2" _hover={{bgColor:"pink.500",color:"white"}} onClick={()=>Setseen(false)} >Sign in as Admin</Button>

    </Box>
    </Box>



    <Box  mt="100px" display={seen===false?"inline-block":"none"}  > 
    <Box bg="white"  padding="20px" width="500px"  margin="auto"  >

 <Heading size="lg" >Enter your password</Heading> 

 
   <Input mt="30px" value={pass} max={10} border="1px solid black" type='password' placeholder='enter password' onChange={(e)=>Setpass(e.target.value)} />
   
  

  

<Box> 
  <Text mt="10px" >By continuing, I agree to the <span style={{color:"blue"}} >  Terms of Use</span> &  <span style={{color:"blue"}} >Privacy policy</span></Text>
  </Box>

<Button mt="20px"  onClick={finalLogin}  width="100%"  bg="pink.400"  _hover={{bgColor:"pink.500" , color:"white"}} >Continue</Button>



    </Box >
    </Box>

    </Box>
  )
}

export default Login
