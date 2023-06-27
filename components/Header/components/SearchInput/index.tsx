import { Input, Tooltip, ThemeIcon } from "@mantine/core";
import { spotlight } from "@mantine/spotlight";
import { IconInfoCircle, IconSearch } from "@tabler/icons-react";

interface ISearchInput {}

function SearchInput({}: ISearchInput) {
  return (
    <Input
      radius="lg"
      icon={<IconSearch />}
      placeholder="Search for a forum..."
      onClick={() => spotlight.open()}
      rightSection={
        <Tooltip
          position="bottom"
          label="Search for something of interest"
          withArrow
        >
          <ThemeIcon color="indigo" variant="filled" radius="xl">
            <IconInfoCircle />
          </ThemeIcon>
        </Tooltip>
      }
    />
  );
}

export default SearchInput;
