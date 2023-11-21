import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react"; // Importing Chakra UI components
import { useState } from "react"; // Importing React's useState hook
import { useNavigate } from "react-router-dom"; // Importing React Router's useNavigate hook

// Defining the AuthForm functional component
const AuthForm = () => {
  // State variables for managing login/signup mode, navigation, and form inputs
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Function to handle authentication when the form is submitted
  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("Please fill all the fields");
      return;
    }
    // Additional authentication logic can be added here
  };

  // JSX structure for the AuthForm component
  return (
    <>
      {/* Container for the entire form */}
      <Box border={"1px solid gray"} borderRadius={6} padding={2}>
        {/* Vertical stack for organizing form elements */}
        <VStack spacing={4}>
          {/* Project logo image */}
          <Image
            src="/fake.jpeg"
            h={39.99}
            cursor={"pointer"}
            alt="Logo of Project"
          />

          {/* Email input field */}
          <Input
            placeholder="Email"
            fontSize={15}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />

          {/* Password input field */}
          <Input
            placeholder="Password"
            fontSize={15}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          {/* Confirm Password input field, displayed only for sign-up */}
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={15}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}

          {/* Button for submitting the form */}
          <Button
            w="full"
            colorScheme="green"
            size={"sm"}
            fontSize={15}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>

          {/* OR Separator */}
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

          {/* Google Auth option */}
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
            {/* Dynamic text based on login/signup mode */}
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          {/* Toggle button for switching login/signup mode */}
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
