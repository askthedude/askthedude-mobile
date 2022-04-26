import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { color, size } from "../style";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

export const NavigationScreenHeader = ({
  text,
  otherStyles = {},
  textStyles = {},
}: {
  text: string;
  otherStyles?: any;
  textStyles?: any;
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, otherStyles]}>
      <View style={styles.backContainer}>
        <HeaderBackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, textStyles]}>{text}</Text>
      </View>
      <View style={styles.backContainerHidden}>
        <HeaderBackButton onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: size.padding.small,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: size.font.big,
    fontWeight: "500",
    color: color.darkblue,
  },
  backContainer: {
    justifyContent: "flex-start",
  },
  backContainerHidden: {
    opacity: 0,
    height: 0,
  },
});
