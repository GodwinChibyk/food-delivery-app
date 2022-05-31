import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import tailwind from "tailwind-rn";
import Constants from "expo-constants";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import Cart from "../../assets/icons/Cart";
import colors from "../../assets/colors";
import { useState } from "react";
import BookmarkFilled from "../../assets/icons/BookmarkFilled";
import BookmarkCutlined from "../../assets/icons/BookmarkCutlined";
import Star from "../../assets/icons/Star";
import Timer from "../../assets/icons/Timer";
import Bolt from "../../assets/icons/Bolt";
import { elevate } from "react-native-elevate";
import AddToCart from "../../assets/icons/AddToCart";
import { useNavigation } from "@react-navigation/native";

const RestaurantPreview = ({ navigation}) => {
  const [isFavourite, setIsFavourite] = useState(false);


  return (
    <>
      <View style={[tailwind("h-full w-full bg-gray-50")]}>
        <View style={[tailwind("w-full h-2/6 relative z-10 ")]}>
          <ImageBackground
            source={require("../../assets/img/res1.jpg")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={[
                tailwind("absolute inset-0 z-10"),
                { backgroundColor: "rgba(52, 52, 52, 0.4)" },
              ]}
            >
              <View
                style={[
                  tailwind(""),
                  { paddingTop: Constants.statusBarHeight },
                ]}
              >
                <View style={[tailwind("pt-6 px-4")]}>
                  <View style={[tailwind("flex-row justify-between items-center")]}>
                    <Pressable
                    onPress={()=>{
                      navigation.goBack()
                    }}
                    style={[tailwind("p-1 rounded-full"), {backgroundColor: colors.overLayColor}]}
                    >
                    <ArrowLeft color="white" width="30" height="30" />
                    </Pressable>
                    <Cart color="white" width="28" height="28" />
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View
          style={[
            tailwind("w-full bg-gray-50   pt-6 relative z-20  -mt-7"),
            { borderTopStartRadius: 35, borderTopEndRadius: 35 },
          ]}
        >
          <View
            style={[
              tailwind("w-full px-4 flex-row justify-between pb-2 relative "),
            ]}
          >
            <Text
              style={[
                tailwind("flex-1 mr-2"),
                {
                  fontFamily: "Metropolis-SemiBold",
                  fontSize: 20,
                  letterSpacing: 1,
                  color: colors.textColor,
                },
              ]}
            >
              Mcdonald'S
            </Text>

            <View style={[tailwind(" w-5 h-5")]}>
              <View style="relative">
                {!isFavourite && (
                  <Pressable
                    onPress={() => setIsFavourite(!isFavourite)}
                    style={[tailwind("w-5 h-5 absolute right-0")]}
                  >
                    <BookmarkCutlined
                      color={colors.gray}
                      width="24"
                      height="24"
                    />
                  </Pressable>
                )}
                {isFavourite && (
                  <Pressable
                    onPress={() => setIsFavourite(!isFavourite)}
                    style={[tailwind("w-5 h-5 absolute right-0")]}
                  >
                    <BookmarkFilled
                      color={colors.secondaryColor}
                      width="24"
                      height="24"
                    />
                  </Pressable>
                )}
              </View>
            </View>
          </View>

       
       <ScrollView>
          <View style={[tailwind("flex-row mt-2 px-4")]} showsVerticalScrollIndicator={false}>
            <Text
              style={[
                tailwind(""),
                { fontFamily: "Metropolis-Medium", color: colors.gray },
              ]}
            >
              ₦₦
            </Text>
            <Text
              style={[
                tailwind("mx-1"),
                {
                  fontFamily: "Metropolis-Medium",
                  color: colors.gray,
                  fontSize: 20,
                  lineHeight: 15,
                },
              ]}
            >
              .
            </Text>
            <Text
              style={[
                tailwind(""),
                { fontFamily: "Metropolis-Medium", color: colors.gray },
              ]}
            >
              Burger
            </Text>
            <Text
              style={[
                tailwind("mx-1"),
                {
                  fontFamily: "Metropolis-Medium",
                  color: colors.gray,
                  fontSize: 20,
                  lineHeight: 15,
                },
              ]}
            >
              .
            </Text>
            <Text
              style={[
                tailwind(""),
                { fontFamily: "Metropolis-Medium", color: colors.gray },
              ]}
            >
              American Food
            </Text>
            <Text
              style={[
                tailwind("mx-1"),
                {
                  fontFamily: "Metropolis-Medium",
                  color: colors.gray,
                  fontSize: 20,
                  lineHeight: 15,
                },
              ]}
            >
              .
            </Text>
            <Text
              style={[
                tailwind(""),
                { fontFamily: "Metropolis-Medium", color: colors.gray },
              ]}
            >
              Deshi Food
            </Text>
          </View>

          <View style={[tailwind("flex-row items-center mt-4 px-4 mr-4")]}>
            <Star color={colors.secondaryColor} width="20" height="20" />
            <Text
              style={[
                tailwind("ml-1 mr-2"),
                { fontFamily: "Metropolis-SemiBold" },
              ]}
            >
              4.9
            </Text>
            <Text
              style={[
                tailwind(""),
                { fontFamily: "Metropolis-Medium", color: colors.gray },
              ]}
            >
              200+ Ratings
            </Text>
          </View>

          <View
            style={[
              tailwind("flex-row items-center justify-between px-4 mt-3"),
            ]}
          >
            <View style={[tailwind("flex-row items-center")]}>
              <View
                style={[
                  tailwind(
                    "w-5 h-5 rounded-full bg-green-500 justify-center items-center"
                  ),
                ]}
              >
                <Bolt color="white" width="20" height="20" />
              </View>
              <Text
                style={[
                  tailwind("ml-1"),
                  { fontFamily: "Metropolis-SemiBold", color: colors.gray },
                ]}
              >
                Fast Delivery
              </Text>
            </View>
            <View style={[tailwind("flex-row items-center")]}>
              <Timer color="#76add0" width="20" height="20" />
              <Text
                style={[
                  tailwind("ml-1"),
                  { fontFamily: "Metropolis-SemiBold", color: colors.gray },
                ]}
              >
                30 min
              </Text>
            </View>
            <Pressable
              style={[
                tailwind(" py-1 px-2 rounded-lg"),
                { backgroundColor: colors.primaryColorTransparent },
              ]}
            >
              <Text
                style={[
                  tailwind(""),
                  { color: "#fefefe", fontFamily: "Metropolis-Medium" },
                ]}
              >
                View Location
              </Text>
            </Pressable>
          </View>

          <View
            style={[
              tailwind(
                "mt-6 ml-4 pl-4 flex-row rounded-l-full overflow-hidden py-3 w-full h-16 items-center"
              ),
              { backgroundColor: colors.primaryColorTransparent },
            ]}
          >
            <Pressable style={[tailwind("mr-4 w-1/5 items-center")]}>
              <Text
                style={[
                  tailwind(""),
                  {
                    fontSize: 17,
                    fontFamily: "Metropolis-SemiBold",
                    color: "#fefefe",
                  },
                ]}
              >
                For You
              </Text>
            </Pressable>
            <Pressable style={[tailwind("mr-4 w-1/5 items-center  ")]}>
              <Text
                style={[
                  tailwind(""),
                  {
                    fontSize: 17,
                    fontFamily: "Metropolis-SemiBold",
                    color: colors.lightGray,
                  },
                ]}
              >
                Burgers
              </Text>
            </Pressable>
            <Pressable style={[tailwind("mr-4 w-1/5 items-center  ")]}>
              <Text
                style={[
                  tailwind(""),
                  {
                    fontSize: 17,
                    fontFamily: "Metropolis-SemiBold",
                    color: colors.lightGray,
                  },
                ]}
              >
                Meals
              </Text>
            </Pressable>
            <Pressable style={[tailwind("mr-4 w-1/5 items-center  ")]}>
              <Text
                style={[
                  tailwind(""),
                  {
                    fontSize: 17,
                    fontFamily: "Metropolis-SemiBold",
                    color: colors.lightGray,
                  },
                ]}
              >
                Chicken
              </Text>
            </Pressable>
            <Pressable style={[tailwind("mr-4 w-1/5 items-center  ")]}>
              <Text
                style={[
                  tailwind(""),
                  {
                    fontSize: 17,
                    fontFamily: "Metropolis-SemiBold",
                    color: colors.lightGray,
                  },
                ]}
              >
                Chicken
              </Text>
            </Pressable>
          </View>

          <View style={[tailwind("px-4")]}>
          <View
              style={[
                tailwind(
                  "mb-4 mt-4 py-2 px-3 bg-gray-50 rounded-xl overflow-hidden"
                ),
                { ...elevate(2) },
              ]}
            >
              <View style={[tailwind("w-full  flex-row ")]}>
                <View
                  style={[
                    tailwind("w-24 h-24 mr-4 rounded-xl overflow-hidden"),
                    { ...elevate(5) },
                  ]}
                >
                  <Image
                    source={require("../../assets/img/food2.jpg")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <View style={[tailwind(" flex-1")]}>
                  <Text
                    style={[
                      tailwind(""),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 17,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    Chicken Burger
                  </Text>

                  <Text
                    style={[
                      tailwind("mt-2"),
                      {
                        fontFamily: "Metropolis-Medium",
                        color: colors.gray,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                  </Text>

                  <View
                    style={[
                      tailwind("flex-row items-center justify-between mt-3"),
                    ]}
                  >
                    <Text
                      style={[
                        tailwind(""),
                        {
                          fontFamily: "Metropolis-Bold",
                          letterSpacing: 1,
                          color: colors.secondaryColor,
                        },
                      ]}
                    >
                      ₦15.00
                    </Text>
                    <View>
                      <AddToCart color={colors.gray} width="20" height="20" />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[
                tailwind(
                  "mb-4 mt-4 py-2 px-3 bg-gray-50 rounded-xl overflow-hidden"
                ),
                { ...elevate(2) },
              ]}
            >
              <View style={[tailwind("w-full  flex-row ")]}>
                <View
                  style={[
                    tailwind("w-24 h-24 mr-4 rounded-xl overflow-hidden"),
                    { ...elevate(5) },
                  ]}
                >
                  <Image
                    source={require("../../assets/img/food2.jpg")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <View style={[tailwind(" flex-1")]}>
                  <Text
                    style={[
                      tailwind(""),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 17,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    Chicken Burger
                  </Text>

                  <Text
                    style={[
                      tailwind("mt-2"),
                      {
                        fontFamily: "Metropolis-Medium",
                        color: colors.gray,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                  </Text>

                  <View
                    style={[
                      tailwind("flex-row items-center justify-between mt-3"),
                    ]}
                  >
                    <Text
                      style={[
                        tailwind(""),
                        {
                          fontFamily: "Metropolis-Bold",
                          letterSpacing: 1,
                          color: colors.secondaryColor,
                        },
                      ]}
                    >
                      ₦15.00
                    </Text>
                    <View>
                      <AddToCart color={colors.gray} width="20" height="20" />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[
                tailwind(
                  "mb-4 mt-4 py-2 px-3 bg-gray-50 rounded-xl overflow-hidden"
                ),
                { ...elevate(2) },
              ]}
            >
              <View style={[tailwind("w-full  flex-row ")]}>
                <View
                  style={[
                    tailwind("w-24 h-24 mr-4 rounded-xl overflow-hidden"),
                    { ...elevate(5) },
                  ]}
                >
                  <Image
                    source={require("../../assets/img/food2.jpg")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <View style={[tailwind(" flex-1")]}>
                  <Text
                    style={[
                      tailwind(""),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 17,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    Chicken Burger
                  </Text>

                  <Text
                    style={[
                      tailwind("mt-2"),
                      {
                        fontFamily: "Metropolis-Medium",
                        color: colors.gray,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                  </Text>

                  <View
                    style={[
                      tailwind("flex-row items-center justify-between mt-3"),
                    ]}
                  >
                    <Text
                      style={[
                        tailwind(""),
                        {
                          fontFamily: "Metropolis-Bold",
                          letterSpacing: 1,
                          color: colors.secondaryColor,
                        },
                      ]}
                    >
                      ₦15.00
                    </Text>
                    <View>
                      <AddToCart color={colors.gray} width="20" height="20" />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[
                tailwind(
                  "mb-4 mt-4 py-2 px-3 bg-gray-50 rounded-xl overflow-hidden"
                ),
                { ...elevate(2) },
              ]}
            >
              <View style={[tailwind("w-full  flex-row ")]}>
                <View
                  style={[
                    tailwind("w-24 h-24 mr-4 rounded-xl overflow-hidden"),
                    { ...elevate(5) },
                  ]}
                >
                  <Image
                    source={require("../../assets/img/food2.jpg")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <View style={[tailwind(" flex-1")]}>
                  <Text
                    style={[
                      tailwind(""),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 17,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    Chicken Burger
                  </Text>

                  <Text
                    style={[
                      tailwind("mt-2"),
                      {
                        fontFamily: "Metropolis-Medium",
                        color: colors.gray,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                  </Text>

                  <View
                    style={[
                      tailwind("flex-row items-center justify-between mt-3"),
                    ]}
                  >
                    <Text
                      style={[
                        tailwind(""),
                        {
                          fontFamily: "Metropolis-Bold",
                          letterSpacing: 1,
                          color: colors.secondaryColor,
                        },
                      ]}
                    >
                      ₦15.00
                    </Text>
                    <View>
                      <AddToCart color={colors.gray} width="20" height="20" />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[
                tailwind(
                  "mb-4 mt-4 py-2 px-3 bg-gray-50 rounded-xl overflow-hidden"
                ),
                { ...elevate(2) },
              ]}
            >
              <View style={[tailwind("w-full  flex-row ")]}>
                <View
                  style={[
                    tailwind("w-24 h-24 mr-4 rounded-xl overflow-hidden"),
                    { ...elevate(5) },
                  ]}
                >
                  <Image
                    source={require("../../assets/img/food2.jpg")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <View style={[tailwind(" flex-1")]}>
                  <Text
                    style={[
                      tailwind(""),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 17,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    Chicken Burger
                  </Text>

                  <Text
                    style={[
                      tailwind("mt-2"),
                      {
                        fontFamily: "Metropolis-Medium",
                        color: colors.gray,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                  </Text>

                  <View
                    style={[
                      tailwind("flex-row items-center justify-between mt-3"),
                    ]}
                  >
                    <Text
                      style={[
                        tailwind(""),
                        {
                          fontFamily: "Metropolis-Bold",
                          letterSpacing: 1,
                          color: colors.secondaryColor,
                        },
                      ]}
                    >
                      ₦15.00
                    </Text>
                    <View>
                      <AddToCart color={colors.gray} width="20" height="20" />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[
                tailwind(
                  "mb-4 mt-4 py-2 px-3 bg-gray-50 rounded-xl overflow-hidden"
                ),
                { ...elevate(2) },
              ]}
            >
              <View style={[tailwind("w-full  flex-row ")]}>
                <View
                  style={[
                    tailwind("w-24 h-24 mr-4 rounded-xl overflow-hidden"),
                    { ...elevate(5) },
                  ]}
                >
                  <Image
                    source={require("../../assets/img/food3.jpg")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <View style={[tailwind(" flex-1")]}>
                  <Text
                    style={[
                      tailwind(""),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 17,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    Cricpy Burger
                  </Text>

                  <Text
                    style={[
                      tailwind("mt-2"),
                      {
                        fontFamily: "Metropolis-Medium",
                        color: colors.gray,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                  </Text>

                  <View
                    style={[
                      tailwind("flex-row items-center justify-between mt-3"),
                    ]}
                  >
                    <Text
                      style={[
                        tailwind(""),
                        {
                          fontFamily: "Metropolis-Bold",
                          letterSpacing: 1,
                          color: colors.secondaryColor,
                        },
                      ]}
                    >
                      ₦15.00
                    </Text>
                    <View>
                      <AddToCart color={colors.gray} width="20" height="20" />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[
                tailwind(
                  "mb-4 mt-4 py-2 px-3 bg-gray-50 rounded-xl overflow-hidden"
                ),
                { ...elevate(2) },
              ]}
            >
              <View style={[tailwind("w-full  flex-row ")]}>
                <View
                  style={[
                    tailwind("w-24 h-24 mr-4 rounded-xl overflow-hidden"),
                    { ...elevate(5) },
                  ]}
                >
                  <Image
                    source={require("../../assets/img/food3.jpg")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <View style={[tailwind(" flex-1")]}>
                  <Text
                    style={[
                      tailwind(""),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 17,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    Cricpy Burger
                  </Text>

                  <Text
                    style={[
                      tailwind("mt-2"),
                      {
                        fontFamily: "Metropolis-Medium",
                        color: colors.gray,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                  </Text>

                  <View
                    style={[
                      tailwind("flex-row items-center justify-between mt-3"),
                    ]}
                  >
                    <Text
                      style={[
                        tailwind(""),
                        {
                          fontFamily: "Metropolis-Bold",
                          letterSpacing: 1,
                          color: colors.secondaryColor,
                        },
                      ]}
                    >
                      ₦15.00
                    </Text>
                    <View>
                      <AddToCart color={colors.gray} width="20" height="20" />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[
                tailwind(
                  "mb-4 mt-4 py-2 px-3 bg-gray-50 rounded-xl overflow-hidden"
                ),
                { ...elevate(2) },
              ]}
            >
              <View style={[tailwind("w-full  flex-row ")]}>
                <View
                  style={[
                    tailwind("w-24 h-24 mr-4 rounded-xl overflow-hidden"),
                    { ...elevate(5) },
                  ]}
                >
                  <Image
                    source={require("../../assets/img/food3.jpg")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <View style={[tailwind(" flex-1")]}>
                  <Text
                    style={[
                      tailwind(""),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 17,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    Cricpy Burger
                  </Text>

                  <Text
                    style={[
                      tailwind("mt-2"),
                      {
                        fontFamily: "Metropolis-Medium",
                        color: colors.gray,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                  </Text>

                  <View
                    style={[
                      tailwind("flex-row items-center justify-between mt-3"),
                    ]}
                  >
                    <Text
                      style={[
                        tailwind(""),
                        {
                          fontFamily: "Metropolis-Bold",
                          letterSpacing: 1,
                          color: colors.secondaryColor,
                        },
                      ]}
                    >
                      ₦15.00
                    </Text>
                    <View>
                      <AddToCart color={colors.gray} width="20" height="20" />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[
                tailwind(
                  "mb-4 mt-4 py-2 px-3 bg-gray-50 rounded-xl overflow-hidden"
                ),
                { ...elevate(2) },
              ]}
            >
              <View style={[tailwind("w-full  flex-row ")]}>
                <View
                  style={[
                    tailwind("w-24 h-24 mr-4 rounded-xl overflow-hidden"),
                    { ...elevate(5) },
                  ]}
                >
                  <Image
                    source={require("../../assets/img/food2.jpg")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <View style={[tailwind(" flex-1")]}>
                  <Text
                    style={[
                      tailwind(""),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 17,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    Cricpy Burger
                  </Text>

                  <Text
                    style={[
                      tailwind("mt-2"),
                      {
                        fontFamily: "Metropolis-Medium",
                        color: colors.gray,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                  </Text>

                  <View
                    style={[
                      tailwind("flex-row items-center justify-between mt-3"),
                    ]}
                  >
                    <Text
                      style={[
                        tailwind(""),
                        {
                          fontFamily: "Metropolis-Bold",
                          letterSpacing: 1,
                          color: colors.secondaryColor,
                        },
                      ]}
                    >
                      ₦15.00
                    </Text>
                    <View>
                      <AddToCart color={colors.gray} width="20" height="20" />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
       
          </ScrollView>
        </View>

        {/* <View style={tailwind("w-full h-64")}></View> */}
      </View>
    </>
  );
};

export default RestaurantPreview;
