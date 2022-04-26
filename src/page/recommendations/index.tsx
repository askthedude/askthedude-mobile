import { View, StyleSheet } from "react-native";
import React from "react";
import { RecommendationsNavigator } from "./navigation.tsx";

export const Recommendations = () => {
  return (
    <View style={styles.container}>
      <RecommendationsNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
