import { useEffect } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { DEVICE_UNIQUE_IDENTIFIER_KEY } from "../../constants";
import { getValueSecure, saveKeyValueSecure } from "../storage";
import { useDispatch } from "react-redux";
import { getInterestedTechnologiesFromLocalStorage } from "../../state/reducer/technologyInterestsSlice";

export const useDeviceTokenHook = () => {
  const persistDeviceIdentifier = async () => {
    let token = await getValueSecure(DEVICE_UNIQUE_IDENTIFIER_KEY);
    if (!token) {
      token = await saveKeyValueSecure(DEVICE_UNIQUE_IDENTIFIER_KEY, uuidv4());
    }
    return token;
  };
  const dispatch = useDispatch();

  useEffect(() => {
    persistDeviceIdentifier();
    dispatch(getInterestedTechnologiesFromLocalStorage());
  }, []);
};
