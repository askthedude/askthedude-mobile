import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { color, size } from "../style";

export const TextView = ({
  text,
  inputStyle = {},
  textStyle = {},
}: {
  text?: string;
  inputStyle?: any;
  textStyle?: any;
}) => {
  return (
    <View style={[styles.container, inputStyle]}>
      <Text style={[styles.textStyles, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    fontSize: size.font.medium,
    textAlign: "center",
    color: color.darkblue,
  },
});
