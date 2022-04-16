import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { size } from "../style";
import { StatisticsData } from "../model/index";

export const SeenView = ({ statistics }: { statistics?: StatisticsData }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="eye-outline" size={size.icon.small} />
      <Text style={styles.seenFrequency}>{statistics?.seen_frequency}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  seenFrequency: { fontSize: size.font.medium },
});
