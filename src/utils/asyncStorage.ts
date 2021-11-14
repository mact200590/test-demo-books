export const getStringItemAsyncStore = async (
  key: Definitions.AsyncStorageKeys
) => localStorage.getItem(key) || undefined;

export const clearAllStorageData = () => localStorage.clear();

export enum StorageKeys {
  SESSION_TOKEN = "SESSION_TOKEN",
  REFRESH_TOKEN = "REFRESH_TOKEN",
}
