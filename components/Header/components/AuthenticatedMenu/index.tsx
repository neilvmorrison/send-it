import { useRouter } from "next/navigation";
import CreateProfileOverlay from "@/components/CreateProfileOverlay";
import { useAuthContext } from "@/contexts/AuthContext";
import { Menu, ThemeIcon, ScrollArea } from "@mantine/core";
import {
  IconLogout,
  IconSettings,
  IconUser,
  IconMessage2,
  IconUserPlus,
} from "@tabler/icons-react";
import { useState } from "react";

interface IProfileIcon {
  icon: React.ReactNode;
  color?: string;
}

function ProfileIcon({ icon, color }: IProfileIcon) {
  return (
    <ThemeIcon variant="filled" color={color} radius="xl">
      {icon}
    </ThemeIcon>
  );
}

interface IAuthenticatedMenu {}

function AuthenticatedMenu({}: IAuthenticatedMenu) {
  const router = useRouter();
  const { logoutUser, currentAuthenticatedUser } = useAuthContext();
  const [showProfileOverlay, setShowProfileOverlay] = useState(false);
  const toggleProfileOverlay = () => setShowProfileOverlay((prev) => !prev);

  const headerDropdownActions = [
    {
      label: "Settings",
      icon: <IconSettings size={14} />,
      action: () => alert("Settings Clicked!"),
    },
    {
      label: "View my account",
      icon: <IconUser size={14} />,
      action: () => router.push("/account"),
    },
    {
      label: "Messages",
      icon: <IconMessage2 size={14} />,
      action: () => alert("Messaged Clicked!"),
    },
  ];

  return (
    <>
      <Menu.Label>Account Management</Menu.Label>
      {headerDropdownActions.map((action) => (
        <Menu.Item
          icon={action.icon}
          onClick={action.action}
          key={action.label}
        >
          {action.label}
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Item
        color="blue"
        icon={<IconUserPlus size={14} />}
        onClick={() => setShowProfileOverlay(true)}
      >
        Create a profile
      </Menu.Item>
      <Menu.Item
        color="red"
        icon={<IconLogout size={14} />}
        onClick={logoutUser}
      >
        Log out
      </Menu.Item>
      <CreateProfileOverlay
        opened={showProfileOverlay}
        onClose={toggleProfileOverlay}
      />
    </>
  );
}

export default AuthenticatedMenu;
