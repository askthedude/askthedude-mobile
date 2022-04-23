import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { MainNavigation } from "./navigation/MainNavigation";
import { store } from "./state/store/index";

export default () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
