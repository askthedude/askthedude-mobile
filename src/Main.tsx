import React from "react";
import { StyleSheet, View } from "react-native";
import { MainNavigation } from "./navigation/MainNavigation";

export default () => {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
