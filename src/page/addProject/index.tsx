import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { color } from "../../commons/style";
import { AddProjectNavigator } from "./navigation";

export const AddProject = () => {
  return (
    <View style={styles.container}>
      <AddProjectNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: color.white,
  },
});
