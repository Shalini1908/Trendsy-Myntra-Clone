import {
  Box,
  Button,
  Collapse,
  HStack,
  Heading,
  Image,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { MdLocalOffer } from "react-icons/md";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const initialCheck = { color: "blackAlpha", status: false };

const pinArray=[414203,]
const CartInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [check, setCheck] = useState(false);
  const [checkPin, setCheckPin] = useState(initialCheck);
  const initialRef = useRef("");
  const finalRef = useRef(null);
  const [show, setShow] = useState(false);
  const [fee, setFee] = useState("No");

  //     const handleToggle =

  const handleCheck = () => {
    setCheck(() => true);
  };
  useEffect(() => {
    const intervalId = setTimeout(async () => {
      const pin = +initialRef.current.value;
      if (pinArray.includes(pin)) {
        setCheckPin({ color: "green", status: true });
      } else if (pin) {
        setCheckPin({ color: "red", status: false });
      }
      setCheck(() => false);
    }, 2000);

    return () => {
      clearTimeout(intervalId); // Clear the interval when the component unmounts
    };
  }, [check]);
  return (
    <SimpleGrid spacing="10px" w="full">
      <HStack
        p="10px"
        cursor="pointer"
        justify="space-between"
        borderWidth="1px"
        borderRadius="lg"
        onClick={onOpen}
      >
        <Text as="b" fontSize={["xs", "sm", "md"]} color="blackAlpha.700">
          Check delivery time & services
        </Text>
        <Button
          colorScheme="red"
          size={["xs", "sm"]}
          variant="outline"
          onClick={onOpen}
        >
          ENTER PIN CODE
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Delivery Pincode</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <HStack>
                <Input
                  ref={initialRef}
                  type="number"
                  placeholder="Enter Pincode"
                  onClick={() => setCheckPin(initialCheck)}
                />
                <Button
                  isLoading={check}
                  loadingText="Checking"
                  colorScheme={checkPin.color}
                  variant={checkPin.color != "blackAlpha" ? "solid" : "outline"}
                  onClick={handleCheck}
                >
                  {checkPin.color == "green"
                    ? "Available"
                    : checkPin.color == "blackAlpha"
                    ? "Check"
                    : "Unavailable"}
                </Button>
              </HStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Box p="15px" borderWidth="1px" borderRadius="lg" textAlign="start">
        <HStack spacing="20px" mb="10px">
          <MdLocalOffer />
          <Heading size={["xs", "sm"]}>Available Offers</Heading>
        </HStack>

        <Collapse startingHeight={20} in={show} >
          {/* Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
             labore wes anderson cred nesciunt sapiente ea proident. */}
          <UnorderedList fontSize="xs" pl="5px" spacing="10px" >
            <ListItem>
              10% Instant Discount on YES Bank Credit Cards on a min spend of Rs
              3,000. TCA
            </ListItem>
            <ListItem>
              10% Instant Discount on AU Small Finance Bank Credit Cards on a
              min spend of Rs 2,000. TCA
            </ListItem>
            <ListItem>
              Get up to Rs 500 Cashback on CRED Pay UPI (Android Devices only)
              on a min spend of Rs 500. TCA
            </ListItem>
            <ListItem>
              5% Cashback up to Rs 1000 on Paytm Postpaid Transactions on a min
              spend of Rs 1,500. TCA
            </ListItem>
            <ListItem>
              5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
            </ListItem>
            <ListItem>
              10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA
            </ListItem>
          </UnorderedList>
        </Collapse>

        <Button
        alignSelf="start"
          size="sm"
          colorScheme="red"
          variant="ghost"
          rightIcon={!show ? <AiOutlineDown /> : <AiOutlineUp />}
          onClick={() => setShow(!show)}
          mt="1rem"
        >
          Show {show ? "Less" : "More"}
        </Button>
      </Box>
      <HStack spacing="20px" p="10px" borderWidth="1px" borderRadius="lg">
        <Image
          src={
            fee == "Yes"
              ? "https://constant.myntassets.com/checkout/assets/img/ship-charge.webp"
              : "https://constant.myntassets.com/checkout/assets/img/ship-free.webp"
          }
          alt="tempo"
          h="20px"
        />
        <Box>
          Yay!
          <Text as="b" m="0px 5px">
            {fee} convenience fee
          </Text>
          on this order
        </Box>
      </HStack>
    </SimpleGrid>
  );
};

export default CartInfo;
