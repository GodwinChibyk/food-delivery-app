import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import PrimaryButton from '../../components/General/Buttons/PrimaryButton'
import GeneralScreen from '../../components/General/GeneralScreen'
import Input from '../../components/General/Inputs/Input'
import Wrapper from '../../components/General/Wrapper'
import ResetPasswordNew from './ResetPasswordNew'

const ResetPasswordEmail = () => {
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
          Reset Password
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
          Please enter your email to receive a link to create a new password via email
        </Text>

        <Input placeholder="Email" />
        

        <View style={tailwind("mt-10")}>
          <PrimaryButton buttonTitle="Send" screenName={ResetPasswordNew} />
        </View>


        
      </View>
          </SafeAreaView>
    </Wrapper>
      </GeneralScreen>
    )
}

export default ResetPasswordEmail
