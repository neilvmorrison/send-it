import { Header as MantineHeader, Box, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import HeaderActions from "./components/Actions";
import Logo from "./components/Logo";
import SearchInput from "./components/SearchInput";

interface IHeader {
  openNavTray: () => void;
}

function Header({ openNavTray }: IHeader) {
  return (
    <MantineHeader
      height={55}
      px="sm"
      sx={{
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "2fr 2fr 1fr",
      }}
    >
      <Box>
        <UnstyledButton
          sx={{ display: "inline-flex", flexGrow: 0 }}
          onClick={openNavTray}
        >
          <Logo />
        </UnstyledButton>
      </Box>
      <SearchInput />
      <Box sx={{ justifySelf: "flex-end" }}>
        <HeaderActions />
      </Box>
    </MantineHeader>
  );
}

export default Header;
