/* eslint-disable @typescript-eslint/comma-dangle */
export const setStringItemAsyncStore = async (
    keyIdentifier: StorageNameSpace.AsyncStorageKeys,
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    keyValue: string
  ) => {
    localStorage.setItem(keyIdentifier, keyValue);
  };
  
  export const removeStringItemAsyncStore = async (
    keyIdentifier: StorageNameSpace.AsyncStorageKeys
  ) => {
    localStorage.removeItem(keyIdentifier);
  };
  
  export const getStringItemAsyncStore = async (
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    key: StorageNameSpace.AsyncStorageKeys
  ) => localStorage.getItem(key) || undefined;
  
  export const clearAllStorageData = () => localStorage.clear();
  