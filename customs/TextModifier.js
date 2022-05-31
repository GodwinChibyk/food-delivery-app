import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../assets/colors";

export const typography = () => {
  const oldTextRender = Text.render;
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "Metropolis-Regular",
    fontSize: 15,
    color: colors.textColor,
  },
  defaultFlex: {
    flexDirection: "row",
  },
});