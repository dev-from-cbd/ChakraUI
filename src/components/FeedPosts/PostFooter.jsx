import { Flex, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import NotificationsLogo from "../../assets/constants";
import UnlikeLogo from "../../assets/constants";
import CommentLogo from "../../assets/constants";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <>
      <Flex alignItems={"center"} gap={4} w="full" pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontSize={"sm"} fontWeight={600}>
        {likes} likes
      </Text>
      <Text fontSize={"sm"} fontWeight={700}>
        Dev-from-CBD_{" "}
        <Text as={"span"} fontWeight={400}>
          Feeling good
        </Text>
      </Text>
      <Text fontSize={"sm"} color={"gray"}>
        View all 54321 comments
      </Text>
    </>
  );
};

export default PostFooter;
