import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("Please fill all the fields");
      return;
    }
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={6} padding={2}>
        <VStack spacing={4}>
          <Image
            src="/fake.jpeg"
            h={39.99}
            cursor={"pointer"}
            alt="Logo of Project"
          />
          <Input
            placeholder="Email"
            fontSize={15}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="PassWord"
            fontSize={15}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          {!isLogin ? (
            <Input
              placeholder="Confirm PassWord"
              fontSize={15}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}

          <Button
            w="full"
            colorScheme="green"
            size={"sm"}
            fontSize={15}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>

          {/* OR */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"blue.500"} />
            <Text mx={1} color={"blue"}>
              or
            </Text>
            <Box flex={2} h={"1px"} bg={"blue.500"} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/threads-logo.png" h={25} alt="Google Auth" />
            <Text mx={1} color={"blue.500"}>
              Log in with Threads
            </Text>
          </Flex>
        </VStack>
      </Box>

      {/* Switch between LogIn and SignUp */}
      <Box border={"2px solid red"} borderRadius={"6"} padding={3}>
        <Flex alignItems={"center"} justifyContent={"center"} w={"246px"}>
          <Box mx={1} fontSize={15}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            mx={1}
            fontSize={15}
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.600"}
            cursor={"pointer"}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
