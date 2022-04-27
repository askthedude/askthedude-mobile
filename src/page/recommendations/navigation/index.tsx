import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FillInterestsScreen } from "../screen/FillInterestsScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { RecommendationsScreen } from "../screen/RecommendationsScreen";

const Stack = createStackNavigator();

export const RecommendationsNavigator = () => {
  const { technologies } = useSelector(
    (state: RootState) => state.interestedTechnologies
  );
  return (
    <Stack.Navigator initialRouteName="FillInterests">
      {!technologies || technologies.length == 0 ? (
        <Stack.Screen
          name="FillInterests"
          component={FillInterestsScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Recommendations"
          component={RecommendationsScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};
