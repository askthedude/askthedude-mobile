import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { UserData } from "../model";
import { size } from "../style";

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
    paddingHorizontal: "3%",
    borderRadius: 3,
    paddingVertical: "1%",
  },
  title: { fontSize: 18, fontWeight: size.fontWeight.fourfuckinghundred },
  usernameContainer: { margin: "1%" },
  username: { fontSize: 16, fontWeight: size.fontWeight.threefuckinghundred },
  emailContainer: { margin: "1%" },
  email: { fontSize: 16, fontWeight: size.fontWeight.threefuckinghundred },
});

export default UserInfoView;
