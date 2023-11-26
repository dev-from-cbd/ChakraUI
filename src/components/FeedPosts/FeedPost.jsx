import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = () => {
  return (
    <>
      <PostHeader />
      <Box>
        <Image src={"/img1.png"} alt="User Profile Pic" />
      </Box>
      <PostFooter />
    </>
  );
};

export default FeedPost;
