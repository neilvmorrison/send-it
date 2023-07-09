import { useState } from "react";
import { Menu, UnstyledButton, Avatar } from "@mantine/core";
import CreateProfileOverlay from "@/components/CreateProfileOverlay";
import AuthenticatedMenu from "../AuthenticatedMenu";
import GuestMenu from "../GuestMenu";

interface IHeaderDropdown {
  isAuthenticated: boolean;
}

function HeaderDropdown({ isAuthenticated }: IHeaderDropdown) {
  const [showProfileOverlay, setShowProfileOverlay] = useState(false);
  const toggleProfileOverlay = () => setShowProfileOverlay(!showProfileOverlay);
  return (
    <>
      <Menu
        offset={10}
        position="bottom-end"
        withArrow
        arrowPosition="side"
        arrowOffset={12}
        arrowSize={12}
      >
        <Menu.Target>
          <UnstyledButton>
            <Avatar src={null} alt="User Profiles" radius="xl" />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          {isAuthenticated ? (
            <AuthenticatedMenu toggleProfileOverlay={toggleProfileOverlay} />
          ) : (
            <GuestMenu />
          )}
        </Menu.Dropdown>
      </Menu>
      <CreateProfileOverlay
        opened={showProfileOverlay}
        onClose={toggleProfileOverlay}
      />
    </>
  );
}

export default HeaderDropdown;
