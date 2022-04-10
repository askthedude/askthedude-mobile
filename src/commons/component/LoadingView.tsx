import { View, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";

const Loading = ({ iconSize = "large" }: { iconSize?: "large" | "small" }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={iconSize || "large"} />
    </View>
  );
};

export default Loading;
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
