import { Modal, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, size } from "../style";
import { useDispatch } from "react-redux";
import { addTechnology } from "../../state/reducer/technologySlice";
import TitleView from "./TitleView";
import Input from "./InputView";
import Button from "./ButtonView";

export const AddTechnologyModal = ({
  closeCallback,
}: {
  closeCallback: () => void;
}) => {
  const [sent, setSent] = useState(false);
  const [technology, setTechnology] = useState({
    name: "",
    name_error: "",
    resource_url: "",
    resource_url_error: "",
  });
  const dispatch = useDispatch();

  const addNewTechnology = () => {
    let valid = true;
    if (technology.name == undefined || technology.name === "") {
      valid = false;
      setTechnology((prev) => ({
        ...prev,
        name_error: "Technology name can't be empty",
      }));
    }
    if (technology.resource_url == undefined || technology.resource_url == "") {
      valid = false;
      setTechnology((prev) => ({
        ...prev,
        resource_url_error: "Technology resource url can't be empty",
      }));
    }
    if (valid) {
      dispatch(
        addTechnology({
          name: technology.name,
          resource_url: technology.resource_url,
        })
      );
    }
  };

  useEffect(() => {
    if (sent) {
      addNewTechnology();
      setSent(false);
    }
  }, [sent]);

  return (
    <Modal
      animationType={"slide"}
      onRequestClose={() => {
        closeCallback();
      }}
      transparent={true}
    >
      <SafeAreaView style={styles.container}>
        <TitleView text="Add new technology tag to the platform" />
        <Input
          placeholder={"Name"}
          callback={(txt) => {
            setTechnology((prev: any) => ({
              ...prev,
              name: txt,
              name_error: "",
            }));
          }}
          errorMessage={technology.name_error}
        />
        <Input
          placeholder={"Resource url"}
          callback={(txt) => {
            setTechnology((prev: any) => ({
              ...prev,
              resource_url: txt,
              resource_url_error: "",
            }));
          }}
          errorMessage={technology.resource_url_error}
        />
        <Button
          callback={() => setSent(true)}
          text={"Submit"}
          otherStyles={styles.subscribeButtonAddonStyles}
        />
        <Button
          callback={() => closeCallback()}
          text={"Close"}
          otherStyles={styles.closeButtonAddonStyles}
          inputBackgroundColor={"white"}
          inputFontColor={color.primary}
          inputHeight={size.height.small}
          inputWidth={size.width.small}
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
    borderTopEndRadius: size.borderRadius.xbig,
    borderTopStartRadius: size.borderRadius.xbig,
    paddingVertical: size.padding.xxbig,
    paddingHorizontal: size.padding.small,
    top: "45%",
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
