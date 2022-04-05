import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ProjectDeclaration } from "../model";
import { TechnologyTag } from "./TechnologyTag";

export const ProjectDeclarationView = ({
  project,
}: {
  project: ProjectDeclaration;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.logoContainer}></View>
        <Text>Title: {project.title}</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text>Description: {project.description}</Text>
        <View style={styles.tagsContainer}></View>
        {project.technologies.map((tech) => (
          <TechnologyTag techonolgy={tech} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "blue" },
  upperContainer: { flex: 1, backgroundColor: "red" },
  logoContainer: {},
  lowerContainer: { flex: 1, backgroundColor: "yellow", alignItems: "center" },
  tagsContainer: { flex: 1, flexDirection: "row" },
});
