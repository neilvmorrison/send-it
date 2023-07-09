import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";

import EmailScreen from "./EmailScreen";
import CodeScreen from "./CodeScreen";

interface ILoginModal {
  variant: "SIGN_UP" | "LOGIN";
}

function LoginModal({ variant }: ILoginModal) {
  const { loginUser, sendChallengeResponse, signUpUserAndLogin } =
    useAuthContext();

  const [activeSlide, setActiveSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSendCode = async () => {
    await loginUser(email);
    setActiveSlide(1);
  };

  const handleSubmitCode = async () => {
    await sendChallengeResponse(code);
  };

  const handleSendSignupCode = async () => {
    await signUpUserAndLogin(email);
    setActiveSlide(1);
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
          handleSubmitCode={variant === "LOGIN" ? handleSubmitCode : () => {}}
        />
      );
    default:
      return null;
  }
}

export default LoginModal;
