import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, AddProject } from "../../../state/reducer/addProjectSlice";
import {
  filterTechnology,
  getAllTechnologiesObj,
} from "../../../state/reducer/technologySlice";
import { RootState } from "../../../state/store";
import { validateInputs } from "./helper";

export interface IAddProjectContext {
  setAddingProject: Dispatch<SetStateAction<boolean>>;
  setInputs: any;
  inputs: any;
  addingProject: boolean;
}

export const AddProjectContext = React.createContext<IAddProjectContext>({
  setAddingProject: () => {},
  setInputs: () => {},
  inputs: [],
  addingProject: false,
});

export const AppProjectContextProvider = ({ children }: { children: any }) => {
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
    technology_ids: [],
    technology_ids_error: "",
  });
  const { jwttoken }: { jwttoken: string | undefined } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterTechnology(getAllTechnologiesObj()));
  }, []);

  useEffect(() => {
    if (addingProject) {
      const valid: boolean = validateInputs(inputs, setInputs);
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
        dispatch(addProject({ project: proj, token: jwttoken }));
      }
      setAddingProject(false);
    }
  }, [addingProject]);

  return (
    <AddProjectContext.Provider
      value={{
        setAddingProject,
        setInputs,
        inputs,
        addingProject,
      }}
    >
      {children}
    </AddProjectContext.Provider>
  );
};
