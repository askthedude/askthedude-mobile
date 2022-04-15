import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { size } from "../style";
import { PartialProjectData } from "../model";
import { PartialProjectInfoView } from "./PartialProjectView";
import { useNavigation } from "@react-navigation/native";

export const ProjectListView = ({
  projects,
}: {
  projects: PartialProjectData[];
}) => {
  const navigation: any = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {projects.map((project) => (
        <PartialProjectInfoView
          key={project.id}
          project={project}
          onClickCallback={() => {
            navigation.navigate("Project", { projectId: project.id });
          }}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: size.padding.xsmall,
  },
  contentContainer: {
    width: "100%",
  },
});
