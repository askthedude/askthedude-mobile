import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { PartialProjectData } from "../model/index";
import { color, size, shadowStyles } from "../style";
import { Divider } from "./DividerView";
import { TechnologyTagView } from "./TechnologyTagView";

export const RecommendationCardView = ({
  recommendation,
}: {
  recommendation: PartialProjectData;
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{recommendation.title}</Text>
      </View>
      <View style={styles.tagsContainer}>
        {recommendation.technologies.slice(0, 3).map((tech) => (
          <TechnologyTagView key={tech.id} techonolgy={tech} />
        ))}
      </View>
      <Divider dividerHeight={2} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{recommendation.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: "45%",
    maxWidth: "45%",
    maxHeight: size.height.xxbigplus,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: color.white,
    margin: size.margin.medium,
    borderRadius: size.borderRadius.big,
    padding: size.padding.medium,
    ...shadowStyles,
  },
  titleContainer: {
    marginVertical: size.margin.small,
  },
  title: {
    fontSize: size.font.medium,
    fontWeight: size.fontWeight.threefuckinghundred,
  },
  tagsContainer: {
    width: "100%",
    flexDirection: "row",
    marginVertical: size.margin.small,
  },
  descriptionContainer: {
    marginVertical: size.margin.small,
  },
  description: {
    fontSize: size.font.small,
    fontWeight: size.fontWeight.threefuckinghundred,
  },
});
