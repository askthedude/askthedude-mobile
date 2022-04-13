import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddProjectScreen from "../screen/AddProjectScreen";
import { LoginScreen } from "../../profile/screen/LoginScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

const Stack = createStackNavigator();

export const AddProjectNavigator = () => {
  const { user }: { user: any | undefined } = useSelector(
    (state: RootState) => state.user
  );
  return (
    <Stack.Navigator initialRouteName="AddProject">
      {user === undefined ? (
        <Stack.Screen
          name="AddProjectLogin"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="AddProjectScreen"
          component={AddProjectScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};
