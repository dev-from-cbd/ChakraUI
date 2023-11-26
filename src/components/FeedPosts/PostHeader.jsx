import { Avatar, Box, Flex } from "@chakra-ui/react";

const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="/UserProfilePic.png" alt="User Profile Pic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          NickName
          <Box color={"gray.500"}> •3d</Box>
        </Flex>
      </Flex>
      <Box>Box</Box>
    </Flex>
  );
};

export default PostHeader;
