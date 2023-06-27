import { Text } from "@mantine/core";
import { useRouter } from "next/router";

export default function Profile() {
  const {
    query: { id },
  } = useRouter();
  return (
    <main>
      <Text>Profile: {id}</Text>
    </main>
  );
}
