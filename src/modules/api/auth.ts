import { getStringItemAsyncStore, StorageKeys } from "../../utils/asyncStorage";

export const getToken = async () =>
  getStringItemAsyncStore(StorageKeys.SESSION_TOKEN);



