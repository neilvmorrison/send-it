import { useAuthContext } from "@/contexts/AuthContext";
import { Group, ActionIcon, Indicator, ThemeIcon } from "@mantine/core";
import { IconMessage2 } from "@tabler/icons-react";
import HeaderDropdown from "../HeaderDropdown";

function HeaderActions() {
  const { isAuthenticated } = useAuthContext();
  return (
    <Group align="center">
      {isAuthenticated && (
        <Indicator disabled={false} color="red" processing>
          <ActionIcon>
            <ThemeIcon variant="light" radius="xl" color="indigo">
              <IconMessage2 />
            </ThemeIcon>
          </ActionIcon>
        </Indicator>
      )}
      <HeaderDropdown isAuthenticated={isAuthenticated} />
    </Group>
  );
}

export default HeaderActions;
