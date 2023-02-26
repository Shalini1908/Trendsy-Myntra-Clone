import React from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  Image,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  Stack,
  Button,
  Center,
} from "@chakra-ui/react";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdInventory } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Trendsy from "../../src/Images/trendsy.png";
import { Dashboard } from "./Dashboard";
import AddProducts from "./AddProducts";
import Inventory from "./Inventory";

import { useNavigate } from "react-router-dom";
import Customers from "./Customers";

const LinkItems = [
  { name: "Dashboard", icon: AiOutlineDashboard },
  { name: "Add Products", icon: MdOutlineAddToPhotos },
  { name: "Inventory", icon: MdInventory },
  { name: "Orders", icon: TbChecklist },
  { name: "Customers", icon: HiUsers },
];

const AdminNavSide = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pageOpen, setPageOpen] = React.useState(LinkItems[0].name);
  

  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        pageOpen={pageOpen}
        setPageOpen={setPageOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box
        ml={{ base: 0, md: 60 }}
        p="4"
        w={{ base: "70%", md: "85%", lg: "80%" }}
        m="auto"
      >

        {pageOpen === "Dashboard" ? (
          <Dashboard />
        ) : pageOpen === "Inventory" ? (
          <Inventory />
        ) : pageOpen === "Add Products" ? (
          <AddProducts />
        ) : pageOpen === "Customers" ? (
          <Customers />
        ) : (
          <Dashboard />
        )}
       
      </Box>
    </>
  );
};

const SidebarContent = ({ onClose, setPageOpen, pageOpen, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "100%", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src={Trendsy} w={140}></Image>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => {
            setPageOpen(link.name);
          }}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#ff3f6c",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  let icondata = JSON.parse(localStorage.getItem("token"));
  console.log(icondata);
  const navigate = useNavigate();

  function logout() {
    navigate("/adminsignin");
  }

  return (
    <>
      <Flex
        w={{ base: "100%", sm: "100%", md: "85%", lg: "82.5%" }}
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Flex alignItems={"center"} justifyContent={"space-between"}></Flex>
 
         <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode} mr={4}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex> 

        <HStack spacing={{ base: "0", md: "6" }}>
    
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton py={2}>
                <HStack>
                  <Avatar size={"sm"} src={icondata.icon} />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Admin</Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
        
                  <MenuList alignItems={'center'} mt={1}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={icondata.icon}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Admin Profile</MenuItem>
            
                  <MenuItem onClick={()=>logout}>Logout</MenuItem>
                  </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};

export default AdminNavSide;
