import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { View, Text, Pressable, ScrollView } from "react-native";
import { elevate } from "react-native-elevate";
import tailwind from "tailwind-rn";
import colors from "../../assets/colors";
import Camera from "../../assets/icons/Camera";
import Cart from "../../assets/icons/Cart";
import Pencil from "../../assets/icons/Pencil";
import PrimaryButton from "../../components/General/Buttons/PrimaryButton";
import GeneralScreen from "../../components/General/GeneralScreen";
import TopNavBar from "../../components/General/TopNavBar/TopNavBar";
import { auth } from "../../firebase";
import Login from "../AutScreens/Login";

const UserProfile = () => {
  const navigation = useNavigation()
  return (
    <>
      <GeneralScreen>
      <View style={[tailwind("min-h-full w-full")]}>
        <TopNavBar title="profile" />

        <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false}>
          <View style={[tailwind("mt-6 items-center")]}>
            <View
              style={[
                tailwind("w-28 h-28 rounded-full relative overflow-hidden"),
                { ...elevate(8) },
              ]}
            >
              <View style={[tailwind("justify-end absolute inset-0 z-20")]}>
                <View
                  style={[
                    tailwind("items-center bg-white py-0.5"),
                    { backgroundColor: "rgba(52, 52, 52, 0.2)" },
                  ]}
                >
                  <Camera color={colors.lightGray} width="23" height="23" />
                </View>
              </View>
              <Image
                source={require("../../assets/img/user.jpg")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
            </View>

            <View style={[tailwind(" mt-3 items-center")]}>
              <Pressable
                style={[tailwind("flex-row justify-center items-center w-28 ")]}
              >
                <Pencil color={colors.secondaryColor} width="18" height="20" />
                <Text
                  style={{
                    color: colors.secondaryColor,
                    fontFamily: "Metropolis-Medium",
                    paddingLeft: 3,
                  }}
                >
                  Edit Profile
                </Text>
              </Pressable>

              <Text
                style={[
                  tailwind("mt-2"),
                  {
                    fontFamily: "Metropolis-Bold",
                    fontSize: 17,
                    color: colors.textColor,
                    letterSpacing: 1,
                  },
                ]}
              >
                Hi there Godwin!
              </Text>

              <TouchableOpacity
              onPress={()=> {
                auth.signOut()
                .then(()=> {
                  setTimeout(() => {
                    navigation.navigate("Login")
                  },0);
                })
                .catch(e => alert(e.message))
              }}
                style={[
                  tailwind("items-center mt-2 px-2 border rounded-full border-gray-300"),
                  { fontFamily: "Metropolis-SemiBold", color: colors.gray },
                ]}
              >
                <Text
                  style={[
                    tailwind(""),
                    { fontFamily: "Metropolis-Medium", color: colors.gray },
                  ]}
                >
                  Sign Out
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[tailwind("mt-8 px-4")]}>
            <View
              style={[
                tailwind("w-full px-8 py-2 rounded-full"),
                { backgroundColor: "#e0e0e0" },
              ]}
            >
              <Text
                style={[
                  tailwind(""),
                  { fontFamily: "Metropolis-Medium", color: colors.gray },
                ]}
              >
                Name
              </Text>
              <TextInput
                style={[
                  tailwind(` w-full  rounded-3xl`),
                  {
                    backgroundColor: "#e0e0e0",
                    fontSize: 16,
                    color: colors.textColor,
                  },
                ]}
                placeholder=""
              />
            </View>

            <View
              style={[
                tailwind("w-full px-8 mt-4 py-2 rounded-full"),
                { backgroundColor: "#e0e0e0" },
              ]}
            >
              <Text
                style={[
                  tailwind(""),
                  { fontFamily: "Metropolis-Medium", color: colors.gray },
                ]}
              >
                Email
              </Text>
              <TextInput
                style={[
                  tailwind(` w-full  rounded-3xl`),
                  {
                    backgroundColor: "#e0e0e0",
                    fontSize: 16,
                    color: colors.textColor,
                  },
                ]}
                placeholder=""
              />
            </View>

            <View
              style={[
                tailwind("w-full px-8 mt-4 py-2 rounded-full"),
                { backgroundColor: "#e0e0e0" },
              ]}
            >
              <Text
                style={[
                  tailwind(""),
                  { fontFamily: "Metropolis-Medium", color: colors.gray },
                ]}
              >
                Mobile No
              </Text>
              <TextInput
                style={[
                  tailwind(` w-full  rounded-3xl`),
                  {
                    backgroundColor: "#e0e0e0",
                    fontSize: 16,
                    color: colors.textColor,
                  },
                ]}
                placeholder=""
              />
            </View>

            <View
              style={[
                tailwind("w-full px-8 mt-4 py-2 rounded-full"),
                { backgroundColor: "#e0e0e0" },
              ]}
            >
              <Text
                style={[
                  tailwind(""),
                  { fontFamily: "Metropolis-Medium", color: colors.gray },
                ]}
              >
                Address
              </Text>
              <TextInput
                style={[
                  tailwind(` w-full  rounded-3xl`),
                  {
                    backgroundColor: "#e0e0e0",
                    fontSize: 16,
                    color: colors.textColor,
                  },
                ]}
                placeholder=""
              />
            </View>

            <View
              style={[
                tailwind("w-full px-8 mt-4 py-2 rounded-full"),
                { backgroundColor: "#e0e0e0" },
              ]}
            >
              <Text
                style={[
                  tailwind(""),
                  { fontFamily: "Metropolis-Medium", color: colors.gray },
                ]}
              >
                Password
              </Text>
              <TextInput
                style={[
                  tailwind(` w-full  rounded-3xl`),
                  {
                    backgroundColor: "#e0e0e0",
                    fontSize: 16,
                    color: colors.textColor,
                  },
                ]}
                placeholder=""
              />
            </View>

            <View
              style={[
                tailwind("w-full px-8 mt-4 py-2 rounded-full"),
                { backgroundColor: "#e0e0e0" },
              ]}
            >
              <Text
                style={[
                  tailwind(""),
                  { fontFamily: "Metropolis-Medium", color: colors.gray },
                ]}
              >
                Confirm Password
              </Text>
              <TextInput
                style={[
                  tailwind(` w-full  rounded-3xl`),
                  {
                    backgroundColor: "#e0e0e0",
                    fontSize: 16,
                    color: colors.textColor,
                  },
                ]}
                placeholder=""
              />
            </View>

            <View style={[tailwind("mt-4")]}>
                <PrimaryButton buttonTitle="Save" />
            </View>
          </View>

          <View style={tailwind("w-full h-40")}></View>
        </ScrollView>
      </View>
      </GeneralScreen>
    </>
  );
};

export default UserProfile;
