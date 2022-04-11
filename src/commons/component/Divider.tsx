import { View, StyleSheet } from "react-native";
import React from "react";
import { color } from "../style";

export const Divider = ({ dividerHeight }: { dividerHeight?: number }) => {
  return (
    <View style={[styles.container, { height: dividerHeight || 1 }]}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: color.lighterGrey,
  },
});
