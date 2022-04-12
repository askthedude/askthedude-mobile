import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { color, size } from "../style";

const Input = ({
  inputStyle = {},
  placeholder = "input text",
  callback = () => {},
  errorMessage = "",
}: {
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
      ]}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={color.black}
        style={[inputStyle, styles.textInputArea]}
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
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textInputArea: {
    height: "100%",
    width: "100%",
  },
});

export default Input;