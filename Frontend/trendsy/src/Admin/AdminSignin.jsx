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
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminSignin() {
  // const [token, setToken] = useState("");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      pass,
    };

    fetch("https://wild-red-bunny-tux.cyclic.app//admin/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem(
          "token",
          JSON.stringify(res),
          console.log(res)
        );
        if (
          (email === "singhparmar1908@gmail.com" && pass === "Shalini1908") ||
          (email === "abhijeetkale5733@gmail.com" && pass === "abhi5733") ||
          (email === "ganesh12345bahire@gmail.com" && pass === "ganeshbahire01") ||
          (email === "kashifrezw1850@gmail.com" && pass === "Kashif-Rezwi") ||
          (email === "kakadem.b.99@gmail.com" && pass === "MadhukarKakade")

        ) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

 

  return (
    <Box display={"flex"} m={"auto"} mt={"30px"}>
      <Flex minH={"70vh"} mt={"0px"} ml={"30px"}>
        <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6}>
          <Stack>
            <Heading fontSize={"2xl"}>Sign in as Admin</Heading>
          </Stack>
          <Box
            bg={useColorModeValue("white", "gray.700")}
            w={"400px"}
            h={"60vh"}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"#ff3f6c"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"#ff3f6c"}
                  color={"white"}
                  _hover={{
                    bg: "#ff3f6c",
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Box mt={"50px"}>
        <Image
          src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
          w={"95%"}
          m={"auto"}
        ></Image>
      </Box>
    </Box>
  );
}



// const [form, setForm] = useState(initState);
// const {email, pass} =form


// const navigate = useNavigate()

//   const handleSubmit = async()=>{

//     let {data} =  await axios.post("https://wild-red-bunny-tux.cyclic.app/admin/login",form)
   
//     localStorage.setItem("admindata",JSON.stringify(data))
//     // localStorage.setItem("token",data.token)


//    if( data.token){

//     navigate('/admin')

//    }

//   }
  
// const handleChange=(e)=>{
// e.preventDefault();
// const {value, name} = e.target;

// setForm({...form,[name]:value})
// //  console.log(form)

// }
