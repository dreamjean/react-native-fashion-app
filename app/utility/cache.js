import AsyncStorage from '@react-native-community/async-storage';

const prefix = 'cache';

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
