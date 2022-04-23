import { useEffect } from "react";
import "react-native-get-random-values";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { DEVICE_UNIQUE_IDENTIFIER_KEY } from "../../constants";
import { anonymousTokenAdd } from "../../state/reducer/userSlice";
import { getValueSecure, saveKeyValueSecure } from "../storage";

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
    persistDeviceIdentifier()
      .then((res) =>
        dispatch(anonymousTokenAdd({ identifier_token: res || "" }))
      )
      .catch((err) => console.log(err));
  }, []);
};
