import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { RootState } from "../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { color, size } from "../../../commons/style";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../../commons/component/ButtonView";
import { userSlice } from "../../../state/reducer/userSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  filterUserProjects,
  getFilterProjectObjectForUser,
} from "../../../state/reducer/userProjectsListSlice";
import { ProjectListView } from "../../../commons/component/ProjectListView";
import TitleView from "../../../commons/component/TitleView";
import Loading from "../../../commons/component/LoadingView";

export const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const { projects, loading: projectsLoading } = useSelector(
    (state: RootState) => state.userProjects
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.id !== undefined) {
      dispatch(filterUserProjects(getFilterProjectObjectForUser(user.id)));
    }
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      {user === undefined ? null : (
        <>
          <Ionicons name={"person-outline"} size={size.icon.big} />
          <View style={styles.userDataContainer}>
            <Text style={styles.mainText}>Hello, {user?.name}</Text>
            <Text style={styles.secondaryText}>Username: {user?.username}</Text>
            <Text style={styles.secondaryText}>
              Linkedin: {user?.linkedin_url}
            </Text>
            <Text style={styles.secondaryText}>Github: {user?.github_url}</Text>
          </View>
          <Button
            callback={() => {
              dispatch(userSlice.actions.signout());
            }}
            text={"Sign out"}
          />
          {projectsLoading === "pending" ? (
            <Loading />
          ) : (
            <View style={styles.userProjectsDataContainer}>
              <TitleView text={"Your projects"} />
              <ProjectListView projects={projects} />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: color.backgroundPink,
    padding: size.padding.medium,
  },
  mainText: {
    color: color.black,
    fontSize: size.font.big,
    fontWeight: "300",
  },
  secondaryText: {
    fontSize: size.font.medium,
    fontWeight: "300",
  },
  userDataContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: size.margin.big,
  },
  userProjectsDataContainer: {
    flex: 1,
    marginVertical: size.margin.big,
    width: "100%",
  },
});
