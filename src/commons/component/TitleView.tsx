import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { color, size } from "../style";

const TitleView = ({
  text,
  inputStyle = {},
}: {
  text: string;
  inputStyle?: any;
}) => {
  return (
    <View style={[styles.container, inputStyle]}>
      <Text style={styles.textStyles}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    fontSize: size.font.big,
    textAlign: "center",
    color: color.darkblue,
  },
});

export default TitleView;
