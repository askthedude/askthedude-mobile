import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

type Props = {};

export const Notifications = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      <View>
        <Text>Notifications</Text>
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
