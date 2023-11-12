import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left Hand-Saide */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/insta.png" h="400" alt="Phone Image" />
          </Box>
          {/* Right hand-side */}
          <VStack spacing={4} alignC={"stretch"}>
            <AuthForm />
            <Box textAlign={"Center"}>Get the App!!</Box>
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

export default AuthPage;
