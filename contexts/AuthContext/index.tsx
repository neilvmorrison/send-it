import {
  successfulLogout,
  successfulLogin,
} from "@/notifications/authenticationMessages";
import {
  genericAuthenticationErrorNotification,
  userNotFoundAuthenticationError,
  invalidCodeSubmitError,
  userAlreadyExistsAuthenticationError,
} from "@/utils/helpers/errorMessages/errorNotifications";
import Auth, { CognitoUser } from "@aws-amplify/auth";
import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";
import { v4 } from "uuid";
import { useState, useContext, createContext, useEffect, useMemo } from "react";

export interface IAuthContextProvider {
  children: React.ReactNode;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  isLoading: boolean;
  currentAuthenticatedUser: CognitoUser | null;
  loginUser: (email: string) => Promise<void>;
  sendChallengeResponse: (code: string) => Promise<void>;
  logoutUser: () => Promise<void>;
  signUpUserAndLogin: (email: string) => {};
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  isLoading: false,
  currentAuthenticatedUser: null,
  loginUser: async (email: string) => {},
  sendChallengeResponse: async (code: string) => {},
  logoutUser: async () => {},
  signUpUserAndLogin: async (email: string) => {},
});

export const useAuthContext = () => useContext(AuthContext);

function AuthContextProvider({ children }: IAuthContextProvider) {
  const [isLoading, setIsLoading] = useState(true);
  const [cognitoUser, setCognitoUser] = useState<CognitoUser | null>(null);
  const [currentAuthenticatedUser, setCurrentAuthenticatedUser] =
    useState(null);

  async function loginUser(email: string) {
    try {
      setIsLoading(true);
      const result = await Auth.signIn(email);
      setCognitoUser(result);
    } catch (err: any) {
      if (err.code === "UserNotFoundException") {
        notifications.show(userNotFoundAuthenticationError);
        throw new Error();
      }
      notifications.show(genericAuthenticationErrorNotification);
      throw new Error();
    } finally {
      setIsLoading(false);
    }
  }

  async function sendChallengeResponse(code: string) {
    try {
      setIsLoading(true);
      await Auth.sendCustomChallengeAnswer(cognitoUser, code);
      getCurrentSession();
      notifications.show(successfulLogin);
      modals.closeAll();
    } catch (err: any) {
      notifications.show(invalidCodeSubmitError);
      throw new Error(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function logoutUser() {
    try {
      setIsLoading(true);
      await Auth.signOut();
      setCurrentAuthenticatedUser(null);
      notifications.show(successfulLogout);
    } catch (err: any) {
      throw new Error(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function signUpUserAndLogin(email: string): Promise<void> {
    try {
      const result = await Auth.signUp({
        username: email,
        password: v4(),
        attributes: { email },
      });
    } catch (err: any) {
      if (err.code === "UsernameExistsException") {
        notifications.show(userAlreadyExistsAuthenticationError);
        throw new Error();
      }
      notifications.show(genericAuthenticationErrorNotification);
      throw new Error();
    }
  }

  async function getCurrentSession(): Promise<void> {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      if (authUser) {
        setCurrentAuthenticatedUser(authUser);
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
      isAuthenticated: !!currentAuthenticatedUser,
      isLoading,
      cognitoUser,
      currentAuthenticatedUser,
      loginUser,
      sendChallengeResponse,
      logoutUser,
      signUpUserAndLogin,
    }),
    [isLoading, cognitoUser]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
