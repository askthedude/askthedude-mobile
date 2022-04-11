import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Login } from "../login";

export const Profile = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      {user === undefined ? (
        <Login />
      ) : (
        <View style={styles.container}>
          <Text>Profile</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});
