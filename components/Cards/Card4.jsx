import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import Star from '../../assets/icons/Star'

const Card4 = ({imageUri, title,screenName}) => {
    const navigation = useNavigation()

    return (
        <Pressable 
        onPress={()=> navigation.navigate(screenName)}
         style={[tailwind(`w-full mt-5 mb-2 overflow-hidden flex-row bg-gray-50 rounded-xl`), {...elevate(2)}]}>

            <View style={[tailwind(`h-24 w-2/6  overflow-hidden mr-4 rounded-l-xl`)]}>
            <Image source={imageUri} style={{ height: "100%", width: "100%" }} resizeMode="cover" />
            </View>

            
            <View style={[tailwind("")]}>
            <Text 
            style={[tailwind(""), {fontFamily: "Metropolis-Medium", fontSize: 17, lineHeight:  17,}]}>
                {title}
            </Text>

            <View style={[tailwind("flex-row items-center my-1")]}>
                <Text style={{color: colors.secondaryColor}}>
                    <Star color={colors.secondaryColor} width="14" height="14" />
                    4.9
                </Text>
                <Text style={[tailwind("ml-0.5"), {color: colors.gray}]}>(124 ratings)</Text>
            </View>
                <View style={[tailwind("flex-row items-center")]}>
                <Text style={[tailwind(""), {color: colors.gray}]}>Cafe</Text>
                <Text style={[tailwind("ml-2"), {color: colors.secondaryColor, fontSize: 30, lineHeight: 18}]}>.</Text>
                <Text style={[tailwind("ml-2"), {color: colors.gray}]}>Western Food</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Card4
