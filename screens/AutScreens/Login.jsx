import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "tailwind-rn";
import colors from "../../assets/colors";
import CloseEyeIcon from "../../assets/icons/CloseEyeIcon";
import OpenEyeIcon from "../../assets/icons/OpenEyeIcon";
import PrimaryButton from "../../components/General/Buttons/PrimaryButton";
import GeneralScreen from "../../components/General/GeneralScreen";
import Input from "../../components/General/Inputs/Input";
import Wrapper from "../../components/General/Wrapper";
import BottomTabNavigation from "../../customs/BottomTabNavigation/BottomTabNavigation";
import { auth } from "../../firebase";
import HomeIndex from "../Home/HomeIndex";
import ResetPasswordEmail from "./ResetPasswordEmail";
import SignupScreen from "./SignupScreen";

const Login = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserLogin = (data) => {
    auth
    .signInWithEmailAndPassword(data.email, data.password)
    .then(() => {
       setTimeout(() => {
        navigation.push("BottomTabNavigation")
       }, 0);
    })
    .catch(e => alert(e.message))
  }


  return (
    <GeneralScreen>
    <Wrapper>
      <SafeAreaView style={[tailwind("min-h-full flex justify-center")]}>
      <View style={[tailwind("mt-4")]}>
        <Text
          style={[
            tailwind("text-center "),
            {
              fontSize: 30,
              color: colors.textColor,
              fontFamily: "Metropolis-Bold",
              letterSpacing: 1,
            },
          ]}
        >
          Login
        </Text>
        <Text
          style={[
            tailwind("text-center pt-3 "),
            {
              //   fontSize: 30,
              color: colors.textColor,
              fontFamily: "Metropolis-Regular",
            },
          ]}
        >
          Add your details to login
        </Text>

        <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Email"
                onChange={onChange}
                value={value}
                error={errors?.email}
                errorMessage={errors.email?.message}
                keyboardType ="email-address"
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Email is required!",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Not a valid email",
              },
            }}
          />

        <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <View style={[tailwind("relative")]}>
                <Input
                placeholder="Password"
                onChange={onChange}
                value={value}
                error={errors?.password}
                errorMessage={errors.password?.message}
                secureTextEntry={showPassword}
              />
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                style={[tailwind("absolute right-4 top-1/2")]}
              >
                {showPassword ? (
                  <CloseEyeIcon
                    width="24"
                    height="24"
                    color={colors.lightGray}
                  />
                ) : (
                  <OpenEyeIcon
                    width="24"
                    height="24"
                    color={colors.gray}
                  />
                )}
              </Pressable>
              </View>
            )}
            rules={{
              required: {
                value: true,
                message: "Password is required!",
              },
              minLength: {
                value: 8,
                message: "password should be atlest 8 characters",
              },
            }}
          />

        <View style={tailwind("mt-10")}>
          <PrimaryButton buttonTitle="Login" buttonAction={handleSubmit(handleUserLogin)} />
        </View>

        <Pressable 
        style={tailwind("mt-8")}
        onPress={()=> {navigation.navigate("ResetPasswordEmail")}}
        >
          <Text style={tailwind("text-center")}>Forgot your password?</Text>
        </Pressable>

        <View style={[tailwind("flex-row mt-8 justify-center")]}>
          <Text>Don't have and Account?</Text>
          <TouchableOpacity
            style={tailwind("ml-1")}
            onPress={() =>
              navigation.navigate("SignupScreen")
            }
          >
            <Text
              style={{
                fontFamily: "Metropolis-Bold",
                color: colors.secondaryColor,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
    </Wrapper>
    </GeneralScreen>
  );
};

export default Login;
