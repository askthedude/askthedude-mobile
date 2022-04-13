import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { validateEmail } from "../../../commons/utils/validation";
import { userSignup, UserSignup } from "../../../state/reducer/userSlice";

export const useSignUpInputs = () => {
  const [signingUp, setSigningUp] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    name_error: "",
    username: "",
    username_error: "",
    password: "",
    password_error: "",
    email: "",
    email_error: "",
  });

  useEffect(() => {
    if (signingUp) {
      signup(inputs);
      setSigningUp(false);
    }
  }, [signingUp]);

  const dispatch = useDispatch();

  const signup = (inputs: any) => {
    let valid = true;
    if (inputs.name === "") {
      setInputs((prev) => ({ ...prev, name_error: "Please input Name" }));
      valid = false;
    } else {
      setInputs((prev) => ({ ...prev, name_error: "" }));
    }
    if (inputs.username === "") {
      setInputs((prev) => ({
        ...prev,
        username_error: "Please input Username",
      }));
      valid = false;
    } else {
      setInputs((prev) => ({ ...prev, username_error: "" }));
    }
    if (inputs.password === "") {
      setInputs((prev) => ({
        ...prev,
        password_error: "Please input Password",
      }));
      valid = false;
    } else {
      setInputs((prev) => ({ ...prev, password_error: "" }));
    }
    if (inputs.email === "" || !validateEmail(inputs.email)) {
      setInputs((prev) => ({ ...prev, email_error: "Invalid Email" }));
      valid = false;
    } else {
      setInputs((prev) => ({ ...prev, email_error: "" }));
    }
    if (valid) {
      const signupuser = {
        name: inputs.name,
        username: inputs.username,
        password: inputs.password,
        email: inputs.email,
        github_url: inputs.github_url,
        linkedin_url: inputs.linkedin_url,
      } as UserSignup;
      dispatch(userSignup(signupuser));
    }
  };

  return { inputs, setInputs, setSigningUp };
};
