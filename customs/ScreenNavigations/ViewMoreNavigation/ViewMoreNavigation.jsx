import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import CartScreen from '../../../screens/Cart/CartScreen'
import LatestOffers from '../../../screens/LatestOffers/LatestOffers'
import Notifications from '../../../screens/Notifications/Notifications'
import Orders from '../../../screens/Orders/Orders'
import ViewMore from '../../../screens/ViewMore/ViewMore'

function ViewMoreNavigation() {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="ViewMore" >
        <Stack.Screen name='ViewMore' component={ViewMore}/>
        <Stack.Screen name='Orders' component={Orders}/>
        <Stack.Screen name='Notifications' component={Notifications}/>
        <Stack.Screen name='LatestOffers' component={LatestOffers}/>
      <Stack.Screen name="Cart" component={CartScreen} />
        
    </Stack.Navigator>
  )
}

export default ViewMoreNavigation