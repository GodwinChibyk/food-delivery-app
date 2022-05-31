import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { elevate } from 'react-native-elevate'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import Star from '../../assets/icons/Star'

const Card3 = ({imageUri, title,screenName}) => {
    const navigation = useNavigation()
    return (
        <Pressable 
        onPress={()=> navigation.navigate(screenName)}
        style={[tailwind(`w-48 mt-4 mb-2 overflow-hidden mr-4 bg-gray-50 rounded-2xl pb-2`),{...elevate(5)}]}>
            <View style={[tailwind(`h-28 w-full rounded-t-2xl overflow-hidden`)]}>
            <Image source={imageUri} style={{ height: "100%", width: "100%" }} resizeMode="cover" />
            </View>
            <Text 
            style={[tailwind("px-2"), {fontFamily: "Metropolis-Medium", fontSize: 17, lineHeight:  30}]}>
                {title}
            </Text>
            
            <View style={[tailwind("flex-row px-2")]}>
                <Text style={[tailwind("mr-2"), {color: colors.gray}]}>Cafe</Text>
                <Text style={[tailwind("mr-2"), {color: colors.gray}]}>Western Food</Text>
                <Text style={{color: colors.secondaryColor}}>
                    <Star color={colors.secondaryColor} width="14" height="14" />
                    4.9 
                </Text>
            </View>
        </Pressable>
    )
}

export default Card3
