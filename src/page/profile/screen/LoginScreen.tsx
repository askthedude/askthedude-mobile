import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "../../../commons/component/DividerView";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../../commons/component/ButtonView";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin, userLogin } from "../../../state/reducer/userSlice";
import { RootState } from "../../../state/store";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../../commons/component/LoadingView";
import { color, size } from "../../../commons/style";
import Input from "../../../commons/component/InputView";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const [{ username, uerror }, setUsername] = useState({
    username: "",
    uerror: "",
  });
  const [{ password, perror }, setPassword] = useState({
    password: "",
    perror: "",
  });
  const { loading } = useSelector((state: RootState) => state.user);

  const signin = () => {
    if (username && username !== "" && password && password !== "") {
      const trimmedUsername = username.trim();
      const trimmedPassword = password.trim();
      const data: UserLogin = {
        username: trimmedUsername,
        password: trimmedPassword,
      };
      dispatch(userLogin(data));
    } else {
      if (!username || username === "") {
        setUsername((prev) => ({ ...prev, uerror: "Please fill in username" }));
      } else {
        setUsername((prev) => ({ ...prev, uerror: "" }));
      }
      if (!password || password === "") {
        setPassword((prev) => ({ ...prev, perror: "Please fill in username" }));
      } else {
        setPassword((prev) => ({ ...prev, perror: "" }));
      }
    }
  };

  const signup = () => {
    navigation.navigate("Signup", {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons name={"person-circle"} size={size.icon.xbig} />
      </View>
      <View style={styles.form}>
        <Input
          callback={(txt) =>
            setUsername((prev) => ({ ...prev, username: txt }))
          }
          placeholder={"Username"}
          errorMessage={uerror}
        />
        <Input
          callback={(txt) =>
            setPassword((prev) => ({ ...prev, password: txt }))
          }
          placeholder={"Password"}
          errorMessage={perror}
        />
      </View>
      {loading === "pending" ? (
        <Loading />
      ) : (
        <>
          <Button
            text={"Sign in"}
            callback={() => {
              signin();
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
                inputWidth={120}
                inputHeight={35}
                inputBorderWidth={1}
                otherStyles={{ marginVertical: 20 }}
                callback={() => {
                  signup();
                }}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundPink,
    paddingVertical: size.padding.xxbig,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleContainer: {},
  title: {
    fontSize: size.font.big,
    fontWeight: "700",
  },
  form: {
    marginVertical: size.margin.xbig,
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
