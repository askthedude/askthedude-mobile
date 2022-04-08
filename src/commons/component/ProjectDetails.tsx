import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatisticsData } from "../model";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProjectDetails = ({
  project_url,
  start_date,
  statistics,
}: {
  project_url: string;
  start_date: string;
  statistics: StatisticsData;
}) => {
  return (
    <View style={styles.container}>
      <Text>URL: {project_url}</Text>
      <Text>Start date: {start_date}</Text>
      <View style={styles.statisticsContainer}>
        <Ionicons name="eye-outline" size={24} />
        <Text style={styles.seenFrequency}>{statistics.seen_frequency}</Text>
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
    marginVertical: "2%",
    paddingVertical: "2%",
  },
  statisticsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  seenFrequency: { fontSize: 17 },
});

export default ProjectDetails;
