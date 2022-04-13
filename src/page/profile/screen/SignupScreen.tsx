import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { color, size } from "../../../commons/style";
import Input from "../../../commons/component/InputView";
import Button from "../../../commons/component/ButtonView";
import { useDispatch } from "react-redux";
import { UserSignup, userSignup } from "../../../state/reducer/userSlice";
import { validateEmail } from "../../../commons/utils/validation";
import TitleView from "../../../commons/component/TitleView";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const navigation = useNavigation();
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
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.backContainer}>
          <HeaderBackButton onPress={() => navigation.goBack()} />
        </View>
        <TitleView
          text={"Sign up to find collaborators and projects to contribute to."}
          inputStyle={styles.titleContainer}
        />
      </View>
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
  upperContainer: {
    width: "100%",
    flexDirection: "row",
    padding: size.padding.small,
    justifyContent: "center",
    alignItems: "center",
  },
  backContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 10,
    width: "100%",
    padding: size.padding.small,
  },
});

export default SignupScreen;
