import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { color, size } from "../style";

const Input = ({
  containerStyle = {},
  inputStyle = {},
  placeholder = "input text",
  callback = () => {},
  errorMessage = "",
}: {
  containerStyle?: any;
  inputStyle?: any;
  placeholder: string;
  callback: (txt: string) => void;
  errorMessage?: string;
}) => {
  return (
    <View
      style={[
        styles.container,
        { borderColor: errorMessage !== "" ? color.error : color.borderGrey },
        containerStyle,
      ]}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={color.black}
        style={[styles.textInputArea, inputStyle]}
        onChangeText={(txt) => {
          callback(txt);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: size.height.big,
    width: size.width.big,
    backgroundColor: color.white,
    marginVertical: size.margin.mediumplus,
    borderRadius: size.borderRadius.small,
    padding: size.padding.small,
    borderWidth: size.borderWidth.medium,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textInputArea: {
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
});

export default Input;
