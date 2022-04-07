import { StyleSheet, View } from "react-native";
import React from "react";
import { HomepageNavigator } from "./HomepageNavigator";

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <HomepageNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
