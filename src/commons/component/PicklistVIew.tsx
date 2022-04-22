import { StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import { color, size } from "../style";
import { TechnologyData } from "../model/index";
import { SelectableTechnologyTagView } from "./SelectableTechnologyView";
import { AddProjectContext } from "../../page/addProject/context";

export const PicklistView = ({
  tags,
  errorMessage = "",
  animation = false,
}: {
  tags: TechnologyData[];
  errorMessage?: string;
  animation?: boolean;
}) => {
  const { inputs, setInputs } = useContext(AddProjectContext);

  const toggleTechnologyTag = (id: number) => {
    const chosenTechnologyIds = inputs.technology_ids;
    const idx = chosenTechnologyIds.indexOf(id);
    if (idx == -1) {
      setInputs((prev: any) => ({
        ...prev,
        technology_ids: [...inputs.technology_ids, id],
        technology_ids_error: "",
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
          selected={inputs.technology_ids.includes(t.id)}
          pressCallback={() => {
            toggleTechnologyTag(t.id);
          }}
        />
      ))}
      <SelectableTechnologyTagView
        techonolgy={{ name: "", id: -1, resource_url: "", is_hot: false }}
        selected={false}
        iconName="add-circle-outline"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
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
