import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Image } from "react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import colors from "../../assets/colors";
import PrimaryButton from "../../components/General/Buttons/PrimaryButton";
import WelcomeScreen2 from "./WelcomeScreen2";

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={[tailwind("w-full min-h-full bg-gray-50"),
      {}
    ]}>
      <StatusBar style="light"/>
      <View
        style={[
          tailwind("w-full h-2/5 bg-gray-50 rounded-b-2xl relative"),
          { backgroundColor: colors.primaryColor },
        ]}
      >
        {/* <Image source={require('../../assets/img/user.jpg')}
         style={{height: "100%", width: "100%"}} resizeMode="cover" /> */}
        <View
          style={[
            tailwind(
              "w-full flex-row justify-center items-end absolute  bottom-0"
            ),
          ]}
        >
          <View
            style={[
              tailwind("w-40 h-40  rounded-full bg-gray-50 border-t"),
              {
                top: 80,
                padding: 5,
              },
            ]}
          >
            <View
              style={[
                tailwind("w-full h-full -mt-5 overflow-hidden rounded-full"),
              ]}
            >
              <Image
                source={require("../../assets/img/food1.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>

      <View style={[tailwind("mt-12 w-full justify-center flex-row")]}>
        <Text
          style={[
            {
              fontSize: 30,
              color: colors.secondaryColor,
              fontFamily: "Cabin-Bold",
            },
          ]}
        >
          Pick n' {" "}
        </Text>
        <Text
          style={[
            {
              fontSize: 30,
              color: colors.primaryColor,
              fontFamily: "Cabin-Bold",
            },
          ]}
        >
         Drop
        </Text>
      </View>
      <Text style={[tailwind("text-center"), {
        fontSize: 12,
        color: colors.textColor
      }]}>
        WE DEY PICK WE DEY DROP
      </Text>

      <Text style={[tailwind("text-center px-10 mt-12 leading-6"), {color: colors.textColor, fontSize:16}]}>
        Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep
      </Text>

      <View style={[tailwind("mt-24 px-10")]}>
        <PrimaryButton buttonTitle="Next" buttonAction={()=> navigation.navigate("WelcomeScreen2")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 50,
  },
});

export default WelcomeScreen;
