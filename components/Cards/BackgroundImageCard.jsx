import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import Star from '../../assets/icons/Star'

const BackgroundImageCard = ({imageUri, title}) => {
    return (
        <View style={[tailwind("w-full h-48 relative mb-3")]}>

            
            <ImageBackground
              source={ imageUri }
              resizeMode="cover"
              style={{width: "100%", height: "100%"}}
            >

<View style={[tailwind("absolute inset-0 z-10"), {backgroundColor: 'rgba(52, 52, 52, 0.4)'}]}>

              <View style={[tailwind("px-4 py-4 w-full h-full justify-end ")]}>
            <Text 
            style={[tailwind(""), {fontFamily: "Metropolis-Bold", fontSize: 18,  color: "white", textTransform: "capitalize"}]}>
                {title}
            </Text>

            <View style={[tailwind("flex-row items-center my-1")]}>
                <Text style={{color: colors.secondaryColor}}>
                    <Star color={colors.secondaryColor} width="14" height="14" />
                    4.9
                </Text>
                <View style={[tailwind("flex-row items-center")]}>
                <Text style={[tailwind("ml-1"), {color: "white", fontFamily: "Metropolis-Medium"}]}>Mirute by tuk tuk</Text>
                <Text style={[tailwind("ml-2"), {color: colors.secondaryColor, fontSize: 30, lineHeight: 18}]}>.</Text>
                <Text style={[tailwind("ml-2"), {color: "white", fontFamily: "Metropolis-Medium"}]}>Desserts</Text>
                </View>
            </View>
            </View>
</View>

              
            </ImageBackground>
          </View>
    )
}

export default BackgroundImageCard
