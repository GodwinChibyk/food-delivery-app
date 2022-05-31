import React from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import Card2 from '../../components/Cards/Card2'
import GeneralScreen from '../../components/General/GeneralScreen'
import SearchInput from '../../components/General/Inputs/SearchInput'
import TopNavBar from '../../components/General/TopNavBar/TopNavBar'

const LatestOffers = () => {
    return (
        <>
    <GeneralScreen>
    <View style={[tailwind("bg-gray-50")]}>
      <TopNavBar title=" Latest Offers" />

      <View style={[tailwind("px-4 mt-2")]}>
        <Text style={[tailwind("w-4/6"), { color: colors.gray, lineHeight: 20 }]}>
            Find discounts, Offers special meals and more!
        </Text>


          <Pressable style={[tailwind("px-2 w-32 items-center py-1 rounded-2xl mt-3 mb-2"), 
          {backgroundColor:colors.primaryColor}, {...elevate(5)}]}>
              <Text style={[tailwind(""),{color:"white", fontFamily: "Metropolis-Medium"}]}>Check Offers</Text>
          </Pressable>

      </View>
      </View>

    <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false}>

      <View style={[tailwind("mt-0")]}>
        

        <View>
          <Card2
            imageUri={require("../../assets/img/food1.jpg")}
            title="Minut by tuk tuk"
          />
          <Card2
            imageUri={require("../../assets/img/food2.jpg")}
            title="Cafe de Noir"
          />
          <Card2
            imageUri={require("../../assets/img/food3.jpg")}
            title="Bakes by Tella"
          />
        </View>
      </View>

      
      <View style={tailwind("w-full h-40")}></View>
    </ScrollView>
    </GeneralScreen>
    </>
    )
}

export default LatestOffers
