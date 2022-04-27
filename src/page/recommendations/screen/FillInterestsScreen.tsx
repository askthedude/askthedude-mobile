import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
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
import {
  addInterestedTechnologyInLocalStorage,
  removeInterestedTechnologyInLocalStorage,
} from "../../../state/reducer/technologyInterestsSlice";
import Loading from "../../../commons/component/LoadingView";

export const FillInterestsScreen = () => {
  const technologies: { technologies: TechnologyData[] } = useSelector(
    (state: RootState) => state.technologies
  );

  const interestedtechnologies = useSelector(
    (state: RootState) => state.interestedTechnologies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterTechnology(getAllTechnologiesObj()));
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaViewcontainer,
        modalVisible ? styles.dimmedColor : {},
      ]}
    >
      <TitleView text="Recommendations" />
      <TextView
        text="Fill in the technologies you are interested in. Platform will list and later notify you if matching projects come up."
        inputStyle={styles.textContainer}
      />
      <View style={styles.picklistWrapper}>
        {interestedtechnologies.additionLoading === "pending" ? (
          <Loading />
        ) : (
          <PicklistView
            tags={technologies.technologies}
            isSelected={(id: number) => {
              return (
                interestedtechnologies.technologies &&
                interestedtechnologies.technologies
                  .map((e) => e.id)
                  .includes(id)
              );
            }}
            toggleSelection={(id: number) => {
              if (interestedtechnologies.technologies.find((e) => e.id == id)) {
                dispatch(removeInterestedTechnologyInLocalStorage(id));
              } else {
                const found = technologies.technologies.filter(
                  (e) => e.id == id
                )[0];
                dispatch(addInterestedTechnologyInLocalStorage(found));
              }
            }}
            toggleAddition={() => setModalVisible((prev) => !prev)}
            adding={modalVisible}
          />
        )}
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
  dimmedColor: {
    backgroundColor: color.dimBackground.color,
  },
  dimmedOpacity: {
    opacity: color.dimBackground.opacity,
  },
});
