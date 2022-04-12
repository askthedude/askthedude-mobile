import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
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
import { HeaderBackButton } from "@react-navigation/elements";

export const ProjectScreen = () => {
  const route: any = useRoute();
  const { projectId } = route.params;
  const dispatch = useDispatch();
  const { project, loading } = useSelector((state: RootState) => state.project);
  const navigation = useNavigation();

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
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.upperContainer}>
            <View style={styles.backContainer}>
              <HeaderBackButton onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{project?.title}</Text>
            </View>
          </View>

          <View style={styles.middleContainer}>
            <Text style={styles.author}>
              Posted by: {project?.users[0].username}
            </Text>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>{project?.description}</Text>
            </View>
            <View style={styles.metadataContainer}>
              <View style={styles.tagsContainer}>
                {project?.technologies.map((tech) => (
                  <TechnologyTagView key={tech.id} techonolgy={tech} />
                ))}
              </View>
              <UpvotesView upvotes={project?.stars} />
            </View>
            <ProjectDetails
              project_url={project?.url}
              start_date={project?.start_date}
              statistics={project?.stats}
            />
          </View>
          <View style={styles.bottomContainer}>
            <UserInfoView user={project?.users[0]} />
          </View>
        </ScrollView>
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
  },
  upperContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: size.padding.small,
  },
  backContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  titleContainer: {
    flex: 4,
  },
  title: {
    fontSize: size.font.big,
    fontWeight: "500",
  },
  authorContainer: {},
  author: { fontSize: size.font.small },
  middleContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    maxHeight: "50%",
    paddingHorizontal: size.padding.small,
  },
  descriptionContainer: {
    maxWidth: "70%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginVertical: size.margin.small,
  },
  descriptionText: { fontSize: size.font.medium, fontWeight: "300" },
  detailsContainer: {},
  metadataContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: color.lighterGrey,
    borderRadius: size.borderRadius.xsmall,
    paddingHorizontal: size.padding.small,
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
