import React, { useState } from 'react'
import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import Add from '../../assets/icons/Add'
import ArrowLeft from '../../assets/icons/ArrowLeft'
import Cart from '../../assets/icons/Cart'
import CheckIcon from '../../assets/icons/CheckIcon'
import Location from '../../assets/icons/Location'
import Remove from '../../assets/icons/Remove'
import GeneralScreen from '../../components/General/GeneralScreen'
import TopNavBar from '../../components/General/TopNavBar/TopNavBar'
import SuccessModal from '../../components/Modals/SuccessModal'

const Checkout = () => {
  const [checkoutModal, showCheckoutModal] = useState(false)
    return (
        <>
      <GeneralScreen>
      <View style={[tailwind("min-h-full w-full")]}>
        <TopNavBar title="checkout" />

        <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false}>
          <View style={[tailwind("px-4 mt-4")]}>

          <View style={[tailwind("py-4")]}>
            <View style={[tailwind("w-full  flex-row ")]}>
    <View style={[tailwind("w-14 h-14 mr-3 rounded-sm overflow-hidden"),{...elevate(2)}]}>
    <Image source={require("../../assets/img/map.png")} style={{ height: "100%", width: "100%" }} resizeMode="cover" />
    </View>

    <View style={[tailwind(" flex-1")]}>
      <View style={[tailwind("flex-row items-center justify-between mt-1")]}>
        <Text style={[tailwind(""),{fontFamily:"Metropolis-Bold", textTransform: "capitalize"}]}>
            Deliver To : Home</Text>
            <Pressable>
              <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", color:colors.secondaryColor}]}>Change</Text>
            </Pressable>
      </View>

      <View style={[tailwind(" flex-row items-center mt-3")]}>
        <Location color={colors.gray} width="16" height="16"/>
        <Text style={[tailwind(""),{fontFamily: "Metropolis-SemiBold", color:colors.gray, lineHeight:20, fontSize:13}]}>
            13A Hovine Street, New York
            </Text>
      </View>

    </View>

</View>
            </View>

            <View
              style={[
                tailwind("pb-2 border-b-2"),
                { borderColor: "#ebebeb"},
              ]}
            >
              <View style={[tailwind("mb-4 mt-4  bg-gray-50 ")]}>
                <View style={[tailwind("w-full  flex-row ")]}>
                  <View
                    style={[
                      tailwind("w-20 h-20 mr-4 rounded-xl overflow-hidden"),
                      { ...elevate(5) },
                    ]}
                  >
                    <Image
                      source={require("../../assets/img/food2.jpg")}
                      style={{ height: "100%", width: "100%" }}
                      resizeMode="cover"
                    />
                  </View>

                  <View style={[tailwind(" flex-1")]}>
                    <Text
                      style={[
                        tailwind("mt-3"),
                        {
                          fontFamily: "Metropolis-SemiBold",
                          fontSize: 17,
                          textTransform: "capitalize",
                        },
                      ]}
                    >
                      Cricpy Burger
                    </Text>

                    <View
                      style={[
                        tailwind("flex-row items-center justify-between mt-3"),
                      ]}
                    >
                      <Text
                        style={[
                          tailwind(""),
                          {
                            fontFamily: "Metropolis-Bold",
                            letterSpacing: 1,
                            color: colors.secondaryColor,
                            fontSize: 17,
                          },
                        ]}
                      >
                        ₦15.00
                      </Text>
                      <View
                        style={[
                          tailwind("flex-row px-3 py-2 rounded-md bg-gray-200"),
                        ]}
                      >
                        <Remove color={colors.gray} width="18" height="18" />
                        <Text
                          style={[
                            tailwind("mx-4"),
                            { fontFamily: "Metropolis-SemiBold", fontSize: 17 },
                          ]}
                        >
                          1
                        </Text>
                        <Add
                          color={colors.secondaryColor}
                          width="18"
                          height="18"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

            </View>

            <View style={[tailwind(" my-4")]}>
                <Text style={[tailwind(""),{fontSize:17, fontFamily:"Metropolis-SemiBold"}]}>Payment method</Text>
                <View style={[tailwind("w-full mt-4")]}>

                <View style={[tailwind("w-full  flex-row rounded-full bg-gray-100 px-4 py-2 mb-4")]}>
    <View style={[tailwind("w-10 h-10 mr-3 rounded-md overflow-hidden")]}>
    <Image source={require("../../assets/img/credit-card.png")} style={{ height: "100%", width: "100%" }} resizeMode="cover" />
    </View>

    <View style={[tailwind(" flex-1")]}>
      <View style={[tailwind("flex-row items-center justify-between")]}>
        <Text style={[tailwind(""),{fontFamily:"Metropolis-Medium", textTransform: "capitalize"}]}>
            Credit Card</Text>
            
      </View>

      <View style={[tailwind("  mt-1")]}>
        <Text style={[tailwind(""),{fontFamily: "Metropolis-Medium", color:colors.gray, lineHeight:20, fontSize:12}]}>
            Pay with MasterCard,Visa or Verve
            </Text>
      </View>

    </View>

    {/* <View style={[tailwind(" justify-center")]}>
    <View style={[tailwind("w-6 h-6 rounded-full justify-center items-center"),{backgroundColor:colors.primaryColor}]}>
        <CheckIcon color="#fefefe" width="15" height="15"/>
    </View>

    </View> */}


</View>

                <View style={[tailwind("w-full  flex-row rounded-full bg-white px-4 py-2"),{...elevate(1)}]}>
    <View style={[tailwind("w-10 h-10 mr-3 rounded-md overflow-hidden")]}>
    <Image source={require("../../assets/img/flutterwave.png")} style={{ height: "100%", width: "100%" }} resizeMode="cover" />
    </View>

    <View style={[tailwind(" flex-1")]}>
      <View style={[tailwind("flex-row items-center justify-between")]}>
        <Text style={[tailwind(""),{fontFamily:"Metropolis-Medium", textTransform: "capitalize"}]}>
            Flutter Wave</Text>
            
      </View>

      <View style={[tailwind("  mt-1")]}>
        <Text style={[tailwind(""),{fontFamily: "Metropolis-Medium", color:colors.gray, lineHeight:20, fontSize:12}]}>
            Faster and safe way to send money
            </Text>
      </View>

    </View>

    <View style={[tailwind(" justify-center")]}>
    <View style={[tailwind("w-6 h-6 rounded-full justify-center items-center"),{backgroundColor:colors.primaryColor}]}>
        <CheckIcon color="#fefefe" width="15" height="15"/>
    </View>

    </View>


</View>
                </View>
            </View>

            <View style={[tailwind("pb-4 border-b-2"),{borderColor: "#ebebeb"}]}>
              <View style={[tailwind("flex-row justify-between mt-4")]}>
                <Text style={[tailwind("capitalize"),{fontFamily: "Metropolis-SemiBold", fontSize:17}]}>
                  item total
                </Text>
                <Text style={[tailwind("capitalize"),{fontFamily: "Metropolis-SemiBold", fontSize:18, letterSpacing:1}]}>₦50.00</Text>
              </View>
              
              <View style={[tailwind("flex-row justify-between mt-4")]}>
                <Text style={[tailwind("capitalize"),{fontFamily: "Metropolis-Medium", fontSize:17, color:"#3289a8"}]}>
                  delivery fee
                </Text>
                <Text style={[tailwind("capitalize"),{fontFamily: "Metropolis-Medium", fontSize:17, color:"#3289a8"}]}>free</Text>
              </View>
            </View>


            <View style={[tailwind("flex-row justify-between py-4")]}>
              <Text style={[tailwind("capitalize"),{fontFamily: "Metropolis-Medium", fontSize:25, letterSpacing:1}]}>Total</Text>
              <Text style={[tailwind("capitalize"),{fontFamily: "Metropolis-Medium", fontSize:25, letterSpacing:1}]}>₦70.00</Text>
            </View>

            

            <Pressable 
            onPress={()=> showCheckoutModal(true)}
            style={[tailwind("w-full rounded-xl px-6 py-4 mt-4 items-center"),
            {backgroundColor:colors.primaryColor},{...elevate(5)}]}>
          
              <Text style={[tailwind(""),{fontSize:20, fontFamily: "Metropolis-Medium", color:"#fefefe"}]}>
                  Confirm order
              </Text>
            </Pressable>
          </View>

          <View style={tailwind("w-full h-40")}></View>
        </ScrollView>
      </View>
      </GeneralScreen>

    {checkoutModal && <SuccessModal closeModal={()=> showCheckoutModal(false)} />}

      
    </>
    )
}

export default Checkout
