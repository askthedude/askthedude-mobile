import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
