import { View, StyleSheet } from "react-native";
import React from "react";
import { color } from "../../commons/style";
import { AddProjectNavigator } from "./navigation";
import { AppProjectContextProvider } from "./context";

export const AddProject = () => {
  return (
    <View style={styles.container}>
      <AppProjectContextProvider>
        <AddProjectNavigator />
      </AppProjectContextProvider>
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
