import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { CompleteProjectData } from "../../commons/model";
import { TechnologyTagView } from "../../commons/component/TechnologyTagView";
import UpvotesView from "../../commons/component/UpvotesView";

export const ProjectScreen = () => {
  const project: CompleteProjectData = {
    id: 1,
    title: "Spring context",
    description: "wazaasdfasdfasdfasdjfajskdnfkasjdfnakjsfnakjsdnfakjsnfap",
    stars: 5,
    is_active: true,
    url: "www.someurl.com",
    start_date: "some start date",
    technologies: [
      {
        id: 1,
        title: "Java",
        is_hot: true,
        resource_url: "some url to resource",
      },
      {
        id: 2,
        title: "Spring",
        is_hot: true,
        resource_url: "some url to resource",
      },
      {
        id: 3,
        title: "Spring",
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
  // use paramter below to fetch data via HTTP API
  const { projectId } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.author}>
          Posted by: {project.users[0].username}
        </Text>
      </View>

      <View style={styles.middleContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{project.description}</Text>
        </View>
        <View style={styles.metadataContainer}>
          <View style={styles.tagsContainer}>
            {project.technologies.map((tech) => (
              <TechnologyTagView techonolgy={tech} />
            ))}
          </View>
          <UpvotesView upvotes={project.stars} />
        </View>
      </View>

      <View style={styles.bottomContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAE0E6",
  },
  upperContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: "2%",
    paddingVertical: "2%",
  },
  title: { fontSize: 24, fontWeight: "500" },
  authorContainer: {},
  author: { fontSize: 12 },
  middleContainer: {
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "50%",
    paddingHorizontal: "2%",
    marginVertical: "1%",
  },
  descriptionContainer: {
    alignItems: "flex-start",
    marginVertical: "1%",
  },
  descriptionText: { fontSize: 17, fontWeight: "300" },
  metadataContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#F8F9FA",
    borderRadius: 3,
    paddingHorizontal: "3%",
  },
  tagsContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginVertical: "1%",
  },
  bottomContainer: {},
});
