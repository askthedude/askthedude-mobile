import { Alert } from "react-native";
export const validateInputs = (inputs: any, setInputs: any) => {
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
    Alert.alert("Please choose at least one technology");
    valid = false;
  } else {
    setInputs((prev: any) => ({ ...prev, technology_ids_error: "" }));
  }
  return valid;
};
