import {
  Box,
  Button,
  Checkbox,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { RiCoupon3Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartTotalS } from "../../Redux/actions";
import { shortID } from "../short_key.generator";
const initialCartTotals = {
  total: 0,
  discount: 0,
  coupen: 0,
  social: 0,
  fee: 0,
  total_Amount: 0,
  loginDic: 0,
};
const CoupenData = {
  masai30: 30,
  Trendsy10: 10,
  Holi50: 50,
};
const initialCoupen = { color: "blackAlpha", status: false };
const support = [10, 50, 100];
const CartCalculation = ({ cart }) => {
  const dispatch = useDispatch();

  const [checkCoupen, setCheckCoupen] = useState(initialCoupen);
  const [cartTotals, setCartTotals] = useState(initialCartTotals);
  const [clear, setClear] = useState("black");
  const [supportDiv, setSupportDiv] = useState(null);
  const supportRef = useRef([]);
  const navigate = useNavigate();
  const toast = useToast();
  const coupenRef = useRef();
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [check, setCheck] = useState(false);

  const Calculate = () => {
    const cal = { ...initialCartTotals };
    cart.forEach((product) => {
      if (!product.qty) {
        product = { ...product, qty: 1 };
      }
      // console.log(Number(product.variant_mrp) * Number(product.qty));
      cal.total += Number(product.variant_mrp) * Number(product.qty);

      cal.discount +=
        (Number(product.variant_mrp) - Number(product.variant_price)) *
        Number(product.qty);
    });

    cal.social = cartTotals.social;
    cal.fee = cartTotals.fee;
    cal.loginDic = cartTotals.loginDic;
    cal.coupen = cartTotals.coupen;
    const coupenDiscount = Math.floor(
      (cal.total - cal.discount) * (cal.coupen / 100)
    );
    console.log(cal.total);
    cal.total_Amount =
      cal.total -
      cal.discount -
      coupenDiscount +
      cartTotals.fee +
      cartTotals.social -
      cal.loginDic;
    setCartTotals(cal);
  };

  const handleLoginDisc = () => {
    console.log(localStorage.getItem("num"), cartTotals.loginDic);
    if (!(localStorage.getItem("num") ||cartTotals.loginDic)) {
      const newCartTotals = { ...cartTotals };

      newCartTotals.loginDic = Math.floor(Math.random() * 26) * 10 + 50;
      const diff = newCartTotals.loginDic - cartTotals.loginDic;
      newCartTotals.total_Amount -= diff;
      setCartTotals(newCartTotals);
    } else {
      toast({
        position: "top",
        title: cartTotals.loginDic
          ? "Discount applied already"
          : "You are not new user",
        description: cartTotals.loginDic
          ? "This Discount is applicable only once"
          : "This Discount is applicable only for new user ",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const handleCoupen = () => {
    setCheck(() => true);
    const timeId = setTimeout(async () => {
      const coupen = coupenRef.current.value;
      console.log(coupen);
      if (Object.keys(CoupenData).includes(coupen)) {
        setCheckCoupen(() => ({ color: "green", status: true }));
        const newCartTotal = { ...cartTotals };
        newCartTotal.coupen = CoupenData[coupen];
        newCartTotal.total_Amount =
          newCartTotal.total -
          Math.floor(
            (newCartTotal.total - newCartTotal.discount) *
              (CoupenData[coupen] / 100)
          );
        console.log(newCartTotal);
        setCartTotals(newCartTotal);
        onClose();
      } else if (coupen) {
        setCheckCoupen({ color: "red", status: false });
      }
      setCheck(false);
    }, 2000);
  };

  const handleSupport = () => {
    const newCartTotal = { ...cartTotals };
    if (newCartTotal.social) {
      newCartTotal.total_Amount =
        newCartTotal.total_Amount - newCartTotal.social;
      newCartTotal.social = 0;
      setCartTotals(newCartTotal);
      setSupportDiv(null);
    } else {
      newCartTotal.total_Amount = newCartTotal.total_Amount + support[0];
      newCartTotal.social = support[0];
      setCartTotals(newCartTotal);
      setSupportDiv(0);
    }
  };

  const handleSocial = (supportID) => {
    console.log(supportID);

    const newCartTotal = { ...cartTotals };
   
      const diff = support[supportID] - newCartTotal.social;
      newCartTotal.social = support[supportID];
      console.log(diff, newCartTotal.total_Amount);
      newCartTotal.total_Amount = newCartTotal.total_Amount + diff;
      setCartTotals(newCartTotal);
      setSupportDiv(supportID);

  };

  const handleSubmit = async () => {
    if (cartTotals.total) {
      dispatch(setCartTotalS(cartTotals));

      // console.log(cartTotals)
      navigate("/address");
    } else {
      toast({
        position: "top",
        title: "Select Items",
        description: "please select product first",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // console.log(cartTotals);
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

            <Button
              size={"sm"}
              variant="outline"
              color={cartTotals.coupen ? "green" : "#ff3f6c"}
              onClick={onOpen}
            >
              {cartTotals.coupen ? "APPLIED" : "APPLY"}
            </Button>
            <Modal
              initialFocusRef={coupenRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Enter Coupen code</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <HStack>
                    <Input
                      ref={coupenRef}
                      type="text"
                      placeholder="Enter  Coupen code"
                      onClick={() => setCheckCoupen(initialCoupen)}
                    />
                    <Button
                      isLoading={check}
                      loadingText="Checking"
                      colorScheme={checkCoupen.color}
                      variant={
                        checkCoupen.color != "blackAlpha" ? "solid" : "outline"
                      }
                      onClick={handleCoupen}
                    >
                      {checkCoupen.color == "green"
                        ? "Applied"
                        : checkCoupen.color == "blackAlpha"
                        ? "Check"
                        : "Not Valid"}
                    </Button>
                  </HStack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </HStack>
        </HStack>
        {cartTotals.total && (
          <HStack>
            <Button
              size={["xs", "sm"]}
              variant="unstyled"
              color={cartTotals.loginDic ? "green.500" : "#ff3f6c"}
              onClick={handleLoginDisc}
            >
              {cartTotals.loginDic ? "Applied" : "User Check"}
            </Button>
            <Text fontSize={["xs", "sm"]}>
              {" "}
              to get upto ₹ 300 OFF on first order
            </Text>
          </HStack>
        )}
      </VStack>
      <Text as="b" color="blackAlpha.700">
        {" Support transformative social work in India".toUpperCase()}
      </Text>
      <VStack w="full" align="start">
        <Checkbox
          colorScheme="red"
          fontWeight="bold"
          spacing="15px"
          isChecked={cartTotals.social}
          onChange={handleSupport}
        >
          Support Us
        </Checkbox>
        <HStack p="10px 0px" justify="space-between" w="full">
          {support.map((price, i) => (
            <Button
              key={shortID()}
              size={["xs", "sm", null, "md"]}
              variant="outline"
              colorScheme={supportDiv == i ? "red" : "black"}
              borderRadius="20px"
              onClick={() => handleSocial(i)}
              ref={(ele) => (supportRef.current[i] = ele)}
            >
              ₹ {price}
            </Button>
          ))}

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
            {cartTotals.coupen ? (
              <Text color="green.300"> {cartTotals.coupen} % OFF</Text>
            ) : (
              <Button
                size="sm"
                variant="unstyled"
                color="#ff3f6c"
                h="-5px"
                onClick={onOpen}
              >
                Apply Coupon
              </Button>
            )}
          </HStack>
          {cartTotals.loginDic && cartTotals.total && (
            <HStack justify={"space-between"} w="full">
              <Text> Login Discount </Text>
              <Text color="green.600">
                {"- "}₹ {cartTotals.loginDic}
              </Text>
            </HStack>
          )}
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
        <Button
          bg="#ff3f6c"
          w="full"
          color="white"
          mt="15px"
          onClick={handleSubmit}
        >
          PLACE ORDER
        </Button>
      </Box>
    </VStack>
  );
};

export default CartCalculation;
