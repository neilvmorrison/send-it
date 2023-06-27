import { useState } from "react";
import { Button, Navbar, ScrollArea, Text, Box, Drawer } from "@mantine/core";
import { modals } from "@mantine/modals";
import {
  IconWorldUpload,
  IconFlame,
  IconDatabasePlus,
  IconUserPlus,
  IconPencilPlus,
} from "@tabler/icons-react";
import { LoginModal } from "../Modals";
import ForumLink from "./components/ForumLink";
import UserPanel from "./components/UserPanel";
import Logo from "../Header/components/Logo";
import { useAuthContext } from "@/contexts/AuthContext";

const commonLinks = [
  {
    href: "/all",
    icon: <IconWorldUpload />,
    label: "All",
  },
  {
    href: "/hot",
    icon: <IconFlame />,
    label: "Hot",
  },
];

interface INavbar {
  opened: boolean;
  onClose: () => void;
}

function NavBar({ opened, onClose }: INavbar) {
  const { isAuthenticated } = useAuthContext();
  const handleOpenLoginModal = () => {
    modals.open({
      title: "Log in to SendIt",
      children: <LoginModal />,
    });
  };
  return (
    <Drawer opened={opened} onClose={onClose} title={<Logo />} size="xs">
      <Navbar p="xs">
        <Navbar.Section my="xs" grow>
          <Text tt="uppercase" c="gray" fz="sm" fw={700} mb="sm">
            Forums
          </Text>
          <ScrollArea>
            {commonLinks.map((link) => (
              <ForumLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </ScrollArea>
        </Navbar.Section>
        <Navbar.Section>
          <Box
            sx={(theme) => ({
              borderTop: `1px solid ${theme.colors.gray[2]}`,
              paddingTop: theme.spacing.md,
            })}
          >
            <Button.Group orientation="vertical">
              <Button
                leftIcon={<IconPencilPlus />}
                fullWidth
                variant="subtle"
                mb="md"
                color="gray"
                sx={{ display: "flex", justifyContent: "flex-start" }}
                onClick={() => alert("fuck you!")}
              >
                Create a post
              </Button>
              <Button
                leftIcon={<IconDatabasePlus />}
                fullWidth
                variant="subtle"
                mb="md"
                color="gray"
                sx={{ display: "flex", justifyContent: "flex-start" }}
                onClick={() => alert("fuck you!")}
              >
                Create a forum
              </Button>
              <Button
                leftIcon={<IconUserPlus />}
                fullWidth
                variant="subtle"
                color="gray"
                mb="md"
                sx={{ display: "flex", justifyContent: "flex-start" }}
                onClick={() => alert("Create account!")}
              >
                Create an account
              </Button>
            </Button.Group>
          </Box>
          <UserPanel
            isAuthenticated={isAuthenticated}
            handleOpenLoginModal={handleOpenLoginModal}
            handleProfileRedirect={() => alert("Profile!")}
          />
        </Navbar.Section>
      </Navbar>
    </Drawer>
  );
}

export default NavBar;
