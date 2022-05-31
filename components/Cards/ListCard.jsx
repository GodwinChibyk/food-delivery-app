import React from 'react'
import { View, Text } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import ArrowRight from '../../assets/icons/ArrowRight'

const ListCard = ({actionCount, title, children}) => {
    return (
        <View style={[tailwind("w-full  pr-4  mb-4 relative justify-center")]}>


<View 
style={[tailwind("w-full  bg-gray-100 flex-row  rounded-md justify-between items-center pl-20 pr-12 relative"), 
{minHeight: 80}, {...elevate(1)}]}>
  <Text style={[tailwind(""), {fontSize: 17, fontFamily: "Metropolis-SemiBold", textTransform: 'capitalize'}]}>
  {title}
  </Text>
  {actionCount == undefined  ? <View></View> : 
  <View style={[tailwind(" rounded-full px-0.5 items-center justify-center"), 
  {backgroundColor:colors.secondaryColor, minWidth: 20, minHeight: 20}]}>
      <Text style={[tailwind(""), 
      {color:"white", letterSpacing:1, fontSize: 12}]}>
          {actionCount}
      </Text>
  </View>

  }
</View>

<View style={[tailwind("w-12 h-12 bg-gray-200 rounded-full  justify-center items-center overflow-hidden  absolute left-3 "), 
{...elevate(3)}]}>
    {children}
</View>

<View style={[tailwind("w-10 h-10 bg-gray-100 rounded-full justify-center items-center absolute right-0 "), {...elevate(1)}]}>
      <ArrowRight width="24" height="24" color={colors.gray} />
</View>
</View>
    )
}

export default ListCard
