import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProject,
  AddProject,
} from "../../../../state/reducer/addProjectSlice";
import {
  filterTechnology,
  getAllTechnologiesObj,
} from "../../../../state/reducer/technologySlice";
import { RootState } from "../../../../state/store";

export const useAddProject = () => {
  const [addingProject, setAddingProject] = useState(false);
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
  const { token }: { token: string | undefined } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (addingProject) {
      const valid = validateInputs();
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
      setAddingProject(false);
    }
  }, [addingProject]);

  useEffect(() => {
    dispatch(filterTechnology(getAllTechnologiesObj()));
  }, []);

  const validateInputs = () => {
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
    return valid;
  };

  return {
    inputs,
    setAddingProject,
    setInputs,
  };
};
