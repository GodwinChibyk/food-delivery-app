import React from "react";
import { View, Text, TextInput } from "react-native";
import tailwind from "tailwind-rn";
import colors from "../../../assets/colors";
import Search from "../../../assets/icons/Search";

const SearchInput = ({ placeholder, size = "w-full" }) => {
  return (
    <View style={tailwind(`  mt-7  ${size}`)}>
      <TextInput
        style={[
          tailwind(`px-5 pl-14 py-2 w-full relative rounded-3xl`),
          {
            backgroundColor: "#e0e0e0",
            fontSize: 18,
            color: colors.textColor,
            fontFamily: "Metropolis-Regular",
          },
        ]}
        placeholder={placeholder}
      />

      <View style={[tailwind("absolute left-4 bottom-0 top-0 justify-center")]}>
        <Search color={colors.lightGray} width="30" height="30" />
      </View>

    </View>
  );
};

export default SearchInput;
