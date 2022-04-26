import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FillInterestsScreen } from "../screen/FillInterestsScreen";
import { RecommendationsScreen } from "../screen/RecommendationsScreen";

const Stack = createStackNavigator();

export const RecommendationsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FillInterests">
      <Stack.Screen
        name="FillInterests"
        component={FillInterestsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Recommendations"
        component={RecommendationsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
