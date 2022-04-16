import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { TechnologyTagView } from "../../../commons/component/TechnologyTagView";
import UpvotesView from "../../../commons/component/UpvotesView";
import UserInfoView from "../../../commons/component/UserInfoView";
import ProjectDetails from "../../../commons/component/ProjectDetails";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import {
  getProjectById,
  incrementSeenFrequencyObject,
  updateProjectStats,
} from "../../../state/reducer/projectSlice";
import Loading from "../../../commons/component/LoadingView";
import { color, size } from "../../../commons/style";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleView from "../../../commons/component/TitleView";
import { NavigationScreenHeader } from "../../../commons/component/NavigationScreenHeader";
import { TextView } from "../../../commons/component/TextView";
import { SeenView } from "../../../commons/component/SeenView";

export const ProjectScreen = () => {
  const route: any = useRoute();
  const { projectId } = route.params;
  const dispatch = useDispatch();
  const { project, loading } = useSelector((state: RootState) => state.project);

  const apiCommunication = async () => {
    await Promise.all([dispatch(getProjectById(projectId))]);
    await Promise.all([
      dispatch(updateProjectStats(incrementSeenFrequencyObject(projectId))),
    ]);
  };

  useEffect(() => {
    apiCommunication();
  }, [projectId]);

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      {loading === "pending" ? (
        <Loading />
      ) : (
        <>
          <NavigationScreenHeader text={"Project"} />
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.upperContainer}>
              <TitleView text={project?.title} />
              <Text style={styles.author}>
                By: {project?.users[0].username}
              </Text>
              <TextView
                text={project?.description}
                inputStyle={styles.descriptionContainer}
                textStyle={styles.descriptionText}
              />
              <View style={styles.metadataContainer}>
                <View style={styles.tagsContainer}>
                  {project?.technologies.map((tech) => (
                    <TechnologyTagView key={tech.id} techonolgy={tech} />
                  ))}
                </View>
                <View style={styles.viewsContainer}>
                  <UpvotesView
                    upvotes={project?.stars}
                    inputStyle={styles.upvotesWrapper}
                  />
                  <SeenView statistics={project?.stats} />
                </View>
              </View>
              <ProjectDetails
                project_url={project?.url}
                start_date={project?.start_date}
              />
              {/* <UserInfoView user={project?.users[0]} /> */}
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewcontainer: {
    flex: 1,
    backgroundColor: color.backgroundPink,
  },
  container: {
    flex: 1,
    paddingHorizontal: size.padding.small,
  },
  author: { fontSize: size.font.small },
  upperContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    maxHeight: "50%",
    padding: size.padding.small,
    backgroundColor: color.white,
    borderRadius: size.borderRadius.small,
  },
  descriptionContainer: {
    maxWidth: "70%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginVertical: size.margin.medium,
  },
  descriptionText: {
    fontSize: size.font.medium,
    fontWeight: "300",
    textAlign: "left",
  },
  metadataContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: size.borderRadius.xsmall,
    paddingHorizontal: size.padding.small,
  },
  viewsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  upvotesWrapper: {
    marginHorizontal: size.margin.medium,
  },
  tagsContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    paddingVertical: size.padding.xsmall,
  },
  bottomContainer: {
    paddingHorizontal: size.padding.small,
  },
});
