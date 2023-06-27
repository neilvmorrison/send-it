import {
  Text,
  Input,
  UnstyledButton,
  Group,
  Collapse,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAt, IconInfoCircle } from "@tabler/icons-react";

interface IEmailScreen {
  email: string;
  setEmail: (email: string) => void;
  handleSendCode: () => void;
  handleChangeSlide: (activeSlide: number) => void;
}

function EmailScreen({ email, setEmail, handleSendCode }: IEmailScreen) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <Text mb="lg">
        Enter your email and we'll send you a one-time passcode
      </Text>
      <Input
        icon={<IconAt size={14} />}
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        radius="md"
        mb="xs"
      />
      <UnstyledButton onClick={toggle}>
        <Group spacing={4}>
          <IconInfoCircle color="blue" size={12} />
          <Text color="blue" size="xs">
            Why do I need to enter this?
          </Text>
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>
        <Text size="sm">Because we said so.</Text>
      </Collapse>
      <Group mt="xl" position="right">
        <Button variant="light" color="gray" onClick={() => false}>
          Cancel
        </Button>
        <Button variant="filled" color="blue" onClick={handleSendCode}>
          Send code
        </Button>
      </Group>
    </>
  );
}

export default EmailScreen;
