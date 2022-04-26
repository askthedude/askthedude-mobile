import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleView from "../../commons/component/TitleView";
import { color, size } from "../../commons/style";
import { PicklistView } from "../../commons/component/PicklistVIew";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { TechnologyData } from "../../commons/model";

export const Recommendations = () => {
  const { technologies }: { technologies: TechnologyData[] } = useSelector(
    (state: RootState) => state.technologies
  );

  return (
    <SafeAreaView style={styles.safeAreaViewcontainer}>
      <TitleView text="Recommendations" />
      <View style={styles.picklistWrapper}>
        <PicklistView tags={technologies} />
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
  picklistWrapper: {
    width: "90%",
    backgroundColor: color.white,
  },
});
