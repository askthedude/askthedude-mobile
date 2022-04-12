import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { color, size } from "../../../commons/style";
import Input from "../../../commons/component/Input";
import Button from "../../../commons/component/Button";
import { useDispatch } from "react-redux";
import { UserSignup, userSignup } from "../../../state/reducer/userSlice";
import { validateEmail } from "../../../commons/utils/validation";

const SignupScreen = () => {
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

  return (
    <View style={styles.container}>
      <Input
        placeholder={"Name"}
        callback={(txt) => setInputs((prev) => ({ ...prev, name: txt }))}
        errorMessage={inputs.name_error}
      />
      <Input
        placeholder={"Username"}
        callback={(txt) => setInputs((prev) => ({ ...prev, username: txt }))}
        errorMessage={inputs.username_error}
      />
      <Input
        placeholder={"Password"}
        callback={(txt) => setInputs((prev) => ({ ...prev, password: txt }))}
        errorMessage={inputs.password_error}
      />
      <Input
        placeholder={"email"}
        callback={(txt) => setInputs((prev) => ({ ...prev, email: txt }))}
        errorMessage={inputs.email_error}
      />
      <Button
        callback={() => {
          signup(inputs);
        }}
        text={"Sign up"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundPink,
    paddingVertical: size.padding.medium,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default SignupScreen;
