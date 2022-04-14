import { View, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { color, size } from "../style";
import Input from "./InputView";

const SearchInputView = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder={"Search"}
        callback={() => {}}
        containerStyle={styles.searchInput}
      />
      <Ionicons name="search" size={size.icon.small} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  searchInput: {
    height: size.height.big,
    marginVertical: size.margin.small,
  },
});

export default SearchInputView;
