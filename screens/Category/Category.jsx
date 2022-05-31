import React from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import colors from '../../assets/colors'
import tailwind from 'tailwind-rn'
import ArrowLeft from '../../assets/icons/ArrowLeft'
import GeneralScreen from '../../components/General/GeneralScreen'
import PrimaryButton from '../../components/General/Buttons/PrimaryButton'


const Category = ({navigation}) => {
    return (
        <>
     <GeneralScreen>
     <View style={[tailwind("h-full bg-gray-50 w-full")]}>
        <View style={[tailwind("bg-gray-50 pt-8 pb-3")]}>
          <View
            style={[tailwind("flex-row  items-center justify-between px-4")]}
          >
            <Pressable onPress={()=> navigation.goBack()} >
            <ArrowLeft color={colors.gray} width="30" height="30" />
            </Pressable>
            <View style={tailwind("flex-row items-center ")}>
              <Text
                style={[
                  tailwind(" text-center"),
                  {
                    fontFamily: "Metropolis-Bold",
                    fontSize: 20,
                  },
                ]}
              >
                Filter
              </Text>
            </View>

            <Pressable>
              <Text style={[tailwind(""),{fontSize:20,fontFamily:"Metropolis-SemiBold",color:colors.secondaryColor}]}>
                  Reset
              </Text>
            </Pressable>
          </View>
        </View>

        <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false}>
          
        <View style={[tailwind(" mt-6")]}>
            <Text style={[tailwind("px-4"),{fontSize:17, fontFamily:"Metropolis-SemiBold"}]}>Category</Text>
            <View style={[tailwind("flex-row mt-4  ")]}>
                <Pressable style={[tailwind("justify-center items-center w-1/4 rounded-md px-2 py-2 mx-4"),
                {backgroundColor:colors.primaryColor}]}>
                    <Text style={{color:"#fefefe",fontSize:17, fontFamily:"Metropolis-SemiBold"}}>Food</Text>
                </Pressable>
                <Pressable style={[tailwind("justify-center items-center w-1/4 rounded-md px-2 py-2 mr-4 bg-gray-200")]}>
                    <Text style={{fontSize:17, fontFamily:"Metropolis-Medium"}}>Drinks</Text>
                </Pressable>
                <Pressable style={[tailwind("justify-center items-center w-1/4 rounded-md px-2 py-2 mr-4 bg-gray-200")]}>
                    <Text style={{fontSize:17, fontFamily:"Metropolis-Medium"}}>Dessert</Text>
                </Pressable>
                <Pressable style={[tailwind("justify-center items-center w-1/4 rounded-md px-2 py-2 mr-4 bg-gray-200")]}>
                    <Text style={{fontSize:17, fontFamily:"Metropolis-Medium"}}>Drinks</Text>
                </Pressable>
            </View>

            <View style={[tailwind(" mt-6")]}>
            <Text style={[tailwind("px-4"),{fontSize:17, fontFamily:"Metropolis-SemiBold"}]}>Food groups</Text>
            <View style={[tailwind("flex-row flex-wrap  mt-4 px-4")]}>
                <Pressable style={[tailwind("items-center justify-center mr-3 mb-3 bg-white border rounded-md px-5 py-1"),
                {borderColor:colors.primaryColor}]}>
                    <Text style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize"}}>shawama</Text>
                </Pressable>
                <Pressable style={[tailwind("items-center justify-center mr-3 mb-3  bg-white border rounded-md px-5 py-1"),
                {borderColor:colors.primaryColor}]}>
                    <Text style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize"}}>Pizza</Text>
                </Pressable>
                <Pressable style={[tailwind("items-center justify-center mr-3 mb-3  bg-white border rounded-md px-5 py-1"),
                {borderColor:colors.primaryColor}]}>
                    <Text style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize"}}>Breakfast</Text>
                </Pressable>
                <Pressable style={[tailwind("items-center justify-center mr-3 mb-3  bg-white border rounded-md px-5 py-1"),
                {borderColor:colors.primaryColor}]}>
                    <Text style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize"}}>Soups</Text>
                </Pressable>
                <Pressable style={[tailwind("items-center justify-center mr-3 mb-3  bg-white border rounded-md px-5 py-1"),
                {borderColor:colors.primaryColor, backgroundColor:colors.primaryColor}]}>
                    <Text style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize", color:"#fefefe"}}>salads</Text>
                </Pressable>
                <Pressable style={[tailwind("items-center justify-center mr-3 mb-3  bg-white border rounded-md px-5 py-1"),
                {borderColor:colors.primaryColor}]}>
                    <Text style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize"}}>chicken</Text>
                </Pressable>
                <Pressable style={[tailwind("items-center justify-center mr-3 mb-3  bg-white border rounded-md px-5 py-1"),
                {borderColor:colors.primaryColor}]}>
                    <Text style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize"}}>pizza</Text>
                </Pressable>
            </View>
            </View>

            <View style={[tailwind(" mt-6")]}>
            <Text style={[tailwind("px-4"),{fontSize:17, fontFamily:"Metropolis-SemiBold"}]}>Price range</Text>
            <View style={[tailwind("flex-row flex-wrap  mt-4 px-4")]}>
                <Pressable style={[tailwind("items-center justify-center w-14 h-14  mr-3 mb-3  rounded-full bg-gray-200"),
                {minWidth:40, minHeight:40}]}>
                    <Text style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize"}}>₦50+</Text>
                </Pressable>
                
                <Pressable style={[tailwind("items-center w-14 h-14  justify-center mr-3 mb-3  rounded-full bg-gray-200 "),
                {minWidth:40, minHeight:40,backgroundColor:colors.primaryColor}]}>
                    <Text 
                    style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize",color:'#fefefe'}}>
                        ₦100+</Text>
                </Pressable>
                <Pressable style={[tailwind("items-center w-14 h-14 justify-center mr-3 mb-3  rounded-full bg-gray-200 "),
                {}]}>
                    <Text 
                    style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize"}}>
                        ₦200+</Text>
                </Pressable>
                <Pressable style={[tailwind("items-center w-14 h-14 justify-center mr-3 mb-3  rounded-full bg-gray-200 "),
                {}]}>
                    <Text 
                    style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize"}}>
                        ₦300+</Text>
                </Pressable>
                <Pressable style={[tailwind("items-center w-14 h-14 justify-center mr-3 mb-3  rounded-full bg-gray-200 "),
                {}]}>
                    <Text 
                    style={{ fontFamily:"Metropolis-Medium",textTransform:"capitalize"}}>
                        ₦500+</Text>
                </Pressable>
            </View>
            </View>

            <View style={[tailwind(" mt-12 px-4")]}>
                <PrimaryButton buttonTitle="apply filter" />
            </View>
        </View>

          <View style={tailwind("w-full h-40")}></View>
        </ScrollView>
      </View>
     </GeneralScreen>


    </>
    )
}

export default Category
