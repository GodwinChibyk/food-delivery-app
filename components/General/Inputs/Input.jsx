import React from "react";
import { View, Text, TextInput } from "react-native";
import tailwind from "tailwind-rn";
import colors from "../../../assets/colors";

const Input = ({
  placeholder,
  size = "w-full",
  value,
  onChange,
  onBlur,
  error,
  errorMessage,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={tailwind(` ${size} mt-7 relative`)}>
      {error && (
        <Text style={[tailwind("text-red-600 absolute -top-4 left-1")]}>
          {errorMessage}
        </Text>
      )}
      <TextInput
        value={value}
        style={[
          tailwind(
            `px-5 py-3 w-full  rounded-3xl ${
              error ? "border border-red-300" : "border border-gray-100"
            }`
          ),
          {
            backgroundColor: "#e0e0e0",
            fontSize: 16,
            color: colors.textColor,
          },
        ]}
        placeholder={placeholder}
        onChangeText={onChange}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        keyboardType = {keyboardType}
      />
    </View>
  );
};

export default Input;
