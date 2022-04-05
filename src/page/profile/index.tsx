import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

type Props = {};

export const Profile = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      <View style={{}}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
