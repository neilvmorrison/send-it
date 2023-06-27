import { useState } from "react";
import { Text, TextInput, Group, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAt, IconInfoCircle } from "@tabler/icons-react";
import { useAuthContext } from "@/contexts/AuthContext";

interface ISignupModal {}

function SignupModal({}: ISignupModal) {
  const { signUpUserAndLogin } = useAuthContext();
  const [email, setEmail] = useState("");
  const [showCodeBlock, setShowCodeBlock] = useState(false);

  const handleSubmitEmail = async () => {
    const result = await signUpUserAndLogin(email);
    if (result.userSub) {
      setShowCodeBlock(true);
    }
  };

  return (
    <>
      <Text mb="lg">
        Enter your email and we'll send you a one-time passcode to complete your
        registration
      </Text>
      <TextInput
        icon={<IconAt size={14} />}
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        radius="md"
        mb="xs"
      />
      <Group>
        <Button>Cancel</Button>
        <Button onClick={() => handleSubmitEmail()}>Sign up</Button>
      </Group>
    </>
  );
}

export default SignupModal;
