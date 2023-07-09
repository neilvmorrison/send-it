import { Profile } from ".prisma/client";
import { useMutation } from "react-query";
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

  async function getUserPrfofilesByEmail() {}

  async function createUserProfile(payload: Profile) {
    return fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  const useCreateProfileMutation = useMutation((profilePayload: Profile) => {
    return createUserProfile(profilePayload);
  });

  const context = useMemo(
    () => ({
      activeProfile,
      setActiveProfile,
      userProfiles,
      useCreateProfileMutation,
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
