import React from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import ArrowLeft from '../../assets/icons/ArrowLeft'
import Cart from '../../assets/icons/Cart'
import GeneralScreen from '../../components/General/GeneralScreen'
import TopNavBar from '../../components/General/TopNavBar/TopNavBar'

const Notifications = () => {
    return (
        <>
       <GeneralScreen>
       <View style={[tailwind("min-h-full w-full")]}>
          <TopNavBar title="Notifications" />
  
          <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false}>

        <View style={[tailwind(" mt-8")]}>

          <View style={[tailwind("flex-row px-4 w-full border border-gray-200 py-3")]}>
              <View style={[tailwind("w-3 h-3 mr-6 rounded-full mt-1"),{backgroundColor:colors.secondaryColor}]}></View>
              <View>
                  <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", fontSize: 17}]}>
                      Your orders has been picked up
                    </Text>
                  <Text style={[tailwind("mt-1"),{fontFamily: "Metropolis-Medium", color:colors.gray}]}>Now</Text>
              </View>
          </View>

          <View style={[tailwind("flex-row px-4 w-full border border-gray-200 py-3")]}>
              <View style={[tailwind("w-3 h-3 mr-6 rounded-full mt-1"),{backgroundColor:colors.secondaryColor}]}></View>
              <View>
                  <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", fontSize: 17}]}>
                      Your orders has been delivered
                    </Text>
                  <Text style={[tailwind("mt-1"),{fontFamily: "Metropolis-Medium", color:colors.gray}]}>
                      1 h ago
                  </Text>
              </View>
          </View>

          <View style={[tailwind("flex-row px-4 w-full border border-gray-200 py-3")]}>
              <View style={[tailwind("w-3 h-3 mr-6 rounded-full mt-1"),{backgroundColor:colors.secondaryColor}]}></View>
              <View>
                  <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", fontSize: 17}]}>
                      Lorem ipsum dolor sit amet.
                    </Text>
                  <Text style={[tailwind("mt-1"),{fontFamily: "Metropolis-Medium", color:colors.gray}]}>
                      3 h ago
                  </Text>
              </View>
          </View>

          <View style={[tailwind("flex-row px-4 w-full border border-gray-200 py-3")]}>
              <View style={[tailwind("w-3 h-3 mr-6 rounded-full mt-1"),{backgroundColor:colors.secondaryColor}]}></View>
              <View>
                  <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", fontSize: 17}]}>
                      Your orders has been delivered
                    </Text>
                  <Text style={[tailwind("mt-1"),{fontFamily: "Metropolis-Medium", color:colors.gray}]}>
                      2 Sep 2021
                  </Text>
              </View>
          </View>

        </View>
  
            <View style={tailwind("w-full h-40")}></View>
          </ScrollView>
        </View>
       </GeneralScreen>
      </>
    )
}

export default Notifications
