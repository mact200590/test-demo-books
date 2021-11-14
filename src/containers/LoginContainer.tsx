import React, { useCallback, useState } from "react";
import { Login } from "../components";
import { useHistory } from "react-router-dom";
import { queryCLient } from "../modules/cache/queryCLient";
import { useSessionMutation } from "../modules/auth/mutations";
import { CACHE_KEYS } from "../modules/cache/cacheKeys";
import RoutesName from "../navigation/routesUtils";
import { StorageKeys } from "../utils/asyncStorage";
//Container of Login component
export const LoginContainer = () => {
  const [error, setError] = useState<string>("");
  const { replace } = useHistory();

  const { mutate, loading } = useSessionMutation();

  const onSuccess = useCallback(
    (response: { jsonRes: any; status: number } | undefined) => {
      const tokens = response?.jsonRes?.tokens;
      if (tokens) {
        queryCLient.clear();
        localStorage.setItem(StorageKeys.SESSION_TOKEN, tokens["access-token"]);
        localStorage.setItem(
          StorageKeys.REFRESH_TOKEN,
          tokens["refresh-token"]
        );
        queryCLient.setQueryData<Definitions.User>(
          [CACHE_KEYS.UserData.USER_DATA],
          response?.jsonRes.data
        );
        replace(RoutesName["/home"]);
      }
    },
    [replace]
  );

  const onError = useCallback((err: any) => {
    setError((err as Error).message);
  }, []);

  const handleLogin = useCallback(
    (username: string, password: string) => {
      mutate(
        {
          username,
          password,
        },
        {
          onSuccess,
          onError,
        }
      );
    },
    [mutate, onError, onSuccess]
  );
  return (
    <div>
      <Login handleLogin={handleLogin} loading={loading} error={error} />
    </div>
  );
};

export default LoginContainer;
