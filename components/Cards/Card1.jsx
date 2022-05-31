import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'

const Card1 = ({imageUri, title,screenName}) => {
    const navigation = useNavigation()

 
    return (
        <Pressable 
        onPress={()=> navigation.navigate(screenName)}
        style={[tailwind("w-28 mr-4 mb-1 bg-gray-50 rounded-2xl pb-2"), {...elevate(3)}]}>
            <View style={[tailwind("w-full h-24 rounded-t-2xl overflow-hidden ")]}>
            <Image 
            source={ imageUri}
            style={{ height: "100%", width: "100%" }} 
            resizeMode="cover" 
            />
            </View>
            
            <Text style={[tailwind("text-center mt-2"), 
            {color: colors.textColor, fontFamily: "Metropolis-Medium", fontSize: 16, textTransform: "capitalize"}]}
            >{title}</Text>
        </Pressable>
    )
}

export default Card1
