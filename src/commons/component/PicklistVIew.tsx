import { StyleSheet, ScrollView, Alert } from "react-native";
import React from "react";
import { color, size } from "../style";
import { TechnologyData } from "../model/index";
import { SelectableTechnologyTagView } from "./SelectableTechnologyView";

export const PicklistView = ({
  tags,
  errorMessage = "",
  isSelected = () => false,
  toggleSelection = () => {},
}: {
  tags: TechnologyData[];
  errorMessage?: string;
  isSelected: (id: number) => boolean;
  toggleSelection: (id: number) => void;
}) => {
  return (
    <ScrollView
      style={[
        styles.scrollViewContainer,
        { borderColor: errorMessage !== "" ? color.error : color.borderGrey },
      ]}
      contentContainerStyle={[
        styles.contentContainer,
        { borderColor: errorMessage !== "" ? color.error : color.borderGrey },
      ]}
    >
      {tags.map((t) => (
        <SelectableTechnologyTagView
          key={t.id}
          techonolgy={t}
          selected={isSelected(t.id)}
          pressCallback={() => toggleSelection(t.id)}
        />
      ))}
      <SelectableTechnologyTagView
        techonolgy={{ name: "", id: -1, resource_url: "", is_hot: false }}
        selected={false}
        iconName="add-circle-outline"
        pressCallback={() => {
          Alert.alert("You will sonn be able to add your own categories");
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: "100%",
    borderRadius: size.borderRadius.small,
    flexWrap: "wrap",
    borderWidth: size.borderWidth.medium,
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: size.padding.small,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
