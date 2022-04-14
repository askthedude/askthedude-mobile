import { View, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { size } from "../style";
import Input from "./InputView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { filterProjects } from "../../state/reducer/projectListSlice";
import { useDispatch } from "react-redux";
import debounce from "lodash/debounce";

const DEBOUNCE_TIMEOUT = 300;

const SearchInputView = () => {
  const [textInput, setTextInput] = useState<string>("");
  const dispatch = useDispatch();
  useEffect(() => {
    delayedSearch(textInput);
  }, [textInput]);

  const delayedSearch = useCallback(
    debounce((q) => filter(q), DEBOUNCE_TIMEOUT),
    []
  );

  const filter = (q: string) => {
    dispatch(
      filterProjects({
        title: q,
      })
    );
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder={"Search"}
        callback={(text) => {
          setTextInput(text);
        }}
        containerStyle={styles.searchInput}
      />
      <TouchableOpacity
        onPress={() => delayedSearch(textInput)}
        style={styles.searchButton}
      >
        <Ionicons name="search" size={size.icon.medium} />
      </TouchableOpacity>
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
    height: size.height.small,
  },
  searchButton: {
    marginHorizontal: size.margin.medium,
  },
});

export default SearchInputView;
