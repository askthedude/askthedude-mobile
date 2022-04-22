import { Text, StyleSheet } from "react-native";
import React from "react";
import { TechnologyData } from "../model";
import { color, size } from "../style";
import { TouchableOpacity } from "react-native-gesture-handler";

export const SelectableTechnologyTagView = ({
  techonolgy,
  selected,
  pressCallback = () => {},
}: {
  techonolgy: TechnologyData;
  selected: boolean;
  pressCallback?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: selected
            ? styles.selected.backgroundColor
            : styles.regular.backgroundColor,
        },
      ]}
      onPress={() => {
        pressCallback();
      }}
    >
      <Text
        style={[
          styles.text,
          selected ? styles.textSelected : styles.textRegular,
        ]}
      >
        {techonolgy.name || ""}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: size.borderRadius.small,
    padding: size.padding.xsmall,
    marginRight: size.margin.small,
    marginVertical: size.margin.small,
    justifyContent: "center",
    alignItems: "center",
    height: size.height.medium,
  },
  text: { fontSize: size.font.medium, fontWeight: "500" },
  selected: {
    backgroundColor: color.green,
  },
  regular: {
    backgroundColor: color.backgroundGrey,
  },
  textSelected: {
    color: color.white,
  },
  textRegular: {
    color: color.darkblue,
  },
});
