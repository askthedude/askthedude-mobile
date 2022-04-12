import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screen/LoginScreen";
import { ProfileScreen } from "../screen/ProfileScreen";
import SignupScreen from "../screen/SignupScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Stack.Navigator initialRouteName="Profile">
      {user === undefined ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
