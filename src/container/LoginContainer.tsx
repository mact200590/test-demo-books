import React, { useCallback, useState } from "react";
import Login from "../auth/Login";
import { useHistory } from "react-router-dom";
import { queryCLient } from "../cache/queryCLient";
import { useSessionMutation } from "../modules/auth/mutations";
import { StorageKeys } from "../storage/StorageKeys";
import { CACHE_KEYS } from "../cache/cacheKeys";
import RoutesName from "../navigation/routesUtils";
import { DataUser } from "../utils/types";



export const LoginContainer = () => {
  const [error, setError] = useState<boolean>(false);
  const { replace } = useHistory();

  const { mutate, loading  } = useSessionMutation();
  const onSuccess = useCallback(
    (response: any) => {
      const { tokens, data, message } = response;
      if (tokens) {
        queryCLient.clear();
        localStorage.setItem(StorageKeys.SESSION_TOKEN, tokens["access-token"]);
        localStorage.setItem(
          StorageKeys.REFRESH_TOKEN,
          tokens["refresh-token"]
        );
        queryCLient.setQueryData<DataUser>(
          [CACHE_KEYS.UserData.USER_DATA],
          data
        );
        replace(`${RoutesName["/home"]}`);
      }
      if (message) {
        setError(true)
      }
    },
    [replace]
  );

  const handleLogin = useCallback(
    (username: string, password: string) => {
      mutate(
        {
          username,
          password,
        },
        { onSuccess }
      );
    },
    [mutate, onSuccess]
  );
  return (
    <div>
      <Login handleLogin={handleLogin} loading={loading} error={error}/>
    </div>
  );
};

export default LoginContainer;
