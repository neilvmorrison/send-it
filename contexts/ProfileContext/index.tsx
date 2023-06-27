import { Profile } from ".prisma/client";
import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
import { useAuthContext } from "../AuthContext";

interface IProfileProvider {
  children: React.ReactNode | React.ReactNode[];
}

interface IProfileContext {
  userProfiles: Profile[];
  activeProfile: Profile | null;
  setActiveProfile: Dispatch<SetStateAction<null>>;
}

const ProfileContext = createContext<IProfileContext>({
  userProfiles: [],
  activeProfile: null,
  setActiveProfile: () => null,
});

function ProfileProvier({ children }: IProfileProvider) {
  const { currentAuthenticatedUser } = useAuthContext();
  const [userProfiles, setUserProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState(null);

  // Cognito/Amplify typing is whack. This definitely exists on type CognitoUser;
  async function getUserPrfofilesByEmail() {}

  const context = useMemo(
    () => ({
      activeProfile,
      setActiveProfile,
      userProfiles,
    }),
    [activeProfile, currentAuthenticatedUser]
  );

  return (
    <ProfileContext.Provider value={context}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvier;
