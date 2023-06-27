import {
  Anchor,
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  createStyles,
} from "@mantine/core";

interface IForumLink {
  icon?: React.ReactNode;
  label: string;
  href: string;
}

function ForumLink({ icon, label, href }: IForumLink) {
  return (
    <UnstyledButton
      p="xs"
      w="100%"
      sx={(theme) => ({
        borderRadius: theme.radius.sm,
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Anchor href={href}>
        <Group>
          <ThemeIcon variant="light">{icon}</ThemeIcon>
          <Text size="sm" underline={false}>
            {label}
          </Text>
        </Group>
      </Anchor>
    </UnstyledButton>
  );
}

export default ForumLink;
