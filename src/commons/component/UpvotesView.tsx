import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { UpvoteArrowView } from "./UpvoteArrowView";
import { size } from "../style";

const UpvotesView = ({
  upvotes,
  inputStyle = {},
}: {
  upvotes?: number;
  inputStyle?: any;
}) => {
  return (
    <View style={[styles.container, inputStyle]}>
      <View style={{ marginRight: 5 }}>
        <UpvoteArrowView size={15} />
      </View>
      <Text style={styles.likesContainer}>{upvotes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  likesContainer: {
    fontSize: size.font.small,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});

export default UpvotesView;
