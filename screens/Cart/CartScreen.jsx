import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { elevate } from "react-native-elevate";
import tailwind from "tailwind-rn";
import colors from "../../assets/colors";
import Add from "../../assets/icons/Add";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import Cart from "../../assets/icons/Cart";
import Location from "../../assets/icons/Location";
import Remove from "../../assets/icons/Remove";
import GeneralScreen from "../../components/General/GeneralScreen";
import TopNavBar from "../../components/General/TopNavBar/TopNavBar";
import Checkout from "../Checkout/Checkout";
import Orders from "../Orders/Orders";
import ViewMore from "../ViewMore/ViewMore";

const CartScreen = () => {
  const navigation = useNavigation()
  return (
    <>
      <GeneralScreen>
        <View style={[tailwind("min-h-full w-full")]}>
           <TopNavBar title="my cart" />

          <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false} >
            <View style={[tailwind("px-4 mt-4")]}>
              <View
                style={[
                  tailwind("pb-2 border-b-2"),
                  { borderColor: "#ebebeb" },
                ]}
              >
                <View style={[tailwind("mb-4 mt-4  bg-gray-50 ")]}>
                  <View style={[tailwind("w-full  flex-row ")]}>
                    <View
                      style={[
                        tailwind("w-20 h-20 mr-4 rounded-xl overflow-hidden"),
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
                          tailwind("mt-3"),
                          {
                            fontFamily: "Metropolis-SemiBold",
                            fontSize: 17,
                            textTransform: "capitalize",
                          },
                        ]}
                      >
                        Cricpy Burger
                      </Text>

                      <View
                        style={[
                          tailwind(
                            "flex-row items-center justify-between mt-3"
                          ),
                        ]}
                      >
                        <Text
                          style={[
                            tailwind(""),
                            {
                              fontFamily: "Metropolis-Bold",
                              letterSpacing: 1,
                              color: colors.secondaryColor,
                              fontSize: 17,
                            },
                          ]}
                        >
                          ₦15.00
                        </Text>
                        <View
                          style={[
                            tailwind(
                              "flex-row px-3 py-2 rounded-md bg-gray-200"
                            ),
                          ]}
                        >
                          <Remove color={colors.gray} width="18" height="18" />
                          <Text
                            style={[
                              tailwind("mx-4"),
                              {
                                fontFamily: "Metropolis-SemiBold",
                                fontSize: 17,
                              },
                            ]}
                          >
                            1
                          </Text>
                          <Add
                            color={colors.secondaryColor}
                            width="18"
                            height="18"
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={[tailwind("mb-4 mt-4  bg-gray-50 ")]}>
                  <View style={[tailwind("w-full  flex-row ")]}>
                    <View
                      style={[
                        tailwind("w-20 h-20 mr-4 rounded-xl overflow-hidden"),
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
                          tailwind("mt-3"),
                          {
                            fontFamily: "Metropolis-SemiBold",
                            fontSize: 17,
                            textTransform: "capitalize",
                          },
                        ]}
                      >
                        Chicken Burger
                      </Text>

                      <View
                        style={[
                          tailwind(
                            "flex-row items-center justify-between mt-3"
                          ),
                        ]}
                      >
                        <Text
                          style={[
                            tailwind(""),
                            {
                              fontFamily: "Metropolis-Bold",
                              letterSpacing: 1,
                              color: colors.secondaryColor,
                              fontSize: 17,
                            },
                          ]}
                        >
                          ₦30.00
                        </Text>
                        <View
                          style={[
                            tailwind(
                              "flex-row px-3 py-2 rounded-md bg-gray-200"
                            ),
                          ]}
                        >
                          <Remove color={colors.gray} width="18" height="18" />
                          <Text
                            style={[
                              tailwind("mx-4"),
                              {
                                fontFamily: "Metropolis-SemiBold",
                                fontSize: 17,
                              },
                            ]}
                          >
                            2
                          </Text>
                          <Add
                            color={colors.secondaryColor}
                            width="18"
                            height="18"
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={[
                  tailwind("pb-4 border-b-2"),
                  { borderColor: "#ebebeb" },
                ]}
              >
                <View style={[tailwind("flex-row justify-between mt-4")]}>
                  <Text
                    style={[
                      tailwind("capitalize"),
                      { fontFamily: "Metropolis-SemiBold", fontSize: 17 },
                    ]}
                  >
                    item total
                  </Text>
                  <Text
                    style={[
                      tailwind("capitalize"),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 18,
                        letterSpacing: 1,
                      },
                    ]}
                  >
                    ₦50.00
                  </Text>
                </View>
                <View style={[tailwind("flex-row justify-between mt-4")]}>
                  <Text
                    style={[
                      tailwind("capitalize"),
                      { fontFamily: "Metropolis-SemiBold", fontSize: 17 },
                    ]}
                  >
                    discount
                  </Text>
                  <Text
                    style={[
                      tailwind("capitalize"),
                      {
                        fontFamily: "Metropolis-SemiBold",
                        fontSize: 18,
                        letterSpacing: 1,
                      },
                    ]}
                  >
                    ₦10.00
                  </Text>
                </View>
                <View style={[tailwind("flex-row justify-between mt-4")]}>
                  <Text
                    style={[
                      tailwind("capitalize"),
                      {
                        fontFamily: "Metropolis-Medium",
                        fontSize: 17,
                        color: "#3289a8",
                      },
                    ]}
                  >
                    delivery fee
                  </Text>
                  <Text
                    style={[
                      tailwind("capitalize"),
                      {
                        fontFamily: "Metropolis-Medium",
                        fontSize: 17,
                        color: "#3289a8",
                      },
                    ]}
                  >
                    free
                  </Text>
                </View>
              </View>

              <View
                style={[
                  tailwind("flex-row justify-between py-4 border-b"),
                  { borderColor: "#ebebeb" },
                ]}
              >
                <Text
                  style={[
                    tailwind("capitalize"),
                    {
                      fontFamily: "Metropolis-Medium",
                      fontSize: 25,
                      letterSpacing: 1,
                    },
                  ]}
                >
                  Total
                </Text>
                <Text
                  style={[
                    tailwind("capitalize"),
                    {
                      fontFamily: "Metropolis-Medium",
                      fontSize: 25,
                      letterSpacing: 1,
                    },
                  ]}
                >
                  ₦70.00
                </Text>
              </View>

              <View style={[tailwind("py-4")]}>
                <View style={[tailwind(" bg-gray-50 ")]}>
                  <View style={[tailwind("w-full  flex-row ")]}>
                    <View
                      style={[
                        tailwind("w-16 h-16 mr-3 rounded-sm overflow-hidden"),
                        { ...elevate(2) },
                      ]}
                    >
                      <Image
                        source={require("../../assets/img/map.png")}
                        style={{ height: "100%", width: "100%" }}
                        resizeMode="cover"
                      />
                    </View>

                    <View style={[tailwind(" flex-1")]}>
                      <View
                        style={[
                          tailwind(
                            "flex-row items-center justify-between mt-2"
                          ),
                        ]}
                      >
                        <Text
                          style={[
                            tailwind(""),
                            {
                              fontFamily: "Metropolis-Bold",
                              textTransform: "capitalize",
                            },
                          ]}
                        >
                          Deliver To : Home
                        </Text>
                        <Pressable>
                          <Text
                            style={[
                              tailwind(""),
                              {
                                fontFamily: "Metropolis-SemiBold",
                                color: colors.secondaryColor,
                              },
                            ]}
                          >
                            Change
                          </Text>
                        </Pressable>
                      </View>

                      <View style={[tailwind(" flex-row items-center mt-3")]}>
                        <Location color={colors.gray} width="16" height="16" />
                        <Text
                          style={[
                            tailwind(""),
                            {
                              fontFamily: "Metropolis-SemiBold",
                              color: colors.gray,
                              lineHeight: 20,
                              fontSize: 13,
                            },
                          ]}
                        >
                          13A Hovine Street, New York
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <Pressable
              onPress={()=> navigation.navigate("Checkout")}
                style={[
                  tailwind(
                    "w-full rounded-xl px-6 py-4 mt-4 flex-row items-center justify-between"
                  ),
                  { backgroundColor: colors.primaryColor },
                  { ...elevate(5) },
                ]}
              >
                <View style={[tailwind("flex-row items-center")]}>
                  <Cart color={colors.lightGray} width="24" height="24" />
                  <Text
                    style={[
                      tailwind("ml-2"),
                      {
                        fontSize: 20,
                        fontFamily: "Metropolis-SemiBold",
                        color: "#fefefe",
                      },
                    ]}
                  >
                    Checkout
                  </Text>
                </View>

                <Text
                  style={[
                    tailwind(""),
                    {
                      fontSize: 20,
                      fontFamily: "Metropolis-SemiBold",
                      color: "#fefefe",
                    },
                  ]}
                >
                  ₦70.00
                </Text>
              </Pressable>
            </View>

            <View style={tailwind("w-full h-40")}></View>
          </ScrollView>
        </View>
      </GeneralScreen>
    </>
  );
};

export default CartScreen;
