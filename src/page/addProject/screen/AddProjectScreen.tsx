import { Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { color } from "../../../commons/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTechnology,
  getAllTechnologiesObj,
} from "../../../state/reducer/technologySlice";
import { RootState } from "../../../state/store";
import { ScrollView } from "react-native-gesture-handler";
import { TechnologyData } from "../../../commons/model/index";
import Loading from "../../../commons/component/LoadingView";

const AddProjectScreen = () => {
  const dispatch = useDispatch();
  const {
    technologies,
    loading,
  }: { technologies: TechnologyData[]; loading: string } = useSelector(
    (state: RootState) => state.technologies
  );
  useEffect(() => {
    dispatch(filterTechnology(getAllTechnologiesObj()));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading === "pending" ? (
        <Loading />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {technologies.map((e: TechnologyData) => (
            <Text>{e.name}</Text>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundPink,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContainer: {
    flex: 1,
  },
});

export default AddProjectScreen;
