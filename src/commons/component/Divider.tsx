import { View, StyleSheet } from "react-native";
import React from "react";

export const Divider = ({ dividerHeight }: { dividerHeight?: number }) => {
  return (
    <View style={[styles.container, { height: dividerHeight || 2 }]}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#d3d3d3",
  },
});
