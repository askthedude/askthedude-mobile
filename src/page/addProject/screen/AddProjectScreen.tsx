import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { color } from "../../../commons/style";
import { SafeAreaView } from "react-native-safe-area-context";

const AddProjectScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AddProjectScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundPink,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddProjectScreen;
