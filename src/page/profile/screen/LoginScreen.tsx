import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "../../../commons/component/DividerView";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../../commons/component/ButtonView";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../../commons/component/LoadingView";
import { color, size } from "../../../commons/style";
import Input from "../../../commons/component/InputView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLogin } from "../hook/loginHook/useLogin";
import { TextView } from "../../../commons/component/TextView";

export const LoginScreen = () => {
  const navigation: any = useNavigation();
  const signup = () => {
    navigation.navigate("MainProfile", { screen: "Signup" });
  };
  const { loading, loginErrors } = useSelector(
    (state: RootState) => state.user
  );
  const { inputs, setPassword, setUsername, setLoging, loging } = useLogin();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons name={"person-circle"} size={size.icon.xbig} />
      </View>
      <View style={styles.formContainer}>
        <Input
          callback={(txt) =>
            setUsername((prev) => ({ ...prev, username: txt, uerror: "" }))
          }
          placeholder={"Username"}
          errorMessage={inputs.uerror}
          animation={loging}
        />
        <Input
          callback={(txt) =>
            setPassword((prev) => ({ ...prev, password: txt, perror: "" }))
          }
          placeholder={"Password"}
          errorMessage={inputs.perror}
          animation={loging}
          secured={true}
        />
      </View>
      {loading === "pending" ? (
        <Loading />
      ) : (
        <>
          <Button
            text={"Sign in"}
            callback={() => {
              setLoging(true);
            }}
          />
          <View style={styles.dividerContainer}>
            <Divider />
          </View>
          <View>
            <Text>Forgot your username or password?</Text>
            <View style={styles.signupContainer}>
              <Text>New to Projectify?</Text>
              <Button
                text={"Sign up"}
                inputBackgroundColor={"white"}
                inputFontColor={color.primary}
                inputWidth={size.width.small}
                inputHeight={size.height.small}
                inputBorderWidth={size.borderWidth.small}
                otherStyles={{ marginVertical: size.margin.big }}
                callback={() => {
                  signup();
                }}
              />
            </View>
          </View>
          {loginErrors && loginErrors.map((e) => <TextView key={e} text={e} />)}
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
  titleContainer: { paddingTop: size.padding.xbig },
  formContainer: {
    marginVertical: size.margin.xbig,
    alignItems: "center",
    justifyContent: "center",
  },
  dividerContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: size.margin.xbig,
  },
  signupContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
