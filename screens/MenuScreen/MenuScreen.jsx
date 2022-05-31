import React from 'react'
import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import tailwind from "tailwind-rn";
import colors from '../../assets/colors'
import Cart from '../../assets/icons/Cart'
import Card5 from '../../components/Cards/Card5';
import SearchInput from '../../components/General/Inputs/SearchInput'

const MenuScreen = () => {
    return (
        <>
    <View style={[tailwind("bg-gray-50 pt-8")]}>
      <View style={[tailwind("flex-row items-center justify-between px-4")]}>
        <Text
          style={[
            tailwind(),
            {
              fontFamily: "Metropolis-Bold",
              fontSize: 20,
            },
          ]}
        >
          Menu
        </Text>

        <Pressable>
          <Cart color={colors.gray} width="28" height="28" />
        </Pressable>
      </View>

      </View>


    <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false}>

      <View style={[tailwind("px-4")]}>
        <SearchInput placeholder="Search food" />
      </View>


      <View style={[tailwind("w-full  mt-8  relative px-4 pt-6")]}>
          <View style={[tailwind("absolute w-3/12 top-0 bottom-0 left-0 rounded-r-3xl"), 
          {backgroundColor: colors.primaryColor}]}>
          </View>

          <Card5 imageUri={require("../../assets/img/food2.jpg")} title="Food" items="120" />
          <Card5 imageUri={require("../../assets/img/food3.jpg")} title="Beverages" items="115" />
          <Card5 imageUri={require("../../assets/img/food1.jpg")} title="sursages" items="57" />
          <Card5 imageUri={require("../../assets/img/food1.jpg")} title="chops" items="15" />
          <Card5 imageUri={require("../../assets/img/food3.jpg")} title="Promotions" items="15" />
      </View>

      

      {/* <View style={tailwind("w-full h-32")}></View> */}
    </ScrollView>
    </>
    )
}

export default MenuScreen
