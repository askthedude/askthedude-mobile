import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { ProjectDeclaration } from "../../commons/model";
import { ProjectDeclarationView } from "../../commons/component/ProjectDeclarationView";

export const HomePage = () => {
  const projects: ProjectDeclaration[] = [
    {
      id: 1,
      title: "spring",
      description: "something cool",
      stars: 1,
      is_active: true,
      url: "smth url",
      start_date: "date",
      technologies: [
        { title: "Java", id: 1, resource_url: "ad", is_hot: false },
      ],
    },
    {
      id: 2,
      title: "asd",
      description: "something cool",
      stars: 1,
      is_active: true,
      url: "smth url",
      start_date: "date",
      technologies: [
        { title: "Java", id: 1, resource_url: "ad", is_hot: false },
        { title: "Java", id: 1, resource_url: "ad", is_hot: false },
      ],
    },
    {
      id: 3,
      title: "qwe",
      description: "something cool",
      stars: 1,
      is_active: true,
      url: "smth url",
      start_date: "date",
      technologies: [
        { title: "Java", id: 1, resource_url: "ad", is_hot: false },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      <ScrollView style={styles.container}>
        {projects.map((project) => (
          <ProjectDeclarationView key={project.id} project={project} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: { flex: 1, width: "100%" },
});
