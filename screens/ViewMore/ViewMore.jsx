import React from 'react'
import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import ArrowRight from '../../assets/icons/ArrowRight'
import Cart from '../../assets/icons/Cart'
import Exclametion from '../../assets/icons/Exclametion'
import Inbox from '../../assets/icons/Inbox'
import LocalOfferIcon from '../../assets/icons/LocalOfferIcon'
import Notification from '../../assets/icons/Notification'
import Payment from '../../assets/icons/Payment'
import ShoppingBag from '../../assets/icons/ShoppingBag'
import ListCard from '../../components/Cards/ListCard'
import GeneralScreen from '../../components/General/GeneralScreen'
import TopNavBar from '../../components/General/TopNavBar/TopNavBar'
import LatestOffers from '../LatestOffers/LatestOffers'
import Notifications from '../Notifications/Notifications'
import Orders from '../Orders/Orders'


const ViewMore = ({navigation}) => {
    return (
        <>
        <GeneralScreen>
        <View style={[tailwind("min-h-full w-full")]}>
          <TopNavBar title="more" />
  
          <ScrollView style={[tailwind(" bg-gray-50 w-full ")]} showsVerticalScrollIndicator={false}>

          <View style={[tailwind("w-full  relative px-4 pt-6")]}>
          <Pressable onPress={()=> navigation.navigate("Orders")}>
          <ListCard title="my orders"  >
              <ShoppingBag color={colors.gray} width="24" height="24" />
          </ListCard>
          </Pressable>

          <Pressable onPress={()=> navigation.navigate("Notifications")}>
          <ListCard title="notifications" actionCount="15"  >
              <Notification color={colors.gray} width="24" height="24" />
          </ListCard>
          </Pressable>
          
          <Pressable onPress={()=> navigation.navigate("LatestOffers")}>
          <ListCard title="latest offers"  >
              <LocalOfferIcon color={colors.gray} width="24" height="24" />
          </ListCard>
          </Pressable>

          <ListCard title="payment details" >
              <Payment color={colors.gray} width="24" height="24" />
          </ListCard>



          <ListCard title="inbox"   >
              <Inbox color={colors.gray} width="24" height="24" />
          </ListCard>

          <ListCard title="about us"  >
              <Exclametion color={colors.gray} width="24" height="24" />
          </ListCard>

          
          
      </View>
  
            <View style={tailwind("w-full h-40")}></View>
          </ScrollView>
        </View>
        </GeneralScreen>
      </>
    )
}

export default ViewMore
