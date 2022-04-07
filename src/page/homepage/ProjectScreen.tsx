import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { CompleteProjectData } from "../../commons/model";

export const ProjectScreen = () => {
  const project: CompleteProjectData = {
    id: 1,
    title: "Spring context",
    description: "wazaap",
    stars: 5,
    is_active: true,
    url: "www.someurl.com",
    start_date: "some start date",
    technologies: [
      {
        id: 1,
        title: "some title",
        is_hot: true,
        resource_url: "some url to resource",
      },
    ],
    users: [
      {
        id: 1,
        username: "nikasakana",
        email: "email@email.com",
        github_url: "github url .com",
        name: "nika",
        is_active: true,
        linkedin_url: "some url to linkedin",
      },
    ],
    stats: {
      id: 1,
      number_of_interested: 213,
      subscriptions: 123,
      seen_frequency: 321,
    },
  };

  const route: any = useRoute();
  const { projectId } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text>{project.title}</Text>
        <Text>{project.stars}</Text>
      </View>
      <Text>{projectId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAE0E6",
  },
  upperContainer: { flex: 1, flexDirection: "row" },
  generalInfo: {},
  middleContainer: {},
  bottomContainer: {},
});
