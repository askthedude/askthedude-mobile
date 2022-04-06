import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TechnologyData } from "../model";

export const TechnologyInfoView = ({
  techonolgy,
  backgroundColor,
}: {
  techonolgy: TechnologyData;
  backgroundColor?: string;
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor || "white" },
      ]}
    >
      <Text style={styles.text}>{techonolgy.title || ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
    marginVertical: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "black", fontSize: 13, fontWeight: "700" },
});
