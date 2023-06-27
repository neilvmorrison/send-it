import { User, Profile } from ".prisma/client";
import { successfulLogout } from "@/notifications/authenticationMessages";
import {
  genericAuthenticationErrorNotification,
  userNotFoundAuthenticationError,
  invalidCodeSubmitError,
  userAlreadyExistsAuthenticationError,
} from "@/utils/helpers/errorMessages/errorNotifications";
import Auth, { CognitoUser } from "@aws-amplify/auth";
import { notifications } from "@mantine/notifications";
import { ISignUpResult } from "amazon-cognito-identity-js";
import { v4 } from "uuid";
import { useState, useContext, createContext, useEffect, useMemo } from "react";

export interface IAuthContextProvider {
  children: React.ReactNode;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginUser: (email: string) => Promise<void>;
  sendChallengeResponse: (code: string) => Promise<void>;
  logoutUser: () => Promise<void>;
  currentAuthenticatedUser: CognitoUser | null;
  signUpUserAndLogin: (email: string) => Promise<ISignUpResult>;
  confirmSignUp: (code: string) => Promise<CognitoUser>;
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  isLoading: false,
  loginUser: async (email: string) => {},
  sendChallengeResponse: async (code: string) => {},
  logoutUser: async () => {},
  currentAuthenticatedUser: null,
  // why?
  signUpUserAndLogin: async (email: string) => Promise.reject(),
  confirmSignUp: async (code: string) => Promise.reject(),
});

export const useAuthContext = () => useContext(AuthContext);

function AuthContextProvider({ children }: IAuthContextProvider) {
  const [isLoading, setIsLoading] = useState(true);
  const [cognitoUser, setCognitoUser] = useState<CognitoUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentAuthenticatedUser, setCurrentAuthenticatedUser] =
    useState(null);
  const [signupUser, setSignupUser] = useState<ISignUpResult | null>(null);

  async function loginUser(email: string) {
    try {
      const result = await Auth.signIn(email);
      setCognitoUser(result);
    } catch (err: any) {
      if (err.code === "UserNotFoundException") {
        notifications.show(userNotFoundAuthenticationError);
        throw new Error();
      }
      notifications.show(genericAuthenticationErrorNotification);
      throw new Error();
    }
  }

  async function sendChallengeResponse(code: string) {
    try {
      const authResponse = await Auth.sendCustomChallengeAnswer(
        cognitoUser,
        code
      );
      if (!!authResponse.signInUserSession) {
        setIsAuthenticated(true);
      }
      console.log(authResponse);
    } catch (err) {
      console.log(err);
      notifications.show(invalidCodeSubmitError);
      throw new Error();
    }
  }

  async function logoutUser() {
    await Auth.signOut();
    setIsAuthenticated(false);
    notifications.show(successfulLogout);
  }

  async function signUpUserAndLogin(email: string): Promise<void> {
    try {
      const result = await Auth.signUp({
        username: email,
        password: v4(),
        attributes: { email },
      });
      setSignupUser(result);
    } catch (err: any) {
      if (err.code === "UsernameExistsException") {
        notifications.show(userAlreadyExistsAuthenticationError);
        throw new Error();
      }
      notifications.show(genericAuthenticationErrorNotification);
      throw new Error();
    }
  }

  async function confirmSignUp(code: string): Promise<void> {
    // more whack typing
    const username = signupUser?.user.username;
    if (!username) return;
    try {
      const result = await Auth.confirmSignUp(username, code);
      if (result === "SUCCESS") {
        await fetch("/api/users", {
          method: "post",
          body: JSON.stringify({ email: username }),
        });
      }
    } catch (err) {
      notifications.show(genericAuthenticationErrorNotification);
      throw new Error();
    }
  }

  async function getCurrentSession(): Promise<void> {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      if (authUser) {
        setCurrentAuthenticatedUser(authUser);
        setIsAuthenticated(true);
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCurrentSession();
  }, []);

  const context = useMemo(
    () => ({
      isAuthenticated,
      isLoading,
      loginUser,
      sendChallengeResponse,
      logoutUser,
      cognitoUser,
      currentAuthenticatedUser,
      signUpUserAndLogin,
      confirmSignUp,
    }),
    [isLoading, cognitoUser, isAuthenticated]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
