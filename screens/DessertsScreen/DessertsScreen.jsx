import React from "react";
import { View, Text, Pressable, ScrollView, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";
import colors from "../../assets/colors";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import Cart from "../../assets/icons/Cart";
import BackgroundImageCard from "../../components/Cards/BackgroundImageCard";
import GeneralScreen from "../../components/General/GeneralScreen";
import SearchInput from "../../components/General/Inputs/SearchInput";
import TopNavBar from "../../components/General/TopNavBar/TopNavBar";

const DessertsScreen = () => {
    
  return (
    <>
      <GeneralScreen>
      <TopNavBar title="Desserts" />

      <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false}>
        <View style={[tailwind("px-4")]}>
          <SearchInput placeholder="Search food" />
        </View>

        <View style={[tailwind("w-full  mt-8")]}>

          <BackgroundImageCard imageUri={require("../../assets/img/food1.jpg")} title="French Apple Pie" />
          <BackgroundImageCard imageUri={require("../../assets/img/food2.jpg")} title="Dark chocolate cake" />
          <BackgroundImageCard imageUri={require("../../assets/img/food3.jpg")} title="street shake" />
          <BackgroundImageCard imageUri={require("../../assets/img/food1.jpg")} title="fudgy chewy brownies" />

        </View>

        <View style={tailwind("w-full h-32")}></View>
      </ScrollView>
      </GeneralScreen>
    </>
  );
};

export default DessertsScreen;
