import { useAuthContext } from "@/contexts/AuthContext";
import usePrivateRoute from "@/hooks/usePrivateRoute";

function MyAccount() {
  usePrivateRoute();
  const { currentAuthenticatedUser } = useAuthContext();

  return <div>My Account {currentAuthenticatedUser?.getUsername()}</div>;
}

export default MyAccount;
