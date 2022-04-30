import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { TechnologyTagView } from "../../../commons/component/TechnologyTagView";
import UpvotesView from "../../../commons/component/UpvotesView";
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
import { AddSubscriptionModal } from "../../../commons/component/AddSubscriptionModal";
import Button from "../../../commons/component/ButtonView";

export const ProjectScreen = () => {
  const route: any = useRoute();
  const { projectId } = route.params;
  const dispatch = useDispatch();
  const { project, loading } = useSelector((state: RootState) => state.project);
  const [modalVisible, setModalVisible] = useState(false);
  const apiCommunication = async () => {
    await Promise.all([dispatch(getProjectById(projectId))]);
    await Promise.all([
      dispatch(updateProjectStats(incrementSeenFrequencyObject(projectId))),
    ]);
  };

  useEffect(() => {
    apiCommunication();
  }, [projectId]);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      {loading === "pending" ? (
        <Loading />
      ) : (
        <View style={[{ flex: 1 }, modalVisible ? styles.dimmedColor : {}]}>
          <NavigationScreenHeader
            text={"Project"}
            tinctColor={
              modalVisible ? styles.dimmedColor.backgroundColor : color.primary
            }
            textStyles={
              modalVisible ? { color: styles.dimmedColor.backgroundColor } : {}
            }
          />
          <ScrollView contentContainerStyle={[styles.container]}>
            <View
              style={[
                styles.upperContainer,
                modalVisible ? styles.dimmedOpacity : {},
              ]}
            >
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
              <View style={styles.subscribeWrapper}>
                <TextView
                  text={
                    "Subscribe to project's up to date activities, to get the information"
                  }
                  textStyle={{ fontSize: size.font.medium }}
                />
                <Button callback={() => toggleModal()} text={"Subscribe"} />
              </View>
            </View>
          </ScrollView>
          {modalVisible ? (
            <AddSubscriptionModal
              closeCallback={() => toggleModal()}
              projectId={projectId}
            />
          ) : null}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewcontainer: {
    flex: 1,
    backgroundColor: color.backgroundPink,
  },
  dimmedColor: {
    backgroundColor: color.dimBackground.color,
  },
  dimmedOpacity: {
    opacity: color.dimBackground.opacity,
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
    shadowColor: color.shadowColor,
    shadowOffset: { width: size.width.zero, height: size.height.one },
    shadowOpacity: color.dimBackground.opacity,
    elevation: 1,
  },
  descriptionContainer: {
    maxWidth: "70%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginVertical: size.margin.medium,
  },
  descriptionText: {
    fontSize: size.font.medium,
    fontWeight: size.fontWeight.threefuckinghundred,
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
  subscribeWrapper: {
    justifyContent: "center",
    alignItems: "center",
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
