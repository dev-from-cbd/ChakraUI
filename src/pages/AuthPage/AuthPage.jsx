import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        {/* Left hand-side */}
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" alt="Phone Image" />
          </Box>
          <VStack spacing={4} alignC={"stretch"}>
            <AuthForm />
            <Box textAlign={"Center"}>Get the App!!</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={10} alt="Play Store" />
              <Image src="/microsoft.png" h={10} alt="Microsoft Store" />
            </Flex>
          </VStack>{" "}
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
