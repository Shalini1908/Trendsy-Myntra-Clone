import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

export default function AdminSignin() {

const handleOnclick = ()=>{
 window.location.href = "/admin"

}

  return (
    <Box display={"flex"} m={'auto'} mt={"30px"} >
    <Flex
      minH={'70vh'}
      mt={"0px"}
      ml={"30px"}
    
       >
      <Stack spacing={8} mx={'auto'} maxW={'2xl'} py={12} px={6}>
        <Stack>
          <Heading fontSize={'2xl'}>Sign in as Admin</Heading>
          
        </Stack>
        <Box
         
          bg={useColorModeValue('white', 'gray.700')}
          w={"400px"}
          h={"60vh"}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'#ff3f6c'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'#ff3f6c'}
                color={'white'}
                _hover={{
                  bg: '#ff3f6c',
                }}
                onClick={handleOnclick} >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    <Box mt={"50px"}>
      <Image src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png" w={"95%"} m={"auto"}></Image>
    </Box>
    </Box>

  );
}