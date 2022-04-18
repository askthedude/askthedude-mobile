import { TextInput, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { color, size } from "../style";
import Animated from "react-native-reanimated";
import { useScale } from "../animation/useScaleAnimation";

const SCALE_CONSTANT = 1.2;

const Input = ({
  containerStyle = {},
  inputStyle = {},
  placeholder = "input text",
  callback = () => {},
  errorMessage = "",
  animation,
}: {
  containerStyle?: any;
  inputStyle?: any;
  placeholder: string;
  callback: (txt: string) => void;
  errorMessage?: string;
  animation?: any;
}) => {
  const { scale, animationStyle } = useScale();
  useEffect(() => {
    if (errorMessage != "") {
      scale.value = SCALE_CONSTANT;
    }
  }, [animation]);

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
    width: size.width.xbig,
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
