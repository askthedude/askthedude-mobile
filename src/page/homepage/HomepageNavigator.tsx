import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProjectListScreen } from "./ProjectListScreen";
import { ProjectScreen } from "./ProjectScreen";

const Stack = createStackNavigator();

export const HomepageNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProjectList">
      <Stack.Screen name="ProjectList" component={ProjectListScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
    </Stack.Navigator>
  );
};
