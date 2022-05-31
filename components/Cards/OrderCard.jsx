import React from 'react'
import { Image, Pressable } from 'react-native'
import { View, Text } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'

const OrderCard = ({imageUri,title,price,date,time}) => {
    return (
        <View style={[tailwind("mb-8")]}>
            {/* <Text style={{color:colors.gray}}>25 May 2021</Text> */}
            <View style={[tailwind("w-full flex-row ")]}>
                <View style={[tailwind("w-16 h-16 rounded-xl overflow-hidden"), {...elevate(5)}]}>
                <Image source={imageUri} style={{ height: "100%", width: "100%" }} resizeMode="cover" />
                </View>

                <View style={[tailwind("mx-4")]}>
                    <Text style={[tailwind(""),{fontFamily:"Metropolis-SemiBold", fontSize: 17, textTransform: "capitalize"}]}>
                        {title}</Text>
                    <View style={[tailwind("flex-row mt-4")]}>
                    <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", color:colors.gray}]}>{date}</Text>
                    <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", color:colors.gray, fontSize:20, lineHeight: 20}]}> . </Text>
                    <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", color:colors.gray}]}>{time}</Text>
                    </View>
                </View>

                <View style={[tailwind("flex-1 items-end")]}>
                    <Text style={[tailwind(""),{fontFamily: "Metropolis-Bold", color:colors.secondaryColor}]}>{price}</Text>
                </View>
            </View>

            <View style={[tailwind("mt-3 flex-row justify-between")]}>
                <Pressable style={[tailwind("w-40 p-2 rounded-lg items-center"),{backgroundColor:colors.primaryColor}, {...elevate(1)}]}>
                    <Text style={{color: "white", fontFamily: "Metropolis-Medium", letterSpacing:1}}>Reorder</Text>
                </Pressable>

                <Pressable style={[tailwind("w-40 p-2 rounded-lg items-center bg-gray-200"), {...elevate(1)}]}>
                    <Text style={{ fontFamily: "Metropolis-Medium", letterSpacing:1}}>Get Help</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default OrderCard
