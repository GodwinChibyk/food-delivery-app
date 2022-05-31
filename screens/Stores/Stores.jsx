import React from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import ArrowDown from '../../assets/icons/ArrowDown'
import ArrowLeft from '../../assets/icons/ArrowLeft'
import Cart from '../../assets/icons/Cart'
import Location from '../../assets/icons/Location'
import StoreCard from '../../components/Cards/StoreCard'
import SearchInput from '../../components/General/Inputs/SearchInput'

const Stores = () => {
    return (
        <>
      <View style={[tailwind("min-h-full w-full")]}>
        <View style={[tailwind(" bg-gray-50 pt-8")]}>
          <View
            style={[tailwind("flex-row  items-center justify-between px-4")]}
          >
            <ArrowLeft color={colors.gray} width="30" height="30" />
            <View
              style={tailwind(
                "flex-row items-center px-2 py-0.5 bg-gray-200 rounded-2xl "
              )}
            >
              <Location color={colors.gray} width="20" height="20" />
              <Text style={[tailwind("ml-1 mr-3 capitalize overflow-hidden")]}>
                12 a masr street new york
              </Text>
              <ArrowDown color={colors.gray} width="24" height="24" />
            </View>

            <Pressable>
              <Cart color={colors.gray} width="28" height="28" />
            </Pressable>
          </View>
        </View>

        <ScrollView style={[tailwind(" bg-gray-50 w-full   ")]} showsVerticalScrollIndicator={false}>
          <View style={[tailwind("px-4")]}>
            <SearchInput placeholder="Search  Store" />
          </View>

          <View style={[tailwind("mt-6 px-4")]}>
            <Text
              style={[
                tailwind("capitalize"),
                { fontFamily: "Metropolis-SemiBold", fontSize: 17 },
              ]}
            >
              near by Stores
            </Text>
            <Text
              style={[
                tailwind("mt-2"),
                { fontFamily: "Metropolis-Medium", color: colors.gray },
              ]}
            >
              200+ Stores found near you
            </Text>

            <View style={[tailwind("mt-8")]}>
              <StoreCard
                imageUri={require("../../assets/img/store3.jpg")}
                storeTitle="Mc Donald'S"
                price="₦ 15.00"
                saleTag="Burger"
                distance="2.1 km"
                isBookmarked={true}
                rating="5.0"
                time="10 min"
              />

              <StoreCard
                imageUri={require("../../assets/img/store2.jpg")}
                storeTitle="Spise house"
                price="₦ 15.00"
                saleTag="Chines Foods"
                distance="2.1 km"
                isBookmarked={false}
                rating="5.0"
                time="10 min"
              />

              <StoreCard
                imageUri={require("../../assets/img/store1.jpg")}
                storeTitle="Carrows Store"
                price="₦ 15.00"
                saleTag="Fast Food . Coffee"
                distance="2.1 km"
                isBookmarked={false}
                rating="5.0"
                time="10 min"
              />

              <StoreCard
                imageUri={require("../../assets/img/store3.jpg")}
                storeTitle="Spise house"
                price="₦ 15.00"
                saleTag="Chines Foods"
                distance="2.1 km"
                isBookmarked={false}
                rating="5.0"
                time="10 min"
              />
            </View>
          </View>

          <View style={tailwind("w-full h-32")}></View>
        </ScrollView>
      </View>
    </>
    )
}

export default Stores
