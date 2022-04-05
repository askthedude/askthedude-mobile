import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TechnologyDeclaration } from "../model";

export const TechnologyTag = ({
  techonolgy,
}: {
  techonolgy: TechnologyDeclaration;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{techonolgy.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "blue" },
  text: { color: "white" },
});
