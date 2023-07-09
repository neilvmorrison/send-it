import { useCallback, useState } from "react";

// TODO: get tighter with typing here;
type Handler = (args: any) => Promise<any>;

type AsyncCallOptions = {
  onSuccess: () => void;
  onError: () => void;
  onFinally: () => void;
};

interface IUseAsyncCallResult {
  execute: () => Promise<any>;
  isLoading: boolean;
}

function useAsyncCall(
  handler: Handler,
  options?: AsyncCallOptions
): IUseAsyncCallResult {
  const [isLoading, setIsLoading] = useState(false);
  const execute = useCallback(async (...args: any) => {
    try {
      setIsLoading(true);
      await handler(args);
      options?.onSuccess();
    } catch (err) {
      options?.onError();
    } finally {
      setIsLoading(false);
      options?.onFinally();
    }
  }, []);
  return { execute, isLoading };
}

export default useAsyncCall;
