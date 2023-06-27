import { useAuthContext } from "@/contexts/AuthContext";
import { Auth } from "@aws-amplify/auth";
import { Text, Button } from "@mantine/core";

export default function Home() {
  const authContext = useAuthContext();
  return <main></main>;
}
