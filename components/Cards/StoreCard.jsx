import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'
import { elevate } from 'react-native-elevate'
import colors from '../../assets/colors'
import BookmarkCutlined from '../../assets/icons/BookmarkCutlined'
import BookmarkFilled from '../../assets/icons/BookmarkFilled'
import Location from '../../assets/icons/Location'
import Timer from '../../assets/icons/Timer'
import Star from '../../assets/icons/Star'

const StoreCard = ({imageUri,storeTitle,rating,saleTag,distance, isBookmarked, time}) => {
    return (
        <View style={[tailwind("mb-4 py-2  bg-gray-50 rounded-xl overflow-hidden border-b"),{borderColor:"#ebebeb"}]}>
            <View style={[tailwind("w-full  flex-row justify-between ")]}>
                <View style={[tailwind("w-20 h-20 mr-4 rounded-xl overflow-hidden"), {...elevate(5)}]}>
                <Image source={imageUri} style={{ height: "100%", width: "100%" }} resizeMode="cover" />
                </View>

                <View style={[tailwind(" w-48 pr-3 ")]}>
                    <Text style={[tailwind(""),{fontFamily:"Metropolis-SemiBold", fontSize: 17, textTransform: "capitalize"}]}>
                        {storeTitle}</Text>
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

export default StoreCard
