import { PinInput, Button, Box, Group, Text } from "@mantine/core";

interface ICodeScreen {
  code: string;
  setCode: (code: string) => void;
  handleChangeSlide: (activeSlide: number) => void;
  handleSubmitCode: () => void;
  isLoading: boolean;
}

function CodeScreen({
  code,
  isLoading,
  setCode,
  handleChangeSlide,
  handleSubmitCode,
}: ICodeScreen) {
  return (
    <Box p={40} pb={20} py={32}>
      <Text size="lg" fw={700}>
        Check your email
      </Text>
      <Text mb="xl" size="sm">
        We sent you a one-time password.
      </Text>
      <Group position="center" mb={48}>
        <PinInput value={code} onChange={setCode} length={6} size="xl" />
      </Group>
      <Group mt="lg" position="right">
        <Button onClick={() => handleChangeSlide(0)} color="gray">
          Go back
        </Button>
        <Button
          onClick={handleSubmitCode}
          disabled={code.length !== 6}
          loading={isLoading}
        >
          Submit Code
        </Button>
      </Group>
    </Box>
  );
}

export default CodeScreen;
