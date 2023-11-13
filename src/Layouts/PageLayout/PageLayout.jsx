import { Box, Flex } from "@chakra-ui/react";

const PageLayout = (children) => {
  return (
    <Flex>
      {/* The SideBar on the left */}
      <Box>
        <SideBar />
      </Box>
      {/* The page content on the right */}
      <Box>{children}</Box>
    </Flex>
  );
};

export default PageLayout;
