import React from "react";
import { View, Text, Pressable } from "react-native";
import tailwind from "tailwind-rn";
import colors from "../../../assets/colors";

const SecondaryButton = ({ buttonTitle }) => {
  return (
    <View>
      <Pressable 
      style={[tailwind("border items-center px-5 py-3 rounded-2xl "), 
      {borderColor: colors.primaryColor}]}
      onPress = {()=> {alert("mumu you don press your sense commot")}}
      >
        <Text style={{color: colors.primaryColor}}>{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

export default SecondaryButton;
