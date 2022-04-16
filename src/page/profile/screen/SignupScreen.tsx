import { View, StyleSheet } from "react-native";
import React from "react";
import { color, size } from "../../../commons/style";
import Input from "../../../commons/component/InputView";
import Button from "../../../commons/component/ButtonView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignUp } from "../hook/signupHook";
import { NavigationScreenHeader } from "../../../commons/component/NavigationScreenHeader";
import { TextView } from "../../../commons/component/TextView";

const SignupScreen = () => {
  const { inputs, setInputs, setSigningUp, signingUp } = useSignUp();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationScreenHeader text={"Sign up"} />
      <TextView text="to find collaborators and projects to contribute to." />
      <View style={styles.formContainer}>
        <Input
          placeholder={"Name"}
          callback={(txt) =>
            setInputs((prev) => ({ ...prev, name: txt, name_error: "" }))
          }
          errorMessage={inputs.name_error}
          animation={signingUp}
        />
        <Input
          placeholder={"Username"}
          callback={(txt) =>
            setInputs((prev) => ({
              ...prev,
              username: txt,
              username_error: "",
            }))
          }
          errorMessage={inputs.username_error}
          animation={signingUp}
        />
        <Input
          placeholder={"Password"}
          callback={(txt) =>
            setInputs((prev) => ({
              ...prev,
              password: txt,
              password_error: "",
            }))
          }
          errorMessage={inputs.password_error}
          animation={signingUp}
        />
        <Input
          placeholder={"email"}
          callback={(txt) =>
            setInputs((prev) => ({ ...prev, email: txt, email_error: "" }))
          }
          errorMessage={inputs.email_error}
          animation={signingUp}
        />
      </View>
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
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: size.margin.xbig,
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
