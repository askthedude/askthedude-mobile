import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const navigation: any = useNavigation();
  useEffect(() => {
    if (user === undefined) {
      navigation.replace("Login", {});
    }
  }, [user]);
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};
