import { StyleSheet, View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { color, size } from "../../../commons/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { TechnologyState } from "../../../state/reducer/technologySlice";
import { RootState } from "../../../state/store";
import Loading from "../../../commons/component/LoadingView";
import Input from "../../../commons/component/InputView";
import TitleView from "../../../commons/component/TitleView";
import Button from "../../../commons/component/ButtonView";
import { AddProjectState } from "../../../state/reducer/addProjectSlice";
import { PicklistView } from "../../../commons/component/PicklistVIew";
import { AddProjectContext } from "../context";

const AddProjectScreen = () => {
  const { setAddingProject, setInputs, inputs, addingProject } =
    useContext(AddProjectContext);

  const {
    technologies,
    addProject,
  }: { technologies: TechnologyState; addProject: AddProjectState } =
    useSelector((state: RootState) => state);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleTechnologyTag = (id: number) => {
    const chosenTechnologyIds = inputs.technology_ids;
    if (chosenTechnologyIds) {
      const idx = chosenTechnologyIds.indexOf(id);
      if (idx == -1) {
        setInputs((prev: any) => ({
          ...prev,
          technology_ids: [...inputs.technology_ids, id],
          technology_ids_error: "",
        }));
      } else {
        setInputs((prev: any) => ({
          ...prev,
          technology_ids: [
            ...inputs.technology_ids.filter((_: any, i: number) => i !== idx),
          ],
        }));
      }
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, modalVisible ? styles.dimmedColor : {}]}
    >
      {addProject.loading === "pending" ? (
        <Loading />
      ) : (
        <View style={styles.formWrapper}>
          <TitleView
            text={"Add new rockstar project"}
            inputStyle={styles.titleContainer}
          />
          <Input
            placeholder={"name"}
            callback={(txt) =>
              setInputs((prev: any) => ({ ...prev, name: txt, name_error: "" }))
            }
            errorMessage={inputs.name_error}
            animation={addingProject}
          />
          <Input
            placeholder={"Description"}
            callback={(txt) => {
              setInputs((prev: any) => ({
                ...prev,
                description: txt,
                description_error: "",
              }));
            }}
            containerStyle={{ height: size.height.xbig }}
            errorMessage={inputs.description_error}
            animation={addingProject}
          />
          <Input
            placeholder={"Start date"}
            callback={(txt) => {
              setInputs((prev: any) => ({
                ...prev,
                start_date: txt,
                start_date_error: "",
              }));
            }}
            errorMessage={inputs.start_date_error}
            animation={addingProject}
          />
          <Input
            placeholder={"github_url"}
            callback={(txt) => {
              setInputs((prev: any) => ({
                ...prev,
                github_url: txt,
                github_url_error: "",
              }));
            }}
            errorMessage={inputs.github_url_error}
            animation={addingProject}
          />
          <Input
            placeholder={"url"}
            callback={(txt) => {
              setInputs((prev: any) => ({ ...prev, url: txt, url_error: "" }));
            }}
            errorMessage={inputs.url_error}
            animation={addingProject}
          />
          <Text>Press relevant technology tags</Text>
          <View style={styles.tagsWrapper}>
            <PicklistView
              tags={technologies.technologies}
              errorMessage={inputs.technology_ids_error}
              isSelected={(id: number) =>
                inputs.technology_ids && inputs.technology_ids.includes(id)
              }
              toggleSelection={(id) => toggleTechnologyTag(id)}
              toggleAddition={() => setModalVisible((prev) => !prev)}
              adding={modalVisible}
            />
          </View>
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
        </View>
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
  titleContainer: {
    marginVertical: size.margin.xbig,
  },
  scrollViewContainer: {
    flex: 1,
  },
  formWrapper: {
    width: "100%",
    alignItems: "center",
  },
  tagsWrapper: {
    width: size.width.bigplus,
    maxHeight: size.height.xxbig,
    borderRadius: size.borderRadius.medium,
    backgroundColor: color.white,
    marginVertical: size.margin.medium,
    marginBottom: size.margin.xbig,
  },
  dimmedColor: {
    backgroundColor: color.dimBackground.color,
    opacity: color.dimBackground.opacity,
  },
});

export default AddProjectScreen;
