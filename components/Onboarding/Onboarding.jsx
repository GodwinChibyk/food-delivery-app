import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import PrimaryButton from '../General/Buttons/PrimaryButton'
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native'



const Onboarding = ({imageSrc, title, screenName}) => {

  const navigation = useNavigation()
    return (
        <View style={style.container} >
          <StatusBar style='black'/>
          <View style={[tailwind("w-full min-h-full bg-gray-50"),
          {backgroundColor: colors.white }]}>
      <View
        style={[
          tailwind("w-full h-2/5  relative"),
          { },
        ]}
      >
        <Image source={imageSrc}
         style={{height: "100%", width: "100%"}} resizeMode="contain" />
        
      </View>

      <View style={[tailwind("mt-12 w-full justify-center flex-row")]}>
        <Text
          style={[
            {
              fontSize: 25,
              color: colors.textColor,
              fontFamily: "Cabin-Bold",
              textTransform: "capitalize"
            },
          ]}
        >
          {title}
        </Text>
        
      </View>
      

      <Text style={[tailwind("text-center px-10 mt-12 leading-6"), {color: colors.textColor, fontSize:16}]}>
        Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep
      </Text>

      <View style={[tailwind("mt-24 px-10")]}>
        <PrimaryButton buttonTitle="Next" buttonAction={()=> navigation.navigate(screenName)} />
      </View>
    </View>
        </View>
    )
}

const style = StyleSheet.create({
  container: {
    color: colors.textColor,
    backgroundColor: colors.white,
    paddingTop: Constants.statusBarHeight,
    fontFamily: "Metropolis-Regular",
  },
});

export default Onboarding
