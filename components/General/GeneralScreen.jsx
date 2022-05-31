import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../../assets/colors";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const GeneralScreen = ({ children }) => {
  return (
    <View style={style.container}>
      <StatusBar style="light" />
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    color: colors.textColor,
    backgroundColor: colors.primaryColor,
    paddingTop: Constants.statusBarHeight,
    fontFamily: "Metropolis-Regular",
  },
});

export default GeneralScreen;
