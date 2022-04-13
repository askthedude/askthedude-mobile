import { Text, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { color } from "../../../commons/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTechnology,
  getAllTechnologiesObj,
} from "../../../state/reducer/technologySlice";
import { RootState } from "../../../state/store";
import { TechnologyData } from "../../../commons/model/index";
import Loading from "../../../commons/component/LoadingView";
import Input from "../../../commons/component/InputView";
import TitleView from "../../../commons/component/TitleView";
import Button from "../../../commons/component/ButtonView";
import { AddProject, addProject } from "../../../state/reducer/addProjectSlice";

const AddProjectScreen = () => {
  const dispatch = useDispatch();
  const { technologies }: { technologies: TechnologyData[]; loading: string } =
    useSelector((state: RootState) => state.technologies);
  const { loading }: { loading: string } = useSelector(
    (state: RootState) => state.addProject
  );
  const { token }: { token: string | undefined } = useSelector(
    (state: RootState) => state.user
  );
  useEffect(() => {
    dispatch(filterTechnology(getAllTechnologiesObj()));
  }, []);

  const [inputs, setInputs] = useState<any>({
    name: "",
    name_error: "",
    description: "",
    description_error: "",
    start_date: "",
    start_date_error: "",
    github_url: "",
    github_url_error: "",
    url: "",
    url_error: "",
    technology_ids: [1],
    technology_ids_error: "",
  });

  const addProjectCallback = () => {
    let valid = true;
    if (inputs.name === "") {
      setInputs((prev: any) => ({ ...prev, name_error: "Please input Name" }));
      valid = false;
    } else {
      setInputs((prev: any) => ({ ...prev, name_error: "" }));
    }
    if (inputs.description === "") {
      setInputs((prev: any) => ({
        ...prev,
        description_error: "Please input Description",
      }));
      valid = false;
    } else {
      setInputs((prev: any) => ({ ...prev, description_error: "" }));
    }
    if (inputs.start_date === "") {
      setInputs((prev: any) => ({
        ...prev,
        start_date_error: "Please input Start date",
      }));
      valid = false;
    } else {
      setInputs((prev: any) => ({ ...prev, start_date_error: "" }));
    }
    if (inputs.github_url === "") {
      setInputs((prev: any) => ({
        ...prev,
        github_url_error: "Invalid URL",
      }));
      valid = false;
    } else {
      setInputs((prev: any) => ({ ...prev, github_url_error: "" }));
    }
    if (inputs.url === "") {
      setInputs((prev: any) => ({
        ...prev,
        url_error: "Invalid URL",
      }));
      valid = false;
    } else {
      setInputs((prev: any) => ({ ...prev, url_error: "" }));
    }
    if (inputs.technology_ids.length == 0) {
      setInputs((prev: any) => ({
        ...prev,
        technology_ids_error: "Invalid technology ids",
      }));
      valid = false;
    } else {
      setInputs((prev: any) => ({ ...prev, technology_ids_error: "" }));
    }
    if (valid) {
      const proj = {
        title: inputs.name,
        description: inputs.description,
        start_date: inputs.start_date,
        github_url: inputs.github_url,
        technology_ids: inputs.technology_ids,
        url: inputs.url,
        stars: 1,
      } as AddProject;
      dispatch(addProject({ project: proj, token }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading === "pending" ? (
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
          />
          <Input
            placeholder={"Description"}
            callback={(txt) => {
              setInputs((prev: any) => ({ ...prev, description: txt }));
            }}
            containerStyle={{ height: 120 }}
            errorMessage={inputs.description_error}
          />
          <Input
            placeholder={"Start date"}
            callback={(txt) => {
              setInputs((prev: any) => ({ ...prev, start_date: txt }));
            }}
            errorMessage={inputs.start_date_error}
          />
          <Input
            placeholder={"github_url"}
            callback={(txt) => {
              setInputs((prev: any) => ({ ...prev, github_url: txt }));
            }}
            errorMessage={inputs.github_url_error}
          />
          <Input
            placeholder={"url"}
            callback={(txt) => {
              setInputs((prev: any) => ({ ...prev, url: txt }));
            }}
            errorMessage={inputs.url_error}
          />
          {/* <ScrollView></ScrollView> */}
          {/* <View style={styles.scrollViewContainer}>
            {technologies.map((e: TechnologyData) => (
              <Text>{e.id}</Text>
            ))}
          </View> */}
          <Button
            callback={() => {
              addProjectCallback();
            }}
            text={"Create project"}
          />
          {loading === "succeeded" ? (
            <TitleView text={"Succesfully added project"} />
          ) : loading === "failed" ? (
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
