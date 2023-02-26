import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Checkbox,
  Circle,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

import React, { useEffect, useRef, useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';
import { GiReturnArrow } from 'react-icons/gi';
import CartInfo from './CartInfo';
import { SmallCloseIcon } from '@chakra-ui/icons';


const CartProducts = ({ cart, setCart,data,setData }) => {
  // const [check, setCheck] = useState(initialCheck);
  const [product,setProduct]=useState("")
 
  const productRef=useRef([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

console.log(cart)
  const handleProduct=(Product)=>{
  
   const newCart=[...cart]
   console.log(Product.id,newCart)
    const index= newCart.findIndex(product=>product.id==Product.id)
   console.log(index)
   if(index==-1){
    setCart([...newCart,Product])
   }
  else{
    newCart.splice(index, 1)
    setCart(newCart);
   
   console.log(index,newCart)
  }
}

const handleAlart=(product)=>{
  setProduct(product)
  onOpen()
}
const handleDelete=(product)=>{
  
  const newCart=cart.filter(el=>el._id!==product._id)
setCart(newCart)
  const newData=data.filter(el=>el._id!==product._id)
  setData(newData)
}
 
  return (
    <SimpleGrid spacing="10px">
      <CartInfo />
      <HStack justify="space-between" m={['5px', '10px', '15px', '25px']}>
        <HStack>
          <Checkbox
            isChecked={cart.length==data.length}
            isIndeterminate={cart.length<data.length && cart.length!=0}
            colorScheme={cart.length==data.length||cart.length==0?"green":"red"}
            size={['sm', null, 'md']}
            onChange={e =>setCart([])
            }
            
          />

          <Text as="b" fontSize={['10px', 'xs', null, 'sm', 'md']}>
            {' '}
            {`${cart.length} / ${data.length} `} ITEMS SELECTED
          </Text>
        </HStack>
        <HStack>
          <Button colorScheme="blackAlpha" variant="link" size="xs">
            REMOVE
          </Button>
          <Box h="30PX" borderWidth="1px" m="0x 10px"></Box>
          <Button colorScheme="blackAlpha" variant="link" size="xs">
            MOVE TO WISHLIST
          </Button>
        </HStack>
      </HStack>
      <Box>
        {data?.map((product, i) => (
          <Grid
         // ref={(el)=> productRef.current[i]=[el]}
            key={2000 + i}
            templateColumns={"30% 70%"}
            borderWidth="1px"
            borderRadius="lg"
       templateRows={["100px","150px"]}
         
            gap={["5px","10px","15px","20px"]}
            p="10px"
            m={["5px 0px",null,"10px 0px"]}
            fontSize={['8px', '10px', 'xs', 'sm']}
            position="relative"
          >
            <Icon
            fontWeight={100}
              as={SmallCloseIcon}
              position="absolute"
              right="10px"
              top="10px"
              boxSize={["10px","20px"]}
              onClick={()=>handleAlart(product)}
            />
            <GridItem position="relative" h="full">
              <Image
              h="full"
                src={product.images[0]}
                alt={product.title}
           
              />
              <Checkbox
                position="absolute"
                top={['3px', '5px', '7px']}
                left={['3px', '5px', '7px']}
                zIndex={2}
                borderColor="blackAlpha.600"
                bg="white"
                size={['sm', null, 'md']}
                onChange={()=>handleProduct(product)}
                isChecked={cart.some(el => el.id === product.id)}
              />
            </GridItem>

            <Flex direction="column" gap={["3px","5px"]} fontSize={['7px', 'xs']}>
              <Text as="b">{product.brand}</Text>
              <Text>{product.title.split(" ").splice(0,7).join(" ")}{product.title.split(" ").length>7?" ....":""}</Text>
              <Text color="gray">Sold by: NAUGHTY NINOS PVT LTD (JIT)</Text>
              <Box>
                <Button
                  size={['xs', 'sm', null, 'md']}
                  color="black"
                  variant="ghost"
                  rightIcon={<BiCaretDown />}
                >
                  Size:{product.size}
                </Button>
                <Button
                  size={['xs', 'sm', null, 'md']}
                  color="black"
                  variant="ghost"
                  rightIcon={<BiCaretDown />}
                >
                  Qty:{product.qty}
                </Button>
              </Box>
              <HStack>
                <Text as="b"> ₹{' '}{product.variant_price}</Text>
                {product.variant_price !== product.variant_mrp && (
                  <Text color="gray" as="s">
                    ₹ {product.variant_mrp}
                  </Text>
                )}
                {product.variant_price !== product.variant_mrp && (
                  <Text color="red">
                   
                    {Math.floor((product.variant_price / product.variant_mrp) *
                      100)}{' '}
                    % OFF
                  </Text>
                )}
              </HStack>
              <HStack>
                <GiReturnArrow /> <Text as="b">{product.days} days</Text>
                <Text> return available</Text>
              </HStack>
            </Flex>
          </Grid>
        ))}
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Move from Bag
            </AlertDialogHeader>

            <AlertDialogBody>
         <Flex gap="10px" > {product&&<Image src={product.images[0]} w="70px" />} <Text>Are you sure you want to move this item from bag?</Text></Flex> 
            </AlertDialogBody>

            <AlertDialogFooter>
              <HStack justify="space-around">
            <Button size="xs" colorScheme='blackAlpha' variant="outline" onClick={()=>{onClose();handleDelete(product)}} ml={3}>
               Remove
              </Button>
              <Button size="xs" variant="outline" colorScheme='blue' ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              </HStack>
             
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </SimpleGrid>
  );
};

export default CartProducts;
