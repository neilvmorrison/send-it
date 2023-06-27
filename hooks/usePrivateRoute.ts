import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "@/contexts/AuthContext";

function usePrivateRoute() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuthContext();
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!isAuthenticated) {
      router.back();
    }
  }, [isLoading, isAuthenticated]);
}

export default usePrivateRoute;
