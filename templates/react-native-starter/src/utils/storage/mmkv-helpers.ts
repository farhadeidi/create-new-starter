import { defaultStorage } from '@/App';

export const setStorage = (keyName: string, value: string) => {
  defaultStorage.set(keyName, value);
};

export const getStorage = (keyName: string) => {
  return defaultStorage.getString(keyName);
};

export const removeFromStorage = (keyName: string) => {
  defaultStorage.delete(keyName);
};

export const clearStorage = () => {
  defaultStorage.clearAll();
};

export const getAllKeysFromStorage = () => {
  return defaultStorage.getAllKeys();
};
