import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";

import EmailScreen from "./EmailScreen";
import CodeScreen from "./CodeScreen";
import SuccessScreen from "./SuccessScreen";

interface ILoginModal {
  variant: "SIGN_UP" | "LOGIN";
}

function LoginModal({ variant }: ILoginModal) {
  const {
    loginUser,
    sendChallengeResponse,
    signUpUserAndLogin,
    confirmSignUp,
  } = useAuthContext();

  const [activeSlide, setActiveSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSendCode = async () => {
    await loginUser(email);
    setActiveSlide(1);
  };

  const handleSubmitCode = async () => {
    await sendChallengeResponse(code);
    setActiveSlide(2);
  };

  const handleSendSignupCode = async () => {
    await signUpUserAndLogin(email);
    setActiveSlide(1);
  };

  const handleSubmitSignupCode = async () => {
    await confirmSignUp(code);
    setActiveSlide(2);
  };

  switch (activeSlide) {
    case 0:
      return (
        <EmailScreen
          email={email}
          setEmail={setEmail}
          handleSendCode={
            variant === "LOGIN" ? handleSendCode : handleSendSignupCode
          }
          handleChangeSlide={setActiveSlide}
        />
      );
    case 1:
      return (
        <CodeScreen
          code={code}
          setCode={setCode}
          handleChangeSlide={setActiveSlide}
          handleSubmitCode={
            variant === "LOGIN" ? handleSubmitCode : handleSubmitSignupCode
          }
        />
      );
    case 2:
      return <SuccessScreen />;
    default:
      return null;
  }
}

export default LoginModal;
