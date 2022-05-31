import React from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import ArrowLeft from '../../assets/icons/ArrowLeft'
import Cart from '../../assets/icons/Cart'
import OrderCard from '../../components/Cards/OrderCard'
import GeneralScreen from '../../components/General/GeneralScreen'
import TopNavBar from '../../components/General/TopNavBar/TopNavBar'

const Orders = () => {
    return (
        <>
        <GeneralScreen>
        <View style={[tailwind("min-h-full w-full")]}>
          <View style={[tailwind("bg-gray-50 pb-3")]}>
           <TopNavBar title="my orders" />

            <View style={[tailwind("flex-row mx-4 mt-10 border-b"), {borderColor: colors.lightGray}]}>
              <Pressable style={[tailwind("w-1/3 items-center border-b"), {fontSize:17, fontFamily: "Metropolis-Bold", borderColor: colors.primaryColor}]}>
                  <Text style={[tailwind(" pb-3 "), {fontSize:17, fontFamily: "Metropolis-SemiBold", letterSpacing: 1, color:colors.primaryColor}]}>
                      Pr-Orders
                  </Text>
              </Pressable>

              <Pressable style={[tailwind("w-1/3 items-center")]}>
                  <Text style={[tailwind(" pb-3"), {fontSize:17, fontFamily: "Metropolis-SemiBold", letterSpacing: 1, color:colors.gray}]}>
                      Oncoming
                  </Text>
              </Pressable>

              <Pressable style={[tailwind("w-1/3 items-center")]}>
                  <Text style={[tailwind(" pb-3"), {fontSize:17, fontFamily: "Metropolis-SemiBold", letterSpacing: 1, color:colors.gray}]}>
                      History
                  </Text>
              </Pressable>
          </View>
          </View>

          <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false}>

              <View style={[tailwind("px-4 mt-6")]}>
                  <OrderCard 
                  imageUri={require("../../assets/img/food2.jpg")} 
                  title="cheese burger" price="₦ 15.00" date="25 may 2021" time="11:30" 
                  />
                   <OrderCard 
                  imageUri={require("../../assets/img/food3.jpg")} 
                  title="cheese burger" price="₦ 15.00" date="25 may 2021" time="11:30" 
                  />
                  <OrderCard 
                  imageUri={require("../../assets/img/food1.jpg")} 
                  title="cheese burger" price="₦ 15.00" date="25 may 2021" time="11:30" 
                  />
                  <OrderCard 
                  imageUri={require("../../assets/img/food3.jpg")} 
                  title="cheese burger" price="₦ 15.00" date="25 may 2021" time="11:30" 
                  />
              </View>
  
            <View style={tailwind("w-full h-40")}></View>
          </ScrollView>
        </View>
        </GeneralScreen>
      </>
    )
}

export default Orders
