import {
  Box,
  Button,
  Checkbox,
  HStack,
  Heading,
  Icon,
  Text,
  Toast,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { RiCoupon3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const initialCartTotals = {
  total: 0,
  discount: 0,
  coupen: 0,
  social: 0,
  fee: 0,
  total_Amount: 0,
};
const CartCalculation = ({ cart }) => {
  const [cartTotals, setCartTotals] = useState(initialCartTotals);
const [clear,setClear]=useState("black")
const navigate=useNavigate()
const toast = useToast();
  const Calculate = () => {
    const cal = { ...initialCartTotals };
    cart.forEach((product) => {
      console.log(cal.total);
      cal.total += Number(product.variant_mrp) * Number(product.qty);
      cal.discount +=
        (Number(product.variant_mrp) - Number(product.variant_price)) *
        Number(product.qty);
    });
    cal.social = cartTotals.social;
    cal.fee = cartTotals.fee;
    cal.total_Amount =
      cal.total - cal.discount + cartTotals.fee + cartTotals.social;
    setCartTotals(cal);
  };

  const handleSocial = useCallback((event) => {
    // Get the clicked button element
    const button = event.target;
    const num = Number(button.innerText.slice(1));
    if (cartTotals.social ) {
     if(cartTotals.social!==num){
      const total = cartTotals.total_Amount + num;
      setCartTotals({ ...cartTotals, social: num, total_Amount: total });
      setClear((clear)=>"black")
      button.style.color = "red";
    }else{
      const total = cartTotals.total_Amount - num;
      setCartTotals({ ...cartTotals, social: num, total_Amount: total });
      button.style.color = "black";
    }
    } else {
     
      const total = cartTotals.total_Amount + num;
      setCartTotals({ ...cartTotals, social: num, total_Amount: total });
      setClear((clear)=>"black")
      button.style.color = "red";
    }
    // Change the background color of the button to red
  }, []);

  const handleSubmit=()=>{
    
    if(cartTotals.total){
      setCartTotals(cartTotals)
      navigate("/address")
    }else{
    
      toast({
        position: 'top',
        title: 'Select Items',
        description: "please select product first",
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
     
    }
  }

  console.log(cartTotals);
  useEffect(() => {
    Calculate();
  }, [cart]);
  return (
    <VStack
      p="20px"
      borderWidth="1px"
      borderRadius="lg"
      gap="10px"
      align="start"
      fontSize={["10px", "xs", null, "sm"]}
    >
      <VStack align="start" fontSize={["10px", "xs", null, "sm"]}>
        <Text as="b" color="blackAlpha.700">
          COUPONS
        </Text>
        <HStack w="full">
          <Icon boxSize={"20px"} as={RiCoupon3Line} />
          <HStack justify="space-between" w="full">
            <Text as="b">Apply Coupons</Text>
            <Button size="sm" variant="outline" color="#ff3f6c">
              Apply
            </Button>
          </HStack>
        </HStack>
        <HStack>
          <Button size="sm" variant="unstyled" color="#ff3f6c">
            Login
          </Button>
          <Text fontSize="sm"> to get upto ₹300 OFF on first order</Text>
        </HStack>
      </VStack>
      <Text as="b" color="blackAlpha.700">
        {" Support transformative social work in India".toUpperCase()}
      </Text>
      <VStack w="full" align="start">
        <Checkbox colorScheme="red" fontWeight="bold" spacing="15px">
          Support Us
        </Checkbox>
        <HStack p="10px 0px" justify="space-between" w="full">
          <Button
            size={["xs", "sm", null, "md"]}
            variant="outline"
            colorScheme={clear}
            borderRadius="20px"
            onClick={handleSocial}
          >
            ₹ 10
          </Button>
          <Button
            size={["xs", "sm", null, "md"]}
            variant="outline"
            colorScheme={clear}
            borderRadius="20px"
            onClick={handleSocial}
          >
            ₹ 50
          </Button>
          <Button
            size={["xs", "sm", null, "md"]}
            variant="outline"
            colorScheme={clear}
            borderRadius="20px"
            onClick={handleSocial}
          >
            ₹ 100
          </Button>
          <Button
            size={["xs", "sm", null, "md"]}
            variant="outline"
            colorScheme={clear}
            borderRadius="20px"
          >
            Other
          </Button>
        </HStack>
        <Button size="sm" variant="unstyled" color="#ff3f6c">
          Know more
        </Button>
      </VStack>
      <Box w="full">
        <HStack>
          <Text as="b" color="blackAlpha.700">
            PRICE DETAILS ( {cart.length} ) Item{cart.length ? "s" : ""}
          </Text>
        </HStack>
        <VStack
          w="full"
          fontSize="sm"
          align="start"
          spacing="10px"
          p="10px 0px"
        >
          <HStack justify={"space-between"} w="full">
            <Text>Total MRP</Text> <Text> ₹ {cartTotals.total}</Text>
          </HStack>
          {cartTotals.discount && (
            <HStack justify={"space-between"} w="full">
              <Text>Discount on MRP</Text>
              <Text color="green.600">
                {"- "}₹ {cartTotals.discount}
              </Text>
            </HStack>
          )}
          <HStack justify={"space-between"} w="full">
            <Text>Coupon Discount</Text>{" "}
            <Button size="sm" variant="unstyled" color="#ff3f6c" h="-5px">
              Apply Coupon
            </Button>
          </HStack>
          <HStack justify={"space-between"} w="full">
            <Text>Social Work Donation</Text> <Text>₹ {cartTotals.social}</Text>
          </HStack>
          <HStack justify={"space-between"} w="full">
            <HStack>
              <Text>Convenience Fee</Text>
              <Button size="sm" variant="unstyled" color="#ff3f6c" h="-5px">
                Know more
              </Button>
            </HStack>
            {cartTotals.total && (
              <HStack>
                <Text as="s"> ₹ {cartTotals.fee}</Text>
                <Text color="green">FREE</Text>
              </HStack>
            )}
          </HStack>
          <Box borderWidth="1px" w="full" />
        </VStack>

        <HStack
          justify={"space-between"}
          w="full"
          fontSize="sm"
          fontWeight="bold"
        >
          <Text>Total Amount</Text>
          <Text>₹ {cartTotals.total_Amount}</Text>
        </HStack>
        <Button bg="#ff3f6c" w="full" color="white" mt="15px" onClick={handleSubmit}>
          PLACE ORDER
        </Button>
      </Box>
    </VStack>
  );
};

export default CartCalculation;
