import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "@/contexts/AuthContext";

function usePrivateRoute() {
  const router = useRouter();
  const { currentAuthenticatedUser, isLoading } = useAuthContext();
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!currentAuthenticatedUser) {
      router.back();
    }
  }, [isLoading, currentAuthenticatedUser]);
}

export default usePrivateRoute;
