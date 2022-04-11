import { Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const DEFAULT_WIDTH = 240;
const DEFAULT_HEIGHT = 45;
const DEFAULT_BACKGROUND_COLOR = "#1484D7";

const Button = ({
  callback = () => {},
  inputWidth,
  inputHeight,
  inputBackgroundColor,
  inputFontColor,
  text = "Press",
  inputBorderWidth = 0,
  inputBorderColor = DEFAULT_BACKGROUND_COLOR,
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
          backgroundColor: inputBackgroundColor || DEFAULT_BACKGROUND_COLOR,
          borderWidth: inputBorderWidth,
          borderColor: inputBorderColor,
          ...otherStyles,
        },
      ]}
      onPress={() => {
        callback();
      }}
    >
      <Text style={[styles.buttonText, { color: inputFontColor || "white" }]}>
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
