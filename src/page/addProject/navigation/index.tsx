import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddProjectScreen from "../screen/AddProjectScreen";

const Stack = createStackNavigator();

export const AddProjectNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AddProject">
      <Stack.Screen
        name="AddProjectScreen"
        component={AddProjectScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
