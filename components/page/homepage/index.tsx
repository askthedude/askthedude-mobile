import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

type Props = {};

export const HomePage = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      <View style={styles.container}>
        <Text>HomePage</Text>
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
  container: {},
});
