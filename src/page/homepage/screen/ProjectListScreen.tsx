import { StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { PartialProjectData } from "../../../commons/model";
import { PartialProjectInfoView } from "../../../commons/component/PartialProjectView";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { filterProjects } from "../../../state/reducer/projectListSlice";
import { RootState } from "../../../state/store";
import Loading from "../../../commons/component/LoadingView";
import { color, size } from "../../../commons/style";
import { SafeAreaView } from "react-native-safe-area-context";

export const ProjectListScreen = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const {
    loading,
    projects,
  }: { loading: string; projects: PartialProjectData[] } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    dispatch(filterProjects({}));
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      {loading === "pending" ? (
        <Loading />
      ) : (
        <ScrollView style={styles.container}>
          {projects.map((project) => (
            <PartialProjectInfoView
              key={project.id}
              project={project}
              onClickCallback={() => {
                navigation.navigate("Project", { projectId: project.id });
              }}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.backgroundPink,
  },
  container: {
    flex: 1,
    padding: size.padding.xsmall,
  },
});
