import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { UserData } from "../model";

const UserInfoView = ({ user }: { user?: UserData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"About author"}</Text>

      <View style={styles.usernameContainer}>
        <Text style={styles.username}>
          Username: {user?.username || "user username not specified"}
        </Text>
      </View>

      <View style={styles.emailContainer}>
        <Text style={styles.username}>
          Email: {user?.email || "User email not specified"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F8F9FA",
    paddingHorizontal: "3%",
    borderRadius: 3,
    paddingVertical: "1%",
  },
  title: { fontSize: 18, fontWeight: "400" },
  usernameContainer: { margin: "1%" },
  username: { fontSize: 16, fontWeight: "300" },
  emailContainer: { margin: "1%" },
  email: { fontSize: 16, fontWeight: "300" },
});

export default UserInfoView;
