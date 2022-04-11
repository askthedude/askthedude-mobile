import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const navigation: any = useNavigation();
  useEffect(() => {
    if (user === undefined) {
      navigation.replace("Login", {});
    }
  }, [user]);
  return (
    <View style={styles.container}>
      <View style={styles.userDataContainer}>
        <Text>Hello, {user?.name}</Text>
        <Text>Username: {user?.username}</Text>
        <Text>Linkedin: {user?.linkedin_url}</Text>
        <Text>Github: {user?.github_url}</Text>
      </View>
      <View style={styles.userProjectsDataContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userDataContainer: {
    flex: 1,
  },
  userProjectsDataContainer: {},
});
