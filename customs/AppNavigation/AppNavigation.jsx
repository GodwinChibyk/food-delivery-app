import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import CartScreen from '../../screens/Cart/CartScreen'
import Category from '../../screens/Category/Category'
import Checkout from '../../screens/Checkout/Checkout'
import DessertsScreen from '../../screens/DessertsScreen/DessertsScreen'
import BottomTabNavigation from '../BottomTabNavigation/BottomTabNavigation'

const AppNavigation = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}  >
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="DessertsScreen" component={DessertsScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation