import { View, StyleSheet } from "react-native";
import React from "react";
import { color, size } from "../../../commons/style";
import Input from "../../../commons/component/InputView";
import Button from "../../../commons/component/ButtonView";
import TitleView from "../../../commons/component/TitleView";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignUp } from "../hook/signupHook";

const SignupScreen = () => {
  const navigation = useNavigation();
  const { inputs, setInputs, setSigningUp } = useSignUp();
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
          setSigningUp(true);
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
