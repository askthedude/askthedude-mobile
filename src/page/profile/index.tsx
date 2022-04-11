import { View, StyleSheet } from "react-native";
import React from "react";
import { ProfileNavigator } from "./navigation/ProfilePageNavigator";

export const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <ProfileNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
