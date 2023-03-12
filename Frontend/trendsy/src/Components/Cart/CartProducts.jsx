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
  CloseButton,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useRef, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import CartInfo from "./CartInfo";

import { shortID } from "../short_key.generator";
import { deleteData, postData, updateData } from "../../api";
import { setCartData } from "../../Redux/actions";
import { useDispatch } from "react-redux";


const days=[2,4,7,15,21,30]
const CartProducts = ({ cart, setCart, cartData }) => {
  // const [check, setCheck] = useState(initialCheck);
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();
  const productRef = useRef([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isQtyOpen,
    onOpen: onQtyOpen,
    onClose: onQtyClose,
  } = useDisclosure();

  const {
    isOpen: isWishlistOpen,
    onOpen: onWishlistOpen,
    onClose: onWishlistClose,
  } = useDisclosure();
  const {
    isOpen: isRemoveOpen,
    onOpen: onRemoveOpen,
    onClose: onRemoveClose,
  } = useDisclosure();
  const [quantity, setQuantity] = useState(1);
  const cancelRef = useRef();
  const cancelQtyRef = useRef();

  //console.log(cart);

  const handleProduct = (Product) => {
    const newCart = [...cart];

    const index = newCart.findIndex((product) => product.id == Product.id);
    const newCartData = cartData.filter((item) => ![...cart,Product].some((cartItem) => cartItem.id === item.id));
    if (index == -1) {
      setCart([Product,...newCart]);
    
     dispatch(setCartData([Product,...cart,...newCartData]))
    } else {
      newCart.splice(index, 1);
      setCart((cart)=>newCart);
      dispatch(setCartData([...newCart,Product,...newCartData]))
    }
  };
  // /wishlist/addtowishlist`

  // const handleWishlist=()=>{
  //   onWishlistOpen()
  // }

  const handleWishlist = () => {
    postData("/wishlist/addtowishlist", { data: cart }).then((res) => {
      console.log(res);
      if (res) {
        handleRemove();
      }
      onWishlistClose();
    });
  };

  const handleRemove = () => {
    deleteData("/cart/deletecart", { data: cart }).then((res) => {
      const newData = cartData.filter(
        (el) => !cart.some((removeItem) => removeItem._id === el._id)
      );
      dispatch(setCartData(newData));
      setCart([]);
    });
    onRemoveClose();
  };

  const handleAlart = (product) => {
    setProduct(product);
    onOpen();
  };
  const handleDelete = (product) => {
    deleteData(`/cart/deletecart/${product._id}`).then((res) => {
      const newCart = cart.filter((el) => el._id !== product._id);
      setCart(newCart);
      const newData = cartData.filter((el) => el._id !== product._id);
      dispatch(setCartData(newData));
    });
  };

  const handleQtyAlart = (product) => {
    setProduct(product);
    setQuantity(product.qty);
    onQtyOpen();
  };

  const handleQuantity = (product) => {
    const newProduct = { ...product, qty: quantity };
    const newCart = cart.map((el) => (el._id == product._id ? newProduct : el));
    setCart(newCart);
    const newData = cartData.map((el) =>
      el._id == product._id ? newProduct : el
    );
    console.log(newProduct);
    dispatch(setCartData(newData));
    updateData(`/cart/updatecart/${newProduct._id}`, { data: newProduct }).then(
      (res) => {
        console.log(res);
      }
    );
  };

  return (
    <SimpleGrid spacing="10px">
      <CartInfo />
      <HStack justify="space-between" m={["5px", "10px", "15px", "25px"]}>
        <HStack>
          <Checkbox
            isChecked={cart.length == cartData.length}
            isIndeterminate={cart.length < cartData.length && cart.length != 0}
            colorScheme={
              cart.length == cartData.length || cart.length == 0
                ? "green"
                : "red"
            }
            size={["sm", null, "md"]}
            onChange={(e) => (cart.length ? setCart([]) : setCart(cartData))}
          />

          <Text as="b" fontSize={["10px", "xs", null, "sm", "md"]}>
            {" "}
            {`${cart.length} / ${cartData.length} `} ITEMS SELECTED
          </Text>
        </HStack>
        <HStack>
          <Button
            colorScheme="blackAlpha"
            variant="link"
            size="xs"
            onClick={onRemoveOpen}
          >
            REMOVE
          </Button>
          <Box h="30PX" borderWidth="1px" m="0x 10px"></Box>
          <Button
            colorScheme="blackAlpha"
            variant="link"
            size="xs"
            onClick={onWishlistOpen}
          >
            MOVE TO WISHLIST
          </Button>
        </HStack>
      </HStack>
      <Box>
        {cartData?.map((product, i) => (
         
          <Grid
            // ref={(el)=> productRef.current[i]=[el]}
            key={shortID()}
            templateColumns={"30% 70%"}
            borderWidth="1px"
            borderRadius="lg"
            templateRows={["100px", "200px"]}
            gap={["5px", "10px", "15px", "20px"]}
            p="10px"
            m={["5px 0px", null, "10px 0px"]}
            fontSize={["8px", "10px", "xs", "sm"]}
            position="relative"
          >
            <CloseButton
              size="md"
              position="absolute"
              right="10px"
              top="10px"
              boxSize={["10px", "20px"]}
              onClick={() => handleAlart(product)}
            />
            <GridItem position="relative" h="full">
              <Image h="full" src={product.images[0]} alt={product.title} />
              <Checkbox
                position="absolute"
                top={["3px", "5px", "7px"]}
                left={["3px", "5px", "7px"]}
                zIndex={2}
                borderColor="blackAlpha.600"
                bg="white"
                size={["sm", null, "md"]}
                colorScheme={
                  cart.length == cartData.length || cart.length == 0
                    ? "green"
                    : "red"
                }
                onChange={() => handleProduct(product)}
                isChecked={cart.some((el) => el.id === product.id)}
              />
            </GridItem>

            <Flex
              direction="column"
              gap={["3px", "10px"]}
              fontSize={["7px", "xs"]}
              alignItems="flex-start"
            >
              <Text as="b">{product.brand}</Text>
              <Text>
                {product.title?.split(" ").splice(0, 7).join(" ")}
                {product.title?.split(" ").length > 7 ? " ...." : ""}
              </Text>
              <Text color="gray">Sold by: NAUGHTY NINOS PVT LTD (JIT)</Text>
             
              <Box>
                <Button
                  size={["xs", "sm", null, "md"]}
                  color="black"
                  variant="ghost"
                  rightIcon={<BiCaretDown />}
                >
                  Size:{product.size}
                </Button>
                <Button
                  size={["xs", "sm", null, "md"]}
                  color="black"
                  variant="ghost"
                  rightIcon={<BiCaretDown />}
                  onClick={() => handleQtyAlart(product)}
                >
                  Qty : {product.qty?product.qty:1}
                </Button>
              </Box>
              <HStack>
                <Text as="b"> ₹ {product.variant_price}</Text>
                {product.variant_price !== product.variant_mrp && (
                  <Text color="gray" as="s">
                    ₹ {product.variant_mrp}
                  </Text>
                )}
                {product.variant_price !== product.variant_mrp && (
                  <Text color="#ff3f6c">
                    {Math.floor(
                      (product.variant_price / product.variant_mrp) * 100
                    )}{" "}
                    % OFF
                  </Text>
                )}
              </HStack>
              <HStack>
                <GiReturnArrow /> <Text as="b">{days[Math.floor(Math.random() * (5 - 0)) ]} days</Text>
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
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove from Bag
            </AlertDialogHeader>

            <AlertDialogBody>
              <Flex gap="10px">
                {" "}
                {product && <Image src={product.images[0]} w="70px" />}{" "}
                <Text>Are you sure you want to remove this item from bag?</Text>
              </Flex>
            </AlertDialogBody>

            <AlertDialogFooter>
              <HStack justify="space-around">
                <Button
                  size="xs"
                  colorScheme="blackAlpha"
                  variant="outline"
                  onClick={() => {
                    onClose();
                    handleDelete(product);
                  }}
                  ml={3}
                >
                  Remove
                </Button>
                <Button
                  size="xs"
                  variant="outline"
                  colorScheme="blue"
                  ref={cancelRef}
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </HStack>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <AlertDialog
        isOpen={isQtyOpen}
        leastDestructiveRef={cancelQtyRef}
        onClose={onQtyClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent w="330px">
            <Box
              alignSelf="end"
              cursor="pointer"
              mb="-30px"
              p="5px"
              pb="10px"
              onClick={() => onQtyClose()}
            >
              <CloseButton size="lg" />
            </Box>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Select Quantity
            </AlertDialogHeader>

            <AlertDialogBody>
              <Flex gap="10px" wrap={"wrap"} p="5px 20px">
                {Array(10)
                  .fill()
                  .map((_, qty) => (
                    <Circle
                      cursor="pointer"
                      key={shortID()}
                      borderColor={qty + 1 == quantity ? "#ff3f6c" : "black"}
                      borderWidth="1px"
                      fontWeight="medium"
                      color={qty + 1 == quantity ? "#ff3f6c" : "black"}
                      size="40px"
                      onClick={() => setQuantity(qty + 1)}
                    >
                      {qty + 1}
                    </Circle>
                  ))}
              </Flex>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                w="full"
                colorScheme="red"
                onClick={() => {
                  onQtyClose();
                  handleQuantity(product);
                }}
              >
                Done
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Modal isOpen={isWishlistOpen} onClose={onWishlistClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader size="xs">
            Move {cart.length} items to wishlist
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {" "}
              Are you sure you want to move {cart.length} items from bag.
            </Text>
            <Box mt="20px" borderWidth="1px" />
          </ModalBody>

          <HStack justify="space-around" p="10px">
            <Button
              colorScheme="blackAlpha"
              variant="link"
              size="xs"
              onClick={onWishlistClose}
            >
              CANCEL
            </Button>
            <Box h="30PX" borderWidth="1px" m="0x 10px"></Box>
            <Button
              colorScheme="red"
              variant="link"
              size="xs"
              onClick={handleWishlist}
            >
              MOVE TO WISHLIST
            </Button>
          </HStack>
        </ModalContent>
      </Modal>
      <Modal isOpen={isRemoveOpen} onClose={onRemoveClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader size="xs">Remove {cart.length} items</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {" "}
              Are you sure you want to remove {cart.length} items from bag.
            </Text>
            <Box mt="20px" borderWidth="1px" />
          </ModalBody>

          <HStack justify="space-around" p="10px">
            <Button
              colorScheme="blackAlpha"
              variant="link"
              size="xs"
              onClick={handleRemove}
            >
              REMOVE
            </Button>
            <Box h="30PX" borderWidth="1px" m="0x 10px"></Box>
            <Button
              colorScheme="red"
              variant="link"
              size="xs"
              onClick={handleRemove}
            >
              MOVE TO WISHLIST
            </Button>
          </HStack>
        </ModalContent>
      </Modal>
    </SimpleGrid>
  );
};

export default CartProducts;
