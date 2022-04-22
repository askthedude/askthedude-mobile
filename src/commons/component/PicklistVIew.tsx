import { StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import { size } from "../style";
import { TechnologyData } from "../model/index";
import { SelectableTechnologyTagView } from "./SelectableTechnologyView";
import { AddProjectContext } from "../../page/addProject/context";

export const PicklistView = ({ tags }: { tags: TechnologyData[] }) => {
  const { inputs, setInputs } = useContext(AddProjectContext);
  console.log(inputs);
  const toggleTechnologyTag = (id: number) => {
    const chosenTechnologyIds = inputs.technology_ids;
    const idx = chosenTechnologyIds.indexOf(id);
    if (idx == -1) {
      setInputs((prev: any) => ({
        ...prev,
        technology_ids: [...inputs.technology_ids, id],
      }));
    } else {
      setInputs((prev: any) => ({
        ...prev,
        technology_ids: [
          ...inputs.technology_ids.filter((_: any, i: number) => i !== idx),
        ],
      }));
    }
  };

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      contentContainerStyle={styles.contentContainer}
    >
      {tags.map((t) => (
        <SelectableTechnologyTagView
          key={t.id}
          techonolgy={t}
          selected={inputs.technology_ids.includes(t.id)}
          pressCallback={() => {
            toggleTechnologyTag(t.id);
          }}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: "100%",
    borderRadius: size.borderRadius.small,
    flexWrap: "wrap",
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: size.padding.small,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
