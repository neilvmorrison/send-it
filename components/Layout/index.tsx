import { ReactNode, useState } from "react";
import { AppShell, Box, useMantineTheme } from "@mantine/core";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

function Layout({ children }: LayoutProps) {
  const theme = useMantineTheme();
  const [openNav, setOpenNav] = useState(false);
  return (
    <AppShell
      padding="md"
      navbar={<NavBar opened={openNav} onClose={() => setOpenNav(false)} />}
      header={<Header openNavTray={() => setOpenNav(true)} />}
      bg={theme.colors.gray[1]}
    >
      {children}
    </AppShell>
  );
}

export default Layout;
