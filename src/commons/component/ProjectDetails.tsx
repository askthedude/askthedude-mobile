import { View, Text, StyleSheet, Linking, Alert } from "react-native";
import React from "react";
import { StatisticsData } from "../model";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Link } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProjectDetails = ({
  project_url,
  start_date,
  statistics,
}: {
  project_url: string;
  start_date: string;
  statistics: StatisticsData;
}) => {
  const visitUrl = async (url: string) => {
    if (await Linking.canOpenURL(url)) {
      Linking.openURL(url);
    } else {
      // edge condition when cant open a url
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.urlContainer}
        onPress={() => {
          visitUrl(project_url);
        }}
      >
        <Text style={styles.urlText}>Visit project page</Text>
      </TouchableOpacity>
      <View style={styles.date_container}>
        <Text>Start date: {start_date}</Text>
      </View>
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
  urlContainer: {
    maxWidth: "45%",
    height: 40,
    padding: 4,
    backgroundColor: "#1484D7",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  date_container: {
    marginVertical: 8,
  },
  statisticsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  urlText: {
    fontSize: 15,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
  seenFrequency: { fontSize: 17 },
});

export default ProjectDetails;
