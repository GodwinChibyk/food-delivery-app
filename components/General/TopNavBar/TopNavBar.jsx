import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CartScreen from '../../../screens/Cart/CartScreen'
import tailwind from 'tailwind-rn'
import ArrowLeft from '../../../assets/icons/ArrowLeft'
import colors from '../../../assets/colors'
import Cart from '../../../assets/icons/Cart'

const TopNavBar = ({title}) => {
    const navigation = useNavigation()
  return (
    <View style={[tailwind("bg-gray-50 pt-4 pb-3")]}>
    <View
    style={[tailwind("flex-row  items-center justify-between px-4")]}
  >
    <Pressable onPress={()=> navigation.goBack()} >
    <ArrowLeft color={colors.gray} width="30" height="30" />
    </Pressable>
    <View style={tailwind("flex-row items-center ")}>
      <Text
        style={[
          tailwind(" text-center capitalize"),
          {
            fontFamily: "Metropolis-Bold",
            fontSize: 20,
          },
        ]}
      >
        {title}
      </Text>
    </View>

    <Pressable onPress={()=> navigation.navigate(CartScreen)}  >
      <Cart color={colors.gray} width="28" height="28" />
    </Pressable>
  </View>
   </View>
  )
}

export default TopNavBar