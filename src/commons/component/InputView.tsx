import { TextInput, StyleSheet } from "react-native";
import React from "react";
import { color, size } from "../style";
import Animated from "react-native-reanimated";
import { useScale } from "../animation/useScaleAnimation";

const Input = ({
  containerStyle = {},
  inputStyle = {},
  placeholder = "input text",
  callback = () => {},
  errorMessage = "",
  animation,
  secured = false,
}: {
  containerStyle?: any;
  inputStyle?: any;
  placeholder: string;
  callback: (txt: string) => void;
  errorMessage?: string;
  animation?: any;
  secured?: boolean;
}) => {
  const { animationStyle } = useScale(animation, errorMessage);

  return (
    <Animated.View
      style={[
        styles.container,
        { borderColor: errorMessage !== "" ? color.error : color.borderGrey },
        containerStyle,
        animationStyle,
      ]}
    >
      <TextInput
        secureTextEntry={secured}
        placeholder={placeholder}
        placeholderTextColor={color.black}
        style={[styles.textInputArea, inputStyle]}
        onChangeText={(txt) => {
          callback(txt);
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: size.height.big,
    width: size.width.bigplus,
    backgroundColor: color.white,
    marginVertical: size.margin.medium,
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
