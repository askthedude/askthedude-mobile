import { StyleSheet } from "react-native";
import React from "react";
import { PartialProjectData } from "../../../commons/model";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import Loading from "../../../commons/component/LoadingView";
import { color, size } from "../../../commons/style";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInputView from "../../../commons/component/SearchInputView";
import { ProjectListView } from "../../../commons/component/ProjectListView";

export const ProjectListScreen = () => {
  const {
    loading,
    projects,
  }: { loading: string; projects: PartialProjectData[] } = useSelector(
    (state: RootState) => state.projects
  );

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      <SearchInputView />
      {loading === "pending" ? (
        <Loading />
      ) : (
        <ProjectListView projects={projects} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewcontainer: {
    flex: 1,
    backgroundColor: color.backgroundPink,
    width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    padding: size.padding.xsmall,
  },
  contentContainer: {
    width: "100%",
  },
});
