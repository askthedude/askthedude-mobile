import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { TechnologyTagView } from "../../../commons/component/TechnologyTagView";
import UpvotesView from "../../../commons/component/UpvotesView";
import UserInfoView from "../../../commons/component/UserInfoView";
import ProjectDetails from "../../../commons/component/ProjectDetails";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { getProjectById } from "../../../state/reducer/projectSlice";
import Loading from "../../../commons/component/LoadingView";

export const ProjectScreen = () => {
  const route: any = useRoute();
  const { projectId } = route.params;
  const dispatch = useDispatch();
  const { project, loading } = useSelector((state: RootState) => state.project);

  useEffect(() => {
    dispatch(getProjectById(projectId));
  }, [projectId]);

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      {loading === "pending" ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <Text style={styles.title}>{project?.title}</Text>
            <Text style={styles.author}>
              Posted by: {project?.users[0].username}
            </Text>
          </View>

          <View style={styles.middleContainer}>
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
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewcontainer: {
    flex: 1,
    backgroundColor: "#DAE0E6",
  },
  container: {
    flex: 1,
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
    alignItems: "flex-start",
    maxHeight: "50%",
    paddingHorizontal: "2%",
  },
  descriptionContainer: {
    maxWidth: "70%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginVertical: "1%",
  },
  descriptionText: { fontSize: 17, fontWeight: "300" },
  detailsContainer: {},
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
    paddingVertical: "1%",
  },
  bottomContainer: {
    paddingHorizontal: "2%",
  },
});
