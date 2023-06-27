import { Box, Text } from "@mantine/core";

interface ISuccessScreen {}

function SuccessScreen({}: ISuccessScreen) {
  return (
    <Box>
      <Text w={700} size="xl">
        You have been successfully logged in!
      </Text>
    </Box>
  );
}

export default SuccessScreen;
