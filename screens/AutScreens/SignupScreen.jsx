import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import tailwind from "tailwind-rn";
import colors from "../../assets/colors";
import CloseEyeIcon from "../../assets/icons/CloseEyeIcon";
import OpenEyeIcon from "../../assets/icons/OpenEyeIcon";
import PrimaryButton from "../../components/General/Buttons/PrimaryButton";
import GeneralScreen from "../../components/General/GeneralScreen";
import Input from "../../components/General/Inputs/Input";
import Wrapper from "../../components/General/Wrapper";
import SuccessModal from "../../components/Modals/SuccessModal";
import { auth } from "../../firebase";
import Login from "./Login";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true)
  const [showConfirmPassword, setShowConfirmPassword] = useState(true)

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm();

  const handleRegister = (data) => {
    auth
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(() => {
    navigation.navigate("Login")
      
    })
    .catch(e => alert(e.message))
  };

  return (
    <>
    <GeneralScreen>
      <Wrapper>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps = "handled"  >
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
            Sign Up
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
            Add your details to sign up
          </Text>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Name"
                onChange={onChange}
                value={value}
                error={errors?.name}
                errorMessage={errors.name?.message}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Name is required!",
              },
              minLength: {
                value: 5,
                message: "Name should be atlest 5 alphabets",
              },
            }}
          />

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
            name="phone"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Phone"
                onChange={onChange}
                value={value}
                error={errors?.phone}
                errorMessage={errors.phone?.message}
                keyboardType= "number-pad"
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Phone number is required!",
              },
              minLength: {
                value: 11,
                message: "Phone number should be atlest 11 digits",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "Not a valid number"
              },
            }}
          />

          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Address"
                onChange={onChange}
                value={value}
                error={errors?.address}
                errorMessage={errors.address?.message}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Address  is required!",
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

          <Controller
            control={control}
            name="confirm_password"
            render={({ field: { onChange, value } }) => (
              <View style={[tailwind("relative")]}>
                <Input
                placeholder="Confirm Password"
                onChange={onChange}
                value={value}
                error={errors?.confirm_password}
                errorMessage={errors.confirm_password?.message}
                secureTextEntry={showConfirmPassword}
              />
               <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={[tailwind("absolute right-4 top-1/2")]}
              >
                {showConfirmPassword ? (
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
                message: "Confirm Password is required!",
              },
              validate: value => value === getValues("password") ||  'password do not match'
            }}
          />

          <View style={tailwind("mt-10")}>
            <PrimaryButton
              buttonTitle="Sign Up"
              buttonAction={handleSubmit(handleRegister)}
            />
          </View>

          <View style={[tailwind("flex-row mt-8 justify-center")]}>
            <Text>Already have an Account?</Text>
            <TouchableOpacity
              style={tailwind("ml-1")}
              onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={{
                  fontFamily: "Metropolis-Bold",
                  color: colors.secondaryColor,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </Wrapper>
    </GeneralScreen>
    </>
  );
};

export default SignupScreen;
