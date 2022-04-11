import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PartialProjectData } from "../model";
import { TechnologyTagView } from "./TechnologyTagView";
import { TouchableOpacity } from "react-native-gesture-handler";
import UpvotesView from "./UpvotesView";
import { color, size } from "../style";

export const PartialProjectInfoView = ({
  project,
  onClickCallback = () => {},
}: {
  project: PartialProjectData;
  onClickCallback: () => void;
}) => {
  return (
    <TouchableOpacity onPress={() => onClickCallback()}>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.logoContainer}></View>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.author}>
            Posted by: {project.authors[0] || ""}
          </Text>
        </View>
        <View style={styles.middleContaner}>
          <Text style={styles.description}>{project.description || ""}</Text>
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.tagsContainer}>
            {project.technologies.map((tech) => (
              <TechnologyTagView key={tech.id} techonolgy={tech} />
            ))}
          </View>
          <UpvotesView upvotes={project.stars} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    marginVertical: size.margin.small,
    borderRadius: size.borderRadius.small,
  },
  upperContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: size.padding.small,
    paddingTop: size.padding.small,
  },
  title: {
    fontSize: size.font.medium,
    fontWeight: "700",
    maxWidth: "60%",
  },
  author: {
    fontSize: size.font.small,
    fontWeight: "300",
    marginHorizontal: size.margin.big,
  },
  logoContainer: {},
  middleContaner: {
    flex: 1,
    alignItems: "flex-start",
    maxWidth: "60%",
    paddingVertical: size.padding.medium,
    paddingHorizontal: size.padding.small,
  },
  description: { fontSize: size.font.small, fontWeight: "300" },
  lowerContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: color.lighterGrey,
    padding: size.padding.small,
  },
  tagsContainer: { flexDirection: "row", alignItems: "flex-start" },
});
