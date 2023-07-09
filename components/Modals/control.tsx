import { modals } from "@mantine/modals";
import { LoginModal, SignupModal } from ".";

export const openLoginModal = () =>
  modals.open({
    title: "Log in to SendIt",
    children: <LoginModal variant="LOGIN" />,
  });

export const openSignUpModal = () =>
  modals.open({
    title: "Sign up for SendIt",
    children: <LoginModal variant="SIGN_UP" />,
  });
