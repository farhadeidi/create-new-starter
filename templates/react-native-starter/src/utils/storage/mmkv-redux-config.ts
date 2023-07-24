import { Storage } from 'redux-persist';
import { defaultStorage } from '@/App';

const reduxStorage: Storage = {
  setItem: (key, value) => {
    defaultStorage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = defaultStorage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    defaultStorage.delete(key);
    return Promise.resolve();
  },
};

export default reduxStorage;
