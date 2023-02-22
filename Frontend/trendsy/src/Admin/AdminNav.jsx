// import {
//   Box,
//   Flex,
//   Avatar,
// //   Link,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
//   Image
// } from '@chakra-ui/react';
// import Trendsy from "../../src/Images/trendsy.png"
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import Admin from "../../src/Images/admin.png";
// import "./css/Admin.css"




// export default function Nav() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
    
//       <Box bg={useColorModeValue('white', 'gray.900')} id="nav" px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <Box id="logo">
//             <Image src={Trendsy} w={140}  m={"auto"} mt={"9px"}/>
//           </Box>
//           <Box className="logout">
//             <Button>Logout</Button>
//         </Box>

//           <Flex alignItems={'center'}>
//             <Stack direction={'row'} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//               </Button>

//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rounded={'full'}
//                   variant={'link'}
//                   cursor={'pointer'}
//                   minW={0}>
//                     Admin
//                   <Avatar
//                     size={'md'}
//                      src={Admin}
//                   />
             
//                 </MenuButton>
//                 {/* <MenuList alignItems={'center'}>
//                   <br />
//                   <Center>
//                     <Avatar
//                       size={'2xl'}
//                       src={Admin}
//                     />
//                   </Center>
//                   <br />
//                   <Center>
//                     <p>Username</p>
//                   </Center>
//                   <br />
//                   <MenuDivider />
//                   <MenuItem>Your Servers</MenuItem>
//                   <MenuItem>Account Settings</MenuItem>
//                   <MenuItem>Logout</MenuItem>
//                 </MenuList> */}
//               </Menu>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }