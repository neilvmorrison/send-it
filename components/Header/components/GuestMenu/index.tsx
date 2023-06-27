import { Menu, ThemeIcon, ScrollArea } from "@mantine/core";
import { IconHelp, IconUserPlus, IconDoorEnter } from "@tabler/icons-react";
import { openLoginModal, openSignUpModal } from "@/components";

interface IGuestMenu {}

function GuestMenu({}: IGuestMenu) {
  return (
    <>
      <Menu.Item icon={<IconHelp size={14} />}>Info</Menu.Item>
      <Menu.Item icon={<IconUserPlus size={14} />} onClick={openSignUpModal}>
        Create an account
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item icon={<IconDoorEnter size={14} />} onClick={openLoginModal}>
        Login
      </Menu.Item>
    </>
  );
}

export default GuestMenu;
