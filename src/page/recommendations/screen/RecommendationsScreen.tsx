import { StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, size } from "../../../commons/style";
import { RecommendationCardView } from "../../../commons/component/RecommendationCardView";
import TitleView from "../../../commons/component/TitleView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { filterProjects } from "../../../state/reducer/projectListSlice";
import Loading from "../../../commons/component/LoadingView";

export const RecommendationsScreen = () => {
  const { loading, projects: recommendations } = useSelector(
    (root: RootState) => root.projects
  );
  const technologies = useSelector(
    (root: RootState) => root.interestedTechnologies.technologies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (technologies && technologies.length > 0) {
      dispatch(
        filterProjects({ technology_ids: technologies.map((e) => e.id) })
      );
    }
  }, [technologies]);

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      <TitleView text="Your Recommendations" />
      {loading === "pending" ? (
        <Loading />
      ) : (
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
      )}
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
