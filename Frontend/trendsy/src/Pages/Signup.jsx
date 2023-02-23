import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, TagLabel, VStack, Checkbox, CheckboxGroup,Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {

  const[num,Setnum] = useState("")
    const [pass,Setpass]  = useState("")
    const [name,Setname]  = useState("")
    const [email,Setemail]  = useState("")
    const[gender,Setgender] = useState("")

  


     const submit = ()=>{
      
   const payload = {
    num,
pass,
name,
email,
gender

   }
   
if(num,pass,name,email,gender){

  fetch("http://localhost:8080/user/register" ,{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
      "Content-type":"application/json"
    }

  }).then(res=>res.json())
 
  .then(res=>{localStorage.setItem("trendsyToken",res.token);console.log(res);  {res.Msg=="user already present"?alert("user already present"):alert("user registered successfully")}})
.catch(err=>console.log(err))

}else{
  alert("fill all the required fields")
}



     }



  return (
    <Box height="100vh" bg="#fdefec" > 
    <Box bg="white" padding="20px" display="inline-block"  width="500px" margin="50px auto" >
        <Heading fontSize='20px'>complete your sign up</Heading>
        <InputGroup mt="30px" >
    <InputLeftElement  mt="30px"
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input mt="30px"  max={10} border="1px solid black" type='tel' placeholder='Phone number' onChange={(e)=>Setnum(e.target.value)} />
   
  </InputGroup>

    <Input mt="30px"  value={pass} border="1px solid black" type='password' placeholder='enter password' onChange={(e)=>Setpass(e.target.value)} /> 
    <Input mt="30px"  value={name} border="1px solid black" type='text' placeholder='Full name' onChange={(e)=>Setname(e.target.value)} />   
    <Input mt="30px"  value={email} border="1px solid black" type="email" placeholder='Email' onChange={(e)=>Setemail(e.target.value)} />     
    <Flex  mt="30px" alignItems="center"  >
  <Text>Select Gender</Text>  <Stack  ml="50px" spacing={5} direction='row'>
  <Checkbox colorScheme={gender=="male"?'red':""}  onChange={()=> Setgender("male")}   >
    Male
  </Checkbox>
  <Checkbox colorScheme ={gender=="female"?'green':""}  onChange={()=> Setgender("female")}  >
    Female
  </Checkbox>
</Stack>
    </Flex>
    <Button onClick={submit} mt="20px" width="100%" bgColor={"#f41cb2"} color="white" cursor="pointer"  _hover={{bgColor:"pink.500"}} >Create Account</Button>
    </Box>
    </Box>
  )
}

export default Signup
