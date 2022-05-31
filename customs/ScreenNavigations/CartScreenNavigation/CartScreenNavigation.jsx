import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import CartScreen from '../../../screens/Cart/CartScreen'
import Checkout from '../../../screens/Checkout/Checkout'

function CartScreenNavigation() {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="CartScreenHome" >
        <Stack.Screen name='CartScreenHome' component={CartScreen}/>
        <Stack.Screen name='Checkout' component={Checkout}/>
    </Stack.Navigator>
  )
}

export default CartScreenNavigation