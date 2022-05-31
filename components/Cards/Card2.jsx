import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import Star from '../../assets/icons/Star'
import RestaurantPreview from '../../screens/RestaurantPreview/RestaurantPreview'

const Card2 = ({imageUri, title, screenName}) => {
  const navigation = useNavigation();

    return (
        <Pressable 
        onPress={()=>{navigation.navigate(screenName)}}
        style={[tailwind(`w-full mb-6 overflow-hidden`)]}>
            <View style={[tailwind(`h-48 w-full  overflow-hidden`)]}>
            <Image source={imageUri} style={{ height: "100%", width: "100%" }} resizeMode="cover" />
            </View>
            <Text 
            style={[tailwind("px-4 "), {fontFamily: "Metropolis-Medium", fontSize: 17, lineHeight:  30}]}>
                {title}
            </Text>
            
            <View style={[tailwind("px-4 flex-row")]}>
                <Text style={{color: colors.secondaryColor}}>
                    <Star color={colors.secondaryColor} width="14" height="14" />
                    4.9
                </Text>
                <Text style={[tailwind("ml-0.5"), {color: colors.gray}]}>(124 ratings) Cafe</Text>
                <Text style={[tailwind("ml-2"), {color: colors.gray}]}>Western Food</Text>
            </View>
        </Pressable>
    )
}

export default Card2
