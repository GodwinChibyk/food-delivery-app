import React from 'react'
import { View, Text, Image } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import ArrowRight from '../../assets/icons/ArrowRight'

const Card5 = ({imageUri, title, items}) => {
    return (
        <View style={[tailwind("w-full pl-10 pr-4 mb-6 relative justify-center")]}>


              <View 
              style={[tailwind("w-full  bg-white rounded-l-3xl  rounded-r-md justify-center pl-14 relative"), 
              {minHeight: 90}, {...elevate(8)}]}>
                <Text style={[tailwind(""), {fontSize: 20, fontFamily: "Metropolis-SemiBold", letterSpacing: 0.5}]}>
                    {title}
                </Text>
                <Text style={[tailwind(""), {color: colors.gray, fontFamily: "Metropolis-Medium", fontSize: 14, letterSpacing: 0.5}]}>
                    {items} items
                </Text>
              </View>

              <View style={[tailwind("w-20 h-20 bg-gray-50 rounded-full  justify-center items-center overflow-hidden  absolute  "), 
              {...elevate(10)}]}>
                  <Image 
                  source={imageUri} 
                  style={{width:"100%", height:"100%"}} 
                  resizeMode="cover" />
              </View>

              <View style={[tailwind("w-10 h-10 bg-white rounded-full justify-center items-center absolute right-0 "), {...elevate(9)}]}>
                    <ArrowRight width="24" height="24" color={colors.secondaryColor} />
              </View>
          </View>
    )
}

export default Card5
