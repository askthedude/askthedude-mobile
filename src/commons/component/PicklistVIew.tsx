import { StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { color, size } from "../style";
import { TechnologyData } from "../model/index";
import { SelectableTechnologyTagView } from "./SelectableTechnologyView";
import { AddTechnologyModal } from "./AddTechnologyModal";

export const PicklistView = ({
  tags,
  errorMessage = "",
  isSelected = () => false,
  toggleSelection = () => {},
  toggleAddition = () => {},
  adding = false,
}: {
  tags: TechnologyData[];
  errorMessage?: string;
  isSelected: (id: number) => boolean;
  toggleSelection: (id: number) => void;
  toggleAddition: () => void;
  adding: boolean;
}) => {
  return (
    <ScrollView
      style={[
        adding ? styles.scrollViewContainerDimmed : styles.scrollViewContainer,
        { borderColor: errorMessage !== "" ? color.error : color.borderGrey },
        adding ? styles.dimmedColor : {},
      ]}
      contentContainerStyle={[
        styles.contentContainer,
        { borderColor: errorMessage !== "" ? color.error : color.borderGrey },
      ]}
    >
      {/* {!adding && ( */}
      <>
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
            toggleAddition();
          }}
        />
      </>
      {/* )} */}
      {adding ? (
        <AddTechnologyModal closeCallback={() => toggleAddition()} />
      ) : null}
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
  scrollViewContainerDimmed: {
    width: "100%",
    flexWrap: "wrap",
    borderWidth: size.borderWidth.zero,
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: size.padding.small,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dimmedColor: {
    backgroundColor: color.dimBackground.color,
  },
});
