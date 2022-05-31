import { View, Text, Image } from 'react-native'
import React from 'react'
import tailwind from 'tailwind-rn'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../assets/colors'

const SplashScreen = () => {
  return (
    <View style={[tailwind("w-full h-full absolute inset-0"),
    { backgroundColor: colors.fair },]}>
      <Image 
      source={require("../../assets/img/splash.png")}
      resizeMode="contain"
      style={[tailwind("w-full h-full")]}
       />
    </View>
  )
}

export default SplashScreen