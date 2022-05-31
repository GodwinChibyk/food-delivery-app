import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { block } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import PrimaryButton from '../../components/General/Buttons/PrimaryButton'
import GeneralScreen from '../../components/General/GeneralScreen'
import Input from '../../components/General/Inputs/Input'
import Wrapper from '../../components/General/Wrapper'

const OtpScreen = () => {
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
          We have sent an OTP to your Mobile
        </Text>
        <View>
        <Text
          style={[
            tailwind("text-center pt-3 "),
            {
              //   fontSize: 30,
              color: colors.textColor,
              fontFamily: "Metropolis-Regular",
              lineHeight: 25
            },
          ]}
        >
          Please check your mobile number 0703********12 
        </Text>
        <Text
          style={[
            tailwind("text-center"),
            {
              //   fontSize: 30,
              color: colors.textColor,
              fontFamily: "Metropolis-Regular",
            },
          ]}
        >
          continue to reset your password
        </Text>
        </View>

        <View style={[tailwind("flex-row justify-between"), {}]}>
        <Input placeholder="*" size="w-1/5" />
        <Input placeholder="*" size="w-1/5"/>
        <Input placeholder="*" size="w-1/5"/>
        <Input placeholder="*" size="w-1/5"/>
        </View>


        <View style={tailwind("mt-10")}>
          <PrimaryButton buttonTitle="Next" />
        </View>


        <View style={[tailwind("flex-row mt-8 justify-center")]}>
          <Text>Didn't Receive?</Text>
          <Pressable
            style={tailwind("ml-1")}
            onPress={() =>
              alert("You're about to enter into the dark world")
            }
          >
            <Text
              style={{
                fontFamily: "Metropolis-Bold",
                color: colors.secondaryColor,
              }}
            >
              Click Here
            </Text>
          </Pressable>
        </View>
      </View>
        </SafeAreaView>
    </Wrapper>
      </GeneralScreen>
    )
}

export default OtpScreen
