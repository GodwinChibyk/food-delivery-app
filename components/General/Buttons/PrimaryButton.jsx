
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'
import colors from '../../../assets/colors'

const PrimaryButton = ({buttonTitle, buttonAction}) => {

    return (
        <View>
      <Pressable 
      style={[tailwind("border items-center px-5 py-4 rounded-3xl "), 
      {borderColor: colors.primaryColor, backgroundColor: colors.primaryColor}]}
      onPress = {buttonAction}
      >
        <Text style={[tailwind("capitalize text-base font-semibold"),{color: "white"}]}>{buttonTitle}</Text>
      </Pressable>
    </View>
    )
}

export default PrimaryButton
