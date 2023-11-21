// Importing Chakra UI components for styling
import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
// Importing the AuthForm component
import AuthForm from "../../components/AuthForm/AuthForm";

// Defining the AuthPage functional component
const AuthPage = () => {
  // Rendering the AuthPage component
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      {/* Container for setting maximum width and padding */}
      <Container maxW={"container.md"} padding={0}>
        {/* Flex container for layout with centered and spaced elements */}
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left Hand-Side - Image section, visible on larger screens */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/insta.png" h="400" alt="Phone Image" />
          </Box>
          {/* Right Hand-Side - Authentication form and additional content */}
          <VStack spacing={4} alignC={"stretch"}>
            {/* AuthForm component for handling authentication */}
            <AuthForm />
            {/* Text indicating to get the app */}
            <Box textAlign={"Center"}>Get the App!!</Box>
            {/* Flex container for app store logos */}
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/app-store.png" h={10} alt="App Store" />
              <Image src="/googleplay.png" h={10} alt="Google Play Store" />
            </Flex>
          </VStack>{" "}
        </Flex>
      </Container>
    </Flex>
  );
};

// Exporting the AuthPage component
export default AuthPage;
