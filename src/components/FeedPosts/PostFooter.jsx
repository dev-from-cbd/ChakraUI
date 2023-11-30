import { Flex, Box } from "@chakra-ui/react";
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
      <Flex alignItems={"center"} gap={4} w="full" pt={0} mb={2} mt={"auto"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text>
        {likes} {likes === 1 ? "like" : "likes"}
      </Text>
    </>
  );
};

export default PostFooter;
