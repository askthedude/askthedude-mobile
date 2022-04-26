import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "../style";

const DEFAULT_WIDTH = 240;
const DEFAULT_HEIGHT = 45;

const Button = ({
  callback = () => {},
  inputWidth,
  inputHeight,
  inputBackgroundColor,
  inputFontColor,
  text = "Press",
  inputBorderWidth = 0,
  inputBorderColor = color.primary,
  otherStyles = {},
}: {
  callback: any;
  inputWidth?: number;
  inputHeight?: number;
  inputBackgroundColor?: string;
  inputFontColor?: string;
  text: string;
  inputBorderWidth?: number;
  inputBorderColor?: string;
  otherStyles?: any;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: inputWidth || DEFAULT_WIDTH,
          height: inputHeight || DEFAULT_HEIGHT,
          backgroundColor: inputBackgroundColor || color.primary,
          borderWidth: inputBorderWidth,
          borderColor: inputBorderColor,
          ...otherStyles,
        },
      ]}
      onPress={() => {
        callback();
      }}
    >
      <Text
        style={[styles.buttonText, { color: inputFontColor || color.white }]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default Button;
