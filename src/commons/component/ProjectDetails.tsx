import { View, Text, StyleSheet, Linking, Alert } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color, size } from "../style";

const ProjectDetails = ({
  project_url,
  start_date,
}: {
  project_url?: string;
  start_date?: string;
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
          visitUrl(project_url || "Project Url not specified");
        }}
      >
        <Text style={styles.urlText}>Visit project page</Text>
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <View style={styles.date_container}>
          <Text>Start date: {start_date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: size.padding.small,
    borderRadius: size.borderRadius.xsmall,
    marginVertical: size.margin.medium,
    paddingVertical: size.padding.small,
  },
  urlContainer: {
    height: size.height.medium,
    padding: size.padding.xsmall,
    backgroundColor: color.primary,
    borderRadius: size.borderRadius.small,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date_container: {
    marginVertical: size.margin.medium,
  },

  urlText: {
    fontSize: size.font.small,
    color: color.white,
    fontWeight: size.fontWeight.fourfuckinghundred,
    textAlign: "center",
  },
});

export default ProjectDetails;
