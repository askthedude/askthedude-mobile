import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TechnologyData } from "../model";
import { color, size } from "../style";

export const TechnologyTagView = ({
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
        { backgroundColor: backgroundColor || color.backgroundPink },
      ]}
    >
      <Text style={styles.text}>{techonolgy.name || ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: size.borderRadius.small,
    padding: size.padding.xsmall,
    marginRight: size.margin.small,
    marginVertical: size.margin.small,
    justifyContent: "center",
    alignItems: "center",
    borderColor: color.borderGrey,
    borderWidth: size.borderWidth.small,
  },
  text: {
    color: color.black,
    fontSize: size.font.small,
    fontWeight: size.fontWeight.fourfuckinghundred,
  },
});
