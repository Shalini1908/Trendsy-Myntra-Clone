import { Box, Flex, FormLabel, VStack ,Text, Spacer ,Divider, Heading, Stack, Input, FormControl, FormErrorMessage, Button} from '@chakra-ui/react'
import React from 'react'
import * as yup from "yup"
import { useFormik } from 'formik'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
const Payment = () => {

    const navigate = useNavigate()

    
//     const total =  useSelector((store)=>
//     store.total
//    )
//    const discount =  useSelector((store)=>
//    store.discount
//   )
//   const coupen =  useSelector((store)=>
//    store.coupen
//   )
//   const social =  useSelector((store)=>
//    store.social
//   )
//   const fee =  useSelector((store)=>
//    store.fee
//   )
//   const total_Amount =  useSelector((store)=>
//   store.total_Amount
//  )


    const formik = useFormik({

        initialValues: {
          card: "",
          name:"",
          valid:'',
          cvv:""
        }, validationSchema: yup.object({
          card: yup.string().required("card number Required").min(12).max(12, "Please enter valid card number"),
          name: yup.string().required("card name Required").min(4).max(20, "Please enter card name"),
          valid:yup.string().required("card expiry date").min(5).max(5, "Please enter details"),
          cvv: yup.string().required("cvv Required").min(3).max(3, "Please enter valid cvv")
        })
        ,
        onSubmit: (values, actions) => {
    
            swal("Payment Successfull", "you are being redirected to home Page" , "success") ; navigate("/")
       
        }
      })





  return (
   <Box>
    <Flex  flexDirection={["column","column","column","row"  ]}  >
        <Box margin="0 auto"> 
 <VStack height="100px" padding="0 10px"  border="1px solid black" width={[ "90%","90%","700px","800px"]}>
    <Flex width="100%" >
    <FormLabel>Bank Offer</FormLabel> 
    </Flex>
    <Flex width="100%" >
    <Text>10% Instant Discount on YES Bank  Credit Cards on a min spend of Rs 3,000. TCA</Text>
  
         </Flex>
        

 </VStack>
 <VStack padding="0 10px" mt="20px"  width={[ "90%","90%","700px","800px"]}>

 <Flex width="100%" margin="auto" >
 <FormLabel>Choose Payment Mode</FormLabel> 
    </Flex>
    <Flex width="100%" border="1px solid black" >
        <Stack width="200px" display={["none","none","block","block"]}   >
            <Flex  p={3} >
                <FormLabel   >Credit/debit card</FormLabel>
            </Flex>
            <Flex bgColor="gray.300" p={3} mt={0} >
                <FormLabel   >Cash on Delivery</FormLabel>
            </Flex>
            <Flex bgColor="gray.300" >
                <FormLabel  p={3} >Phonepe/Google Pay/UPI</FormLabel>
            </Flex>
            <Flex bgColor="gray.300" >
                <FormLabel  p={3} >Paytm Wallets</FormLabel>
            </Flex>
            <Flex bgColor="gray.300" >
                <FormLabel  p={3} >Net / banking</FormLabel>
            </Flex>
        </Stack>

        <Stack margin="auto" width="400px" ml={["","" , "100px","100px"]}  >
            <FormLabel p={2}>Credit/Debit card</FormLabel>
            <Text>Please ensure Your card be used for online transactions</Text>

            <VStack  margin="auto" mt="20px" as="form"  onSubmit={formik.handleSubmit}  p={5}    >
  

  
   

  
  <FormControl isInvalid={formik.errors.card && formik.touched.card} >
      <FormLabel mt="20px" >Address</FormLabel>
      <Input mt={[ "5px","10px","10px", "10px" ]} border="1px solid black" name="card" type="text"  placeholder="Card Number" onChange={formik.handleChange}  value={formik.values.card} 
      onBlur={formik.handleBlur} />
      <FormErrorMessage>{formik.errors.card}</FormErrorMessage>
  </FormControl>
  
  
  <FormControl isInvalid={formik.errors.name && formik.touched.name } >
     
      <Input mt={[ "5px","10px","10px", "10px" ]}  border="1px solid black" name="name"  type="text"  placeholder="Name on Card" onChange={formik.handleChange} value={formik.values.name} 
        onBlur={formik.handleBlur} />
      <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
  </FormControl>
  
  <FormControl isInvalid={formik.errors.valid && formik.touched.valid } >
     
      <Input mt={[ "5px","10px","10px", "10px" ]} border="1px solid black"  name="valid"  type="text"  placeholder="Valid Thru" onChange={formik.handleChange} value={formik.values.valid} 
        onBlur={formik.handleBlur} />
      <FormErrorMessage>{formik.errors.valid}</FormErrorMessage>
  </FormControl>
  
  <FormControl isInvalid={formik.errors.cvv && formik.touched.cvv} >
     
      <Input mt={[ "5px","10px","10px", "10px" ]} border="1px solid black"  name="cvv"  type="text"  placeholder="CVV" onChange={formik.handleChange} value={formik.values.cvv} 
        onBlur={formik.handleBlur} />
      <FormErrorMessage>{formik.errors.cvv}</FormErrorMessage>
  </FormControl>
  


  <Button type="submit" mt="20px" width="100%" bgColor={"#ff3f6c"} color="white" cursor="pointer"  _hover={{bgColor:"#ff3f6c"}} >Pay Now</Button>
      </VStack>


           
        </Stack>
    </Flex>
 </VStack>


 </Box>

  <VStack  margin="0 auto" ml={[ "","","","100px"]} width={[ "90%","300px","300px","400px"]}  padding="20px" >
    <FormLabel mt="20px" >Price Details</FormLabel>
    <Flex width="100%"  >
            <Text>Total MRP</Text> <Spacer/> <Text>$</Text>
            
        </Flex>
        <Flex width="100%"   >
            <Text>Discount on MRP</Text> <Spacer/> <Text>$</Text>
            
        </Flex>
        <Flex width="100%"  >
            <Text>Coupon Discount</Text> <Spacer/> <Text>$</Text>
            
        </Flex>
        <Flex width="100%"  >
            <Text>Convienience Fee</Text> <Spacer/> <Text>$</Text>
            
        </Flex>
        
      < Divider/>
      <Flex width="100%"  >
            <Text>Total Amount</Text> <Spacer/> <Text>$</Text>
            
        </Flex>
    </VStack>
     

    </Flex>





   </Box>
  )
}

export default Payment
