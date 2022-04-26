import { StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Modal } from "react-native";
import Button from "./ButtonView";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, size } from "../style";
import TitleView from "./TitleView";
import Input from "./InputView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Loading from "./LoadingView";
import { addSubscription } from "../../state/reducer/addSubscriptionSlice";
import { SubscriptionData } from "../model";
import { validateEmail } from "../utils/validation";

export const AddSubscriptionModal = ({
  closeCallback,
  projectId,
}: {
  closeCallback: () => void;
  projectId: number;
}) => {
  const [emailInput, setEmail] = useState({
    content: "",
    errorMessage: "",
  });
  const { loading } = useSelector((root: RootState) => root.addSubscription);
  const dispatch = useDispatch();

  const addNewSubscription = () => {
    if (
      emailInput.content === undefined ||
      emailInput.content === "" ||
      !validateEmail(emailInput.content)
    ) {
      setEmail({ ...emailInput, errorMessage: "Please fill in the email." });
    } else {
      const subscription = {
        email: emailInput.content,
        project_id: projectId,
      } as SubscriptionData;
      dispatch(addSubscription(subscription));
    }
  };

  useEffect(() => {
    if (loading === "succeeded" || loading === "failed") {
      closeCallback();
    }
  }, [loading]);

  return (
    <Modal animationType={"slide"}>
      <SafeAreaView style={styles.container}>
        {loading === "pending" ? (
          <Loading />
        ) : (
          <>
            <TitleView text={"Subscribe to the updates of the project"} />
            <Input
              placeholder={"Email"}
              callback={(text) => setEmail({ content: text, errorMessage: "" })}
              containerStyle={styles.inputAddonStyles}
              errorMessage={emailInput.errorMessage}
            />
            <Button
              callback={() => addNewSubscription()}
              text={"Subscribe"}
              otherStyles={styles.subscribeButtonAddonStyles}
            />
            <Button
              callback={() => closeCallback()}
              text={"Close"}
              otherStyles={styles.closeButtonAddonStyles}
            />
          </>
        )}
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
