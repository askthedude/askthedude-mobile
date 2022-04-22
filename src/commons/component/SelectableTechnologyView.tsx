import { Text, StyleSheet } from "react-native";
import React from "react";
import { TechnologyData } from "../model";
import { color, size } from "../style";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

export const SelectableTechnologyTagView = ({
  techonolgy,
  selected,
  pressCallback = () => {},
  iconName,
}: {
  techonolgy: TechnologyData;
  selected: boolean;
  pressCallback?: () => void;
  iconName?: string;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: selected
            ? styles.selected.backgroundColor
            : iconName
            ? color.backgroundPink
            : styles.regular.backgroundColor,
        },
        iconName ? { width: size.width.xsmall } : {},
      ]}
      onPress={() => {
        pressCallback();
      }}
    >
      <Text
        style={[
          styles.text,
          selected ? styles.textSelected : styles.textRegular,
          iconName ? { color: color.primary } : {},
        ]}
      >
        {techonolgy.name ? (
          techonolgy.name
        ) : (
          <Ionicons name={iconName || ""} size={size.icon.smallplus} />
        )}
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
    backgroundColor: color.darkblue,
  },
  textSelected: {
    color: color.white,
  },
  textRegular: {
    color: color.white,
  },
});
