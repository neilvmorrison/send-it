import { modals } from "@mantine/modals";
import { LoginModal } from ".";

export const openLoginModal = () =>
  modals.open({
    id: "login-modal",
    title: "Log in to SendIt",
    children: <LoginModal variant="LOGIN" />,
  });
