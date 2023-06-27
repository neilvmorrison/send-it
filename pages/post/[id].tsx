import { Text } from "@mantine/core";
import { useRouter } from "next/router";

export default function PostDetail() {
  const {
    query: { id },
  } = useRouter();
  return (
    <main>
      <Text>Post: {id}</Text>
    </main>
  );
}
