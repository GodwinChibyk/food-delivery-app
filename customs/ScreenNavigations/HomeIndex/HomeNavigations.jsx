import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import CartScreen from '../../../screens/Cart/CartScreen';
import Category from '../../../screens/Category/Category';
import DessertsScreen from '../../../screens/DessertsScreen/DessertsScreen';
import HomeIndex from '../../../screens/Home/HomeIndex';
import ProductScreen from '../../../screens/ProductScreen/ProductScreen';
import RestaurantPreview from '../../../screens/RestaurantPreview/RestaurantPreview';
import Restaurants from '../../../screens/Restaurants/Restaurants';
import CartScreenNavigation from '../CartScreenNavigation/CartScreenNavigation';

const HomeNavigations = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomeIndex' component={HomeIndex} /> 
      <Stack.Screen name="RestaurantPreview" component={RestaurantPreview} />
      <Stack.Screen name="Restaurants" component={Restaurants} />
      <Stack.Screen name="CartScreen" component={CartScreenNavigation} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="DessertsScreen" component={DessertsScreen} />
      <Stack.Screen name="Category" component={Category} />
      



    </Stack.Navigator>
  )
}

export default HomeNavigations