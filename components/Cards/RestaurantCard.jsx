import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useState } from 'react'
import { Image, Pressable } from 'react-native'
import { View, Text } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import BookmarkCutlined from '../../assets/icons/BookmarkCutlined'
import BookmarkFilled from '../../assets/icons/BookmarkFilled'
import Location from '../../assets/icons/Location'
import Star from '../../assets/icons/Star'
import Timer from '../../assets/icons/Timer'
import RestaurantPreview from '../../screens/RestaurantPreview/RestaurantPreview'

const RestaurantCard = ({imageUri,RestaurentTitle,rating,saleTag,distance, isBookmarked, time, screenName}) => {
 
    const {navigate} = useNavigation()

    return (
        <View style={[tailwind("mb-4 py-2 px-3 bg-gray-50 rounded-xl overflow-hidden"),{...elevate(8)}]}>
            <View style={[tailwind("w-full  flex-row justify-between ")]}>
                <Pressable 
                onPress={()=> navigate(screenName)}
                style={[tailwind("w-20 h-20 mr-4 rounded-xl overflow-hidden"), false && {...elevate(5)}]}>
                <Image source={imageUri} style={{ height: "100%", width: "100%" }} resizeMode="cover" />
                </Pressable>

                <View style={[tailwind(" w-48 pr-3 ")]}>
                    <Text style={[tailwind(""),{fontFamily:"Metropolis-SemiBold", fontSize: 17, textTransform: "capitalize"}]}>
                        {RestaurentTitle}</Text>
                    <View style={[tailwind("flex-row flex-wrap mt-2")]}>
                    <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", color:colors.gray}]}>{saleTag}</Text>
                    <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", color:colors.gray, fontSize:20, lineHeight: 20}]}> . </Text>
                    <View style={[tailwind("flex-row")]}>
                    <Location color={colors.lightGray} width="20" height="20"/>
                    <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", color:colors.gray}]}>{distance}</Text>
                    </View>
                    </View>
                    <View style={[tailwind("flex-row items-center mt-3")]}>
                        <View style={[tailwind("flex-row items-center mr-4")]}>
                            <Star color={colors.secondaryColor} width="20" height="20"/>
                            <Text style={[tailwind("ml-1"),{fontFamily: "Metropolis-SemiBold"}]}>{rating}</Text>
                        </View>
                        <View style={[tailwind("flex-row items-center")]}>
                            <Timer color={colors.lightGray} width="20" height="20"/>
                            <Text style={[tailwind("ml-1"),{fontFamily: "Metropolis-SemiBold", color:colors.gray}]}>{time}</Text>
                        </View>
                    </View>
                </View>

                <View style={[tailwind(" flex-1")]}>
                    <View style="relative">

                        {
                            !isBookmarked  && 
                        <Pressable style={[tailwind("w-5 h-5 absolute right-0")]}>
                        <BookmarkCutlined color={colors.gray} width="24" height="24"/>
                        </Pressable>
                        }
                        {
                            isBookmarked &&
                        <Pressable style={[tailwind("w-5 h-5 absolute right-0")]}>
                        <BookmarkFilled color={colors.secondaryColor} width="24" height="24"/>
                        </Pressable>
                        }
                    </View>
                </View>
            </View>

            
        </View>
    )
}

export default RestaurantCard
