import { Group, ThemeIcon, Text } from "@mantine/core";
import { IconArrowBigLeftLines } from "@tabler/icons-react";

function Logo() {
  return (
    <Group spacing={4}>
      <ThemeIcon
        variant="gradient"
        radius="xl"
        gradient={{ from: "cyan", to: "indigo" }}
      >
        <IconArrowBigLeftLines />
      </ThemeIcon>
      <Text fw={800} fs="xl" variant="gradient">
        SendIt
      </Text>
    </Group>
  );
}

export default Logo;
