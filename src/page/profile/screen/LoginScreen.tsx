import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Divider } from "../../../commons/component/Divider";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../../commons/component/Button";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin, userLogin } from "../../../state/reducer/userSlice";
import { RootState } from "../../../state/store";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../../commons/component/LoadingView";
import { color } from "../../../commons/style";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading } = useSelector((state: RootState) => state.user);

  const signin = () => {
    if (username && username !== "" && password && password !== "") {
      const trimmedUsername = username.trim();
      const trimmedPassword = password.trim();
      const data: UserLogin = {
        username: trimmedUsername,
        password: trimmedPassword,
      };
      dispatch(userLogin(data));
    }
  };

  useEffect(() => {
    if (user !== undefined) {
      navigation.replace("Profile", {});
    }
  }, [user]);

  const signup = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons name={"person-circle"} size={80} />
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={color.black}
            style={styles.username}
            onChangeText={(txt) => {
              setUsername(txt);
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={color.black}
            style={styles.password}
            onChangeText={(txt) => {
              setPassword(txt);
            }}
          />
        </View>
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
    width: "100%",
    backgroundColor: color.grey,
    paddingVertical: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleContainer: {},
  title: {
    fontSize: 25,
    fontWeight: "700",
  },
  form: {
    marginVertical: 30,
  },
  inputContainer: {
    height: 40,
    width: 250,
    backgroundColor: color.white,
    marginVertical: 15,
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: color.borderGrey,
  },
  username: {
    flex: 1,
  },
  password: {
    flex: 1,
  },
  dividerContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "8%",
  },
  signupContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
