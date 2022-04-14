import { View, TextInput, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { color, size } from "../style";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

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
  animation: any;
}) => {
  const componentSize = useSharedValue(1);
  const config = {
    duration: 400,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };
  const animationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(
        size.width.big * componentSize.value,
        config,
        () => (componentSize.value = 1)
      ),
      height: withTiming(
        size.height.big * componentSize.value,
        config,
        () => (componentSize.value = 1)
      ),
    };
  });

  useEffect(() => {
    if (errorMessage != "") {
      componentSize.value = 1.2;
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
