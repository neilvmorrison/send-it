import { SpotlightProvider as MantineSpotlightProvider } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";
import { defaultSpotlightActions } from "../contants";

export interface ISpotlightProvider {
  children: React.ReactNode | React.ReactNode[];
}

function SpotlightProvider({ children }: ISpotlightProvider) {
  return (
    <MantineSpotlightProvider
      actions={defaultSpotlightActions}
      shortcut={["mod + K"]}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search SendIt..."
    >
      {children}
    </MantineSpotlightProvider>
  );
}

export default SpotlightProvider;
