import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, size } from "../../../commons/style";
import { RecommendationCardView } from "../../../commons/component/RecommendationCardView";
import TitleView from "../../../commons/component/TitleView";

export const RecommendationsScreen = () => {
  const recommendations = [
    {
      id: 1,
      title: "Dependency injection container",
      description: "Simple SPring like injection container from scratch",
      stars: 5,
      is_active: true,
      url: "some_URL",
      start_date: "soon",
      technologies: [
        {
          id: 1,
          name: "Java",
          is_hot: false,
          resource_url: "Java wtf",
        },
        {
          id: 2,
          name: "Docker",
          is_hot: false,
          resource_url: "docker wtf",
        },
      ],
      authors: ["wazap", "wuzap"],
    },
    {
      id: 2,
      title: "Dependency injection container",
      description: "Simple SPring like injection container from scratch",
      stars: 5,
      is_active: true,
      url: "some_URL",
      start_date: "soon",
      technologies: [
        {
          id: 1,
          name: "Java",
          is_hot: false,
          resource_url: "Java wtf",
        },
        {
          id: 2,
          name: "Docker",
          is_hot: false,
          resource_url: "docker wtf",
        },
      ],
      authors: ["wazap", "wuzap"],
    },
    {
      id: 3,
      title: "Dependency injection container",
      description: "Simple SPring like injection container from scratch",
      stars: 5,
      is_active: true,
      url: "some_URL",
      start_date: "soon",
      technologies: [
        {
          id: 1,
          name: "Java",
          is_hot: false,
          resource_url: "Java wtf",
        },
        {
          id: 2,
          name: "Docker",
          is_hot: false,
          resource_url: "docker wtf",
        },
      ],
      authors: ["wazap", "wuzap"],
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      <TitleView text="Your Recommendations" />
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.recommendationsContainer}
      >
        {recommendations.map((recommendation) => (
          <RecommendationCardView
            key={recommendation.id}
            recommendation={recommendation}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewcontainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: size.padding.medium,
    backgroundColor: color.backgroundPink,
  },
  scrollViewContainer: {
    flex: 1,
    marginVertical: size.margin.medium,
  },
  recommendationsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
