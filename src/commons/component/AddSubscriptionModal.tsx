import { StyleSheet, Alert } from "react-native";
import React from "react";
import { Modal } from "react-native";
import Button from "./ButtonView";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, size } from "../style";
import TitleView from "./TitleView";
import Input from "./InputView";

export const AddSubscriptionModal = ({
  closeCallback,
}: {
  closeCallback: () => void;
}) => {
  return (
    <Modal animationType={"slide"}>
      <SafeAreaView style={styles.container}>
        <TitleView text={"Subscribe to the updates of the project"} />
        <Input
          placeholder={"Email"}
          callback={() => {
            Alert.alert("Subscribing with email");
            closeCallback();
          }}
          containerStyle={styles.inputAddonStyles}
        />
        <Button
          callback={() => {
            closeCallback();
          }}
          text={"Subscribe"}
          otherStyles={styles.subscribeButtonAddonStyles}
        />
        <Button
          callback={() => {
            closeCallback();
          }}
          text={"Close"}
          otherStyles={styles.closeButtonAddonStyles}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: color.backgroundPink,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingVertical: size.padding.big,
  },
  inputAddonStyles: {
    marginVertical: size.margin.big,
  },
  subscribeButtonAddonStyles: {
    marginVertical: size.margin.medium,
  },
  closeButtonAddonStyles: {
    marginVertical: size.margin.medium,
    width: size.width.small,
  },
});
