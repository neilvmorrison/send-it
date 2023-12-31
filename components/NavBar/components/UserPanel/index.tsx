import {
  UnstyledButton,
  Text,
  Avatar,
  Box,
  Group,
  rem,
  useMantineTheme,
  ThemeIcon,
} from "@mantine/core";
import { IconUserQuestion } from "@tabler/icons-react";
import { CognitoUser } from "@aws-amplify/auth";

interface IUserPanel {
  currentAuthenticatedUser: CognitoUser | null;
  handleOpenLoginModal: () => void;
  handleProfileRedirect: () => void;
}

function UserPanel({
  currentAuthenticatedUser,
  handleProfileRedirect,
  handleOpenLoginModal,
}: IUserPanel) {
  console.log(currentAuthenticatedUser);
  const theme = useMantineTheme();
  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `${rem(1)} solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        onClick={
          currentAuthenticatedUser
            ? handleProfileRedirect
            : handleOpenLoginModal
        }
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}
      >
        <Group>
          {currentAuthenticatedUser ? (
            <Avatar
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              radius="xl"
            />
          ) : (
            <ThemeIcon variant="light" color="indigo" radius="xl" size="xl">
              <IconUserQuestion />
            </ThemeIcon>
          )}
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {currentAuthenticatedUser ? "notacunt_44" : "Unregistered user"}
            </Text>
            <Text color="dimmed" size="xs">
              {currentAuthenticatedUser
                ? currentAuthenticatedUser.getUsername()
                : "Click here to sign in"}
            </Text>
          </Box>
        </Group>
      </UnstyledButton>
    </Box>
  );
}

export default UserPanel;
