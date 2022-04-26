import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleView from "../../../commons/component/TitleView";
import { PicklistView } from "../../../commons/component/PicklistVIew";
import { color, size } from "../../../commons/style";
import { TechnologyData } from "../../../commons/model";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import {
  filterTechnology,
  getAllTechnologiesObj,
} from "../../../state/reducer/technologySlice";
import { TextView } from "../../../commons/component/TextView";

export const FillInterestsScreen = () => {
  const technologies: { technologies: TechnologyData[] } = useSelector(
    (state: RootState) => state.technologies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterTechnology(getAllTechnologiesObj()));
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      <TitleView text="Recommendations" />
      <TextView
        text="Fill in the technologies you are interested in. Platform will list and later notify you if matching projects come up."
        inputStyle={styles.textContainer}
      />
      <View style={styles.picklistWrapper}>
        <PicklistView
          tags={technologies.technologies}
          isSelected={() => false}
          toggleSelection={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewcontainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: size.padding.medium,
    backgroundColor: color.backgroundPink,
  },
  textContainer: {
    paddingHorizontal: size.padding.medium,
    marginVertical: size.margin.big,
  },
  picklistWrapper: {
    width: "90%",
    backgroundColor: color.white,
  },
});
