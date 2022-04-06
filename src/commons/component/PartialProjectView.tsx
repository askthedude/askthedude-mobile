import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PartialProjectData } from "../model";
import { TechnologyInfoView } from "./TechnologyTagView";
import { UpvoteArrowView } from "./UpvoteArrowView";

export const PartialProjectInfoView = ({
  project,
}: {
  project: PartialProjectData;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.logoContainer}></View>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.date}>Posted by: {project.authors[0] || ""}</Text>
      </View>
      <View style={styles.middleContaner}>
        <Text style={styles.description}>{project.description || ""}</Text>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.tagsContainer}>
          {project.technologies.map((tech) => (
            <TechnologyInfoView key={tech.id} techonolgy={tech} />
          ))}
        </View>
        <View style={styles.upvotesContainer}>
          <View style={{ marginRight: 5 }}>
            <UpvoteArrowView size={15} />
          </View>
          <Text style={styles.likesContainer}>{project.stars}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 5,
  },
  upperContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "monospace",
    maxWidth: "60%",
  },
  date: {
    fontSize: 12,
    fontWeight: "300",
    fontFamily: "monospace",
    marginHorizontal: 20,
  },
  logoContainer: {},
  middleContaner: {
    flex: 1,
    alignItems: "flex-start",
    maxWidth: "60%",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  description: { fontSize: 14, fontWeight: "300" },
  lowerContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#F8F9FA",
    padding: 5,
  },
  tagsContainer: { flexDirection: "row", alignItems: "flex-start" },
  upvotesContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  likesContainer: {
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});
