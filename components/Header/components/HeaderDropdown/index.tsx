import { Profile } from ".prisma/client";
import { Menu, UnstyledButton, Avatar } from "@mantine/core";
import AuthenticatedMenu from "../AuthenticatedMenu";
import GuestMenu from "../GuestMenu";

interface IHeaderDropdown {
  isAuthenticated: boolean;
}

function HeaderDropdown({ isAuthenticated }: IHeaderDropdown) {
  return (
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
        {isAuthenticated ? <AuthenticatedMenu /> : <GuestMenu />}
      </Menu.Dropdown>
    </Menu>
  );
}

export default HeaderDropdown;
