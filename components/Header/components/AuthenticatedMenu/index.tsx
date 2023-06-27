import { useAuthContext } from "@/contexts/AuthContext";
import { Menu, ThemeIcon, ScrollArea } from "@mantine/core";
import {
  IconLogout,
  IconSettings,
  IconUser,
  IconMessage2,
  IconUserPlus,
} from "@tabler/icons-react";

const headerDropdownActions = [
  {
    label: "Settings",
    icon: <IconSettings size={14} />,
    action: () => alert("Settings Clicked!"),
  },
  {
    label: "View my account",
    icon: <IconUser size={14} />,
    action: () => alert("Account Clicked!"),
  },
  {
    label: "Messages",
    icon: <IconMessage2 size={14} />,
    action: () => alert("Messaged Clicked!"),
  },
];

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
  const { logoutUser } = useAuthContext();
  const profiles = [
    {
      username: "notacunt",
      color: "blue",
    },
    {
      username: "toby_mcguires_spideysuit",
      color: "green",
    },
    {
      username: "not_lewis_hamilton_44",
      color: "orange",
    },
  ];

  return (
    <>
      {profiles.length > 1 && (
        <>
          <Menu.Label>Profiles</Menu.Label>
          <ScrollArea h={115} type="scroll">
            {profiles.map((profile) => (
              <Menu.Item
                key={profile.username}
                icon={
                  <ProfileIcon
                    color={profile.color}
                    icon={<IconUser size={14} />}
                  />
                }
              >
                {profile.username}
              </Menu.Item>
            ))}
          </ScrollArea>
          <Menu.Divider />
        </>
      )}
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
      <Menu.Item color="blue" icon={<IconUserPlus size={14} />}>
        Create a profile
      </Menu.Item>
      <Menu.Item
        color="red"
        icon={<IconLogout size={14} />}
        onClick={logoutUser}
      >
        Log out
      </Menu.Item>
    </>
  );
}

export default AuthenticatedMenu;
