import { Text } from "@mantine/core";
import { useRouter } from "next/router";

export default function Forum() {
  const {
    query: { slug },
  } = useRouter();
  return (
    <main>
      <Text>Forum: {slug}</Text>
    </main>
  );
}
