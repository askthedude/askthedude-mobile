import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProjectListScreen } from "../screen/ProjectListScreen";
import { ProjectScreen } from "../screen/ProjectScreen";

const Stack = createStackNavigator();

export const HomepageNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProjectList">
      <Stack.Screen
        name="ProjectList"
        component={ProjectListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Project"
        component={ProjectScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
