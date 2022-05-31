import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Pressable, Image, ScrollView, FlatList, useWindowDimensions } from "react-native";
import tailwind from "tailwind-rn";
import colors from "../../assets/colors";
import ArrowDown from "../../assets/icons/ArrowDown";
import Cart from "../../assets/icons/Cart";
import FilterIcon from "../../assets/icons/FilterIcon";
import { foodCategories } from "../../base/JsonData/FoodCategories";
import { popularFoods } from "../../base/JsonData/popularFoods";
import Card1 from "../../components/Cards/Card1";
import Card2 from "../../components/Cards/Card2";
import Card3 from "../../components/Cards/Card3";
import Card4 from "../../components/Cards/Card4";
import GeneralScreen from "../../components/General/GeneralScreen";
import SearchInput from "../../components/General/Inputs/SearchInput";
import CartScreenNavigation from "../../customs/ScreenNavigations/CartScreenNavigation/CartScreenNavigation";
import CartScreen from "../Cart/CartScreen";
import Category from "../Category/Category";
import DessertsScreen from "../DessertsScreen/DessertsScreen";
import ProductScreen from "../ProductScreen/ProductScreen";
import RestaurantPreview from "../RestaurantPreview/RestaurantPreview";
import Restaurants from "../Restaurants/Restaurants";

const HomeIndex = () => {
  const navigation = useNavigation()
  const FoodCategoryItems = foodCategories.data;
  const PopularFoods = popularFoods.data

  const renderFoodCategoryItems = ({item}) => {
      return (
          <Card1
            imageUri={require("../../assets/img/food3.jpg") }
            title={item.name}
            screenName={"DessertsScreen"}
          />
      )
  }

  const renderPopularFoods = ({item}) => {
    return (
      <Card3
      imageUri={require("../../assets/img/food1.jpg")}
      title={item.name}
      screenName={"ProductScreen"}
    />
    )
}



  return (
    <>
    <GeneralScreen>
    <View style={[tailwind("bg-gray-50 pt-2")]}>
      <View style={[tailwind("flex-row items-center justify-between px-4")]}>
        <Text
          style={[
            tailwind(),
            {
              fontFamily: "Metropolis-Bold",
              fontSize: 20,
            },
          ]}
        >
          Good morning Godwin!
        </Text>

        <Pressable onPress={()=> navigation.navigate("CartScreen")} >
          <Cart color={colors.gray} width="28" height="28" />
        </Pressable>
      </View>

      <View style={[tailwind("px-4 pb-2")]}>
        <Text style={{ color: colors.gray }}>Delivered to</Text>

        <View style={[tailwind(" flex-row items-start mt-2")]}>
          <Text
            style={{
              textTransform: "capitalize",
              fontSize: 18,
              color: colors.gray,
              fontFamily: "Metropolis-Bold",
              marginRight: 14,
            }}
          >
            Current location
          </Text>

          <ArrowDown color={colors.secondaryColor} width="28" height="28" />
        </View>
      </View>
      </View>
    <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false} >

      <View style={[tailwind("px-4 flex-row items-center mt-2")]}>
        <View style={[tailwind("flex-1")]}>
        <SearchInput placeholder="Search food" size="mt-0" />
        </View>
        <Pressable onPress={()=> navigation.navigate("Category")} style={[tailwind(" ml-2")]} >
        <FilterIcon width="28" height="28" color={colors.gray}/>
        </Pressable>
      </View>

      <View style={[tailwind("w-full mt-10 pl-4")]}>
        <FlatList 
          horizontal
          disableVirtualization = {true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          overScrollMode={"never"}
          data={FoodCategoryItems}
          renderItem={renderFoodCategoryItems}
          keyExtractor = {item => item.id.toString()}
         />
        
      </View>

      <View style={[tailwind("mt-12")]}>
        <View style={[tailwind("px-4 flex-row justify-between mb-3")]}>
          <Text
            style={{
              fontFamily: "Metropolis-Bold",
              fontSize: 18,
              letterSpacing: 1,
            }}
          >
            Restaurents
          </Text>

          <Pressable onPress={()=>{navigation.navigate("Restaurants")}}>
            <Text
              style={{
                color: colors.secondaryColor,
                fontFamily: "Metropolis-Bold",
              }}
            >
              View all
            </Text>
          </Pressable>
        </View>

        <View>
          <Card2
            imageUri={require("../../assets/img/restaurant1.jpg")}
            title="Minut by tuk tuk"
            screenName={"RestaurantPreview"}
          />
          <Card2
            imageUri={require("../../assets/img/res2.jpg")}
            title="Cafe de Noir"
            screenName={"RestaurantPreview"}

          />
          <Card2
            imageUri={require("../../assets/img/res3.jpg")}
            title="Bakes by Tella"
            screenName={"RestaurantPreview"}
          />
        </View>
      </View>

      <View style={[tailwind("mt-10")]}>
        <View style={[tailwind("px-4 flex-row justify-between")]}>
          <Text
            style={{
              fontFamily: "Metropolis-Bold",
              fontSize: 18,
              letterSpacing: 1,
            }}
          >
            Popular Foods
          </Text>

          <Pressable>
            <Text
              style={{
                color: colors.secondaryColor,
                fontFamily: "Metropolis-Bold",
              }}
            >
              View all
            </Text>
          </Pressable>
        </View>

        <View style={[tailwind("pl-4 w-full")]}>
        <FlatList 
          horizontal
          disableVirtualization = {true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={PopularFoods}
          renderItem={renderPopularFoods}
          keyExtractor = {item => item.id.toString()}
          
         />
        </View>
      </View>

      <View style={[tailwind("mt-12")]}>
        <View style={[tailwind("px-4 flex-row justify-between")]}>
          <Text
            style={{
              fontFamily: "Metropolis-Bold",
              fontSize: 18,
              letterSpacing: 1,
            }}
          >
            Recent Order
          </Text>

          <Pressable>
            <Text
              style={{
                color: colors.secondaryColor,
                fontFamily: "Metropolis-Bold",
              }}
            >
              View all
            </Text>
          </Pressable>
        </View>

        <View style={[tailwind("px-4 ")]}>
          <Card4
            imageUri={require("../../assets/img/food1.jpg")}
            title="Mulberry Pizza by Josh"
            screenName={"ProductScreen"}

          />
          <Card4
            imageUri={require("../../assets/img/food2.jpg")}
            title="Barita"
            screenName={"ProductScreen"}

          />

          <Card4
            imageUri={require("../../assets/img/food3.jpg")}
            title="Pizza Rush Hour"
            screenName={"ProductScreen"}

          />
        </View>
      </View>

      <View style={tailwind("w-full h-32")}></View>
    </ScrollView>

    </GeneralScreen>
    </>
  );
};

export default HomeIndex;
