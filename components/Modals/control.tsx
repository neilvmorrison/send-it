import { modals } from "@mantine/modals";
import { LoginModal, SignupModal } from ".";

export const openLoginModal = () =>
  modals.open({
    title: "Log in to SendId",
    children: <LoginModal variant="LOGIN" />,
  });

export const openSignUpModal = () =>
  modals.open({
    title: "Sign up for SendIt",
    children: <LoginModal variant="SIGN_UP" />,
  });
