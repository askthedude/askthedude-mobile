import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveKeyValueSecure = async (key: string, value: any) => {
  await SecureStore.setItemAsync(key, value);
  return value;
};

export const getValueSecure = async (key: string) => {
  let result = await SecureStore.getItemAsync(key);
  return result;
};

export const saveKeyValue = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getValue = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    return null;
  }
};
