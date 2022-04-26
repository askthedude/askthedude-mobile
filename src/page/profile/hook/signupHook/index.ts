import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValueSecure } from "../../../../commons/storage";
import { validateEmail } from "../../../../commons/utils/validation";
import { DEVICE_UNIQUE_IDENTIFIER_KEY } from "../../../../constants";
import { userSignup, UserSignup } from "../../../../state/reducer/userSlice";
import { RootState } from "../../../../state/store";

export const useSignUp = () => {
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
  const messages = useSelector((root: RootState) => root.user.signupErrors);

  useEffect(() => {
    if (signingUp) {
      signup(inputs);
      setSigningUp(false);
    }
  }, [signingUp]);

  const dispatch = useDispatch();

  const signup = async (inputs: any) => {
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
      let token = await getValueSecure(DEVICE_UNIQUE_IDENTIFIER_KEY);

      const signupuser = {
        name: inputs.name,
        username: inputs.username,
        password: inputs.password,
        email: inputs.email,
        github_url: inputs.github_url,
        linkedin_url: inputs.linkedin_url,
        identifier_token: token,
      } as UserSignup;
      dispatch(userSignup(signupuser));
    }
  };

  return { inputs, setInputs, setSigningUp, signingUp, messages };
};
