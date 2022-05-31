import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import { View, Text, ImageBackground, Pressable } from "react-native";
import tailwind from "tailwind-rn";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import Cart from "../../assets/icons/Cart";
import colors from "../../assets/colors";
import Star from "../../assets/icons/Star";
import { elevate } from "react-native-elevate";
import Favourity from "../../assets/icons/Favourity";
import Select from "../../components/General/Select/Select";
import Remove from "../../assets/icons/Remove";
import Card5 from "../../components/Cards/Card5";
import ArrowRight from "../../assets/icons/ArrowRight";
import Add from "../../assets/icons/Add";

const ProductScreen = ({navigation}) => {
  return (
    
    <View style={[tailwind("h-full w-full bg-gray-50")]}>

      <View style={[tailwind("w-full h-2/6 relative ")]}>
      
        <ImageBackground
          source={require("../../assets/img/food1.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        >
            <View style={[tailwind("absolute inset-0 z-10"), {backgroundColor: 'rgba(52, 52, 52, 0.4)'}]}>

        <View style={[tailwind(""), {paddingTop: Constants.statusBarHeight}]}>
            <View style={[tailwind("pt-6 px-4")]}>
            <View style={[tailwind("flex-row justify-between")]}>
                <Pressable onPress={()=>{
                      navigation.goBack()
                    }}
                    style={[tailwind("p-1 rounded-full"), {backgroundColor: colors.overLayColor}]}>
                <ArrowLeft color="white" width="30" height="30" />
                </Pressable>
                <Cart color="white" width="28" height="28"/>
            </View>
            </View>
        </View>
        </View>
        </ImageBackground>
      </View>

        <View style={[tailwind("w-full bg-gray-50  pt-6 relative  -mt-7"), {borderTopStartRadius: 35, borderTopEndRadius: 35}]}>
            <View style={[tailwind("w-12 h-12 bg-gray-50 rounded-full absolute -top-6 right-4 justify-center items-center"), {...elevate(2)}]}>
                <Favourity color={colors.primaryColor} width="22"  height="22" />
            </View>
            <Text style={[tailwind("px-4"), {fontFamily:"Metropolis-SemiBold", fontSize: 20, letterSpacing: 1, color:colors.textColor}]}>
                Tandoori chicken pizza
            </Text>
            <View style={[tailwind("flex-row justify-between px-4 pt-3 w-full")]}>
                <View style={[tailwind("")]}>
                    <View style={[tailwind("flex-row justify-between")]}>
                        <Star color={colors.secondaryColor} width="15"  height="15" />
                        <Star color={colors.secondaryColor} width="15"  height="15" />
                        <Star color={colors.secondaryColor} width="15"  height="15" />
                        <Star color={colors.secondaryColor} width="15"  height="15" />
                    </View>
                    <Text style={[tailwind(""), {color:colors.secondaryColor, lineHeight: 24}]}>4 star rating</Text>
                </View>

                <View style={[tailwind("")]}>
                    <Text style={[tailwind(""), {fontSize: 25, fontFamily: "Metropolis-SemiBold"}]}>₦. 750</Text>
                    <Text style={{color: colors.gray, fontSize: 14}}>/ per Portion</Text>
                </View>
            </View>

            <Text style={[tailwind("mt-4 px-4 mb-1"), {fontFamily: "Metropolis-SemiBold", letterSpacing: 1, fontSize: 15}]}>Description</Text>
            <Text style={[tailwind("px-4"), {lineHeight: 20, color:colors.gray}]}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Corporis sunt voluptas recusandae provident sit. Aut, quidem!
            </Text>

            <View style={[tailwind("flex-row px-4  mt-6 justify-between  items-center ")]}>
            <Text style={[tailwind(" mr-3"), {fontFamily: "Metropolis-SemiBold", letterSpacing: 1, fontSize: 15}]}>
                Number of Portions
            </Text>

                <View style={[tailwind("w-1/2 flex-row justify-end ")]}>
                    <Pressable style={[tailwind("w-14 flex-row justify-center rounded-3xl py-2"), 
                    {backgroundColor: colors.primaryColor}, {...elevate(2)}]}>
                        <Remove color="white" width="14" height="14" />
                    </Pressable>
                    <Text style={[tailwind("w-14  rounded-3xl mx-1 border text-center"), 
                    {color: colors.primaryColor, fontFamily: "Metropolis-Medium", lineHeight: 32, borderColor: colors.primaryColor}]}>
                        2
                    </Text>
                    <Pressable style={[tailwind("w-14 flex-row justify-center rounded-3xl py-2"), 
                    {backgroundColor: colors.primaryColor}, {...elevate(2)}]}>
                        <Add color="white" width="14" height="14" />
                    </Pressable>
                </View>
            </View>

            <View style={[tailwind("pr-4")]}>
            <View style={[tailwind("w-full  mt-8  relative   pt-6")]}>
          <View style={[tailwind("absolute w-3/12 top-0 bottom-0 left-0 rounded-r-3xl"), 
          {backgroundColor: colors.primaryColor}]}>
          </View>

          <View style={[tailwind("w-full pl-10 pr-4 mb-6 relative justify-center")]}>


              <View 
              style={[tailwind("w-full  bg-white rounded-l-3xl py-4 rounded-r-md justify-center items-center  relative"), 
              {...elevate(8)}]}>
                  <Text style={[tailwind("pb-1"), {color: colors.gray, fontFamily: "Metropolis-SemiBold", fontSize: 14, letterSpacing: 0.5}]}>
                    Total Price
                </Text>
                <Text style={[tailwind(""), {fontSize: 20, fontFamily: "Metropolis-SemiBold", letterSpacing: 0.5}]}>
                ₦ 750
                </Text>

                <Pressable style={[tailwind("w-1/2 rounded-3xl mt-2 items-center py-2 px-2"), {backgroundColor: colors.primaryColor}]}>
                    <Text style={[tailwind(""), {color:  "white", fontFamily: "Metropolis-Medium"}, {...elevate(5)}]}>
                    Add to Cart
                    </Text>
                </Pressable>
                
              </View>

              

              <View style={[tailwind("w-10 h-10 bg-white rounded-full justify-center items-center absolute right-0 "), {...elevate(9)}]}>
                    <Cart width="24" height="24" color={colors.primaryColor} />
              </View>
          </View>
          
      </View>
            </View>

        </View>

        <View style={tailwind("w-full h-64")}></View>

    </View>
  );
};

export default ProductScreen;
