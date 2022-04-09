import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { PartialProjectData } from "../../commons/model";
import { PartialProjectInfoView } from "../../commons/component/PartialProjectView";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { filterProjects } from "../../state/reducer/projectsSlice";
import { RootState } from "../../state/store";

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
  }, []);

  // const projects: PartialProjectData[] = [
  //   {
  //     id: 1,
  //     title: "spring",
  //     description: "something cool",
  //     stars: 1,
  //     is_active: true,
  //     url: "smth url",
  //     start_date: "date",
  //     technologies: [
  //       { title: "Java", id: 1, resource_url: "ad", is_hot: false },
  //     ],
  //     authors: ["sakana"],
  //   },
  //   {
  //     id: 2,
  //     title: "asd",
  //     description:
  //       "sometasdasdasdadadsasdasdasdasdasdasdasdasdasdasdasdadshing cool",
  //     stars: 1,
  //     is_active: true,
  //     url: "smth url",
  //     start_date: "date",
  //     technologies: [
  //       { title: "Java", id: 1, resource_url: "ad", is_hot: false },
  //       { title: "Java", id: 2, resource_url: "ad", is_hot: false },
  //     ],
  //     authors: ["sakana"],
  //   },
  //   {
  //     id: 3,
  //     title: "qwe",
  //     description: "something cool",
  //     stars: 1,
  //     is_active: true,
  //     url: "smth url",
  //     start_date: "date",
  //     technologies: [
  //       { title: "Java", id: 1, resource_url: "ad", is_hot: false },
  //     ],
  //     authors: ["sakana"],
  //   },
  // ];

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#DAE0E6",
    padding: 5,
  },
});
