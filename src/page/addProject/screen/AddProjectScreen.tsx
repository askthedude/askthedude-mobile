import { StyleSheet } from "react-native";
import React from "react";
import { color } from "../../../commons/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { TechnologyState } from "../../../state/reducer/technologySlice";
import { RootState } from "../../../state/store";
import Loading from "../../../commons/component/LoadingView";
import Input from "../../../commons/component/InputView";
import TitleView from "../../../commons/component/TitleView";
import Button from "../../../commons/component/ButtonView";
import { useAddProject } from "../hook/projectInputHook";
import { AddProjectState } from "../../../state/reducer/addProjectSlice";

const AddProjectScreen = () => {
  const { setAddingProject, setInputs, inputs, addingProject } =
    useAddProject();

  const {
    technologies, //todo: use this array for tech tags
    addProject,
  }: { technologies: TechnologyState; addProject: AddProjectState } =
    useSelector((state: RootState) => state);

  return (
    <SafeAreaView style={styles.container}>
      {addProject.loading === "pending" ? (
        <Loading />
      ) : (
        <>
          <TitleView text={"Add new rockstar project"} />
          <Input
            placeholder={"name"}
            callback={(txt) =>
              setInputs((prev: any) => ({ ...prev, name: txt }))
            }
            errorMessage={inputs.name_error}
            animation={addingProject}
          />
          <Input
            placeholder={"Description"}
            callback={(txt) => {
              setInputs((prev: any) => ({ ...prev, description: txt }));
            }}
            containerStyle={{ height: 120 }}
            errorMessage={inputs.description_error}
            animation={addingProject}
          />
          <Input
            placeholder={"Start date"}
            callback={(txt) => {
              setInputs((prev: any) => ({ ...prev, start_date: txt }));
            }}
            errorMessage={inputs.start_date_error}
            animation={addingProject}
          />
          <Input
            placeholder={"github_url"}
            callback={(txt) => {
              setInputs((prev: any) => ({ ...prev, github_url: txt }));
            }}
            errorMessage={inputs.github_url_error}
            animation={addingProject}
          />
          <Input
            placeholder={"url"}
            callback={(txt) => {
              setInputs((prev: any) => ({ ...prev, url: txt }));
            }}
            errorMessage={inputs.url_error}
            animation={addingProject}
          />
          {/* <ScrollView></ScrollView> */}
          {/* <View style={styles.scrollViewContainer}>
            {technologies.map((e: TechnologyData) => (
              <Text>{e.id}</Text>
            ))}
          </View> */}
          <Button
            callback={() => {
              setAddingProject(true);
            }}
            text={"Create project"}
          />
          {addProject.loading === "succeeded" ? (
            <TitleView text={"Succesfully added project"} />
          ) : addProject.loading === "failed" ? (
            <TitleView text={"Failed to added project"} />
          ) : null}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundPink,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  scrollViewContainer: {
    flex: 1,
  },
});

export default AddProjectScreen;
