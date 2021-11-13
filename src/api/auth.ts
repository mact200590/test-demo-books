import { useQuery } from "react-query";
import { StorageKeys } from "../storage/StorageKeys";
import { CACHE_KEYS } from "../cache/cacheKeys";
import { getStringItemAsyncStore } from "../storage/AsyncStorageKeys";

export const getToken = async () =>
  getStringItemAsyncStore(StorageKeys.SESSION_TOKEN);


export const fetchToken = async (
) => {
  const id = await getToken();
  return { id };
};

export const useToken = () => {
  const { data, error, isLoading: loading, refetch } = useQuery<
    { id?: string },
    Error
  >([CACHE_KEYS.UserKeys.TOKEN], fetchToken, {
  });
  return { loading, data, error, refetch };
};



