
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewMore from '../../screens/ViewMore/ViewMore';
import HomeNavigations from '../ScreenNavigations/HomeIndex/HomeNavigations';
import CartScreenNavigation from '../ScreenNavigations/CartScreenNavigation/CartScreenNavigation';
import UserProfile from '../../screens/UserProfile/UserProfile';
import FilterIcon from '../../assets/icons/FilterIcon';
import colors from '../../assets/colors';
import Cart from '../../assets/icons/Cart';
import HomeIcon from '../../assets/icons/HomeIcon';
import UserIcon from '../../assets/icons/UserIcon';
import MenuIcon from '../../assets/icons/MenuIcon';
import ViewMoreNavigation from '../ScreenNavigations/ViewMoreNavigation/ViewMoreNavigation';

const BottomTabNavigation = () => {
    const Tab = createBottomTabNavigator();



  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {

          if (route.name === 'Home') {
            return <HomeIcon  width={size} height={size} color={focused ? colors.primaryColor: colors.gray} />;
          } 
          if (route.name === 'Cart') {
            return <Cart  width={size} height={size} color={focused ? colors.primaryColor: colors.gray} />;
          }
          if (route.name === 'Profile') {
            return <UserIcon  width={size} height={size} color={focused ? colors.primaryColor: colors.gray} />;
          }
          if (route.name === 'More') {
            return <MenuIcon  width={size} height={size} color={focused ? colors.primaryColor: colors.gray} />;
          }

        },
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.gray,
        headerShown: false,
        tabBarLabelStyle: {fontSize:12},
        tabBarStyle: {paddingBottom: 5, paddingTop:10},
        tabBarHideOnKeyboard: true,
      })}
    initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeNavigations}  />
      <Tab.Screen name="Cart" component={CartScreenNavigation} />
      <Tab.Screen name="Profile" component={UserProfile} />
      <Tab.Screen name="More" component={ViewMoreNavigation} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation