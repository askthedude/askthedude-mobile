import { View, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { color, size } from "../style/index";

type Props = {
  size: number;
  color?: string;
  padding?: number;
};

export const UpvoteArrowView = (props: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.color || color.white,
          padding: props.padding || 1,
        },
      ]}
    >
      <Ionicons name="arrow-up" size={props.size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: size.borderWidth.small,
    borderRadius: size.borderRadius.medium,
  },
});
