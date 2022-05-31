import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../../screens/onboarding/WelcomeScreen";
import WelcomeScreen2 from "../../screens/onboarding/WelcomeScreen2";
import WelcomeScreen3 from "../../screens/onboarding/WelcomeScreen3";
import WelcomeScreen4 from "../../screens/onboarding/WelcomeScreen4";
import GeneralScreen from "../../components/General/GeneralScreen";
import SignupScreen from "../../screens/AutScreens/SignupScreen";
import Login from "../../screens/AutScreens/Login";
import HomeIndex from "../../screens/Home/HomeIndex";
import ResetPasswordEmail from "../../screens/AutScreens/ResetPasswordEmail";
import ResetPasswordNew from "../../screens/AutScreens/ResetPasswordNew";
import OtpScreen from "../../screens/AutScreens/OtpScreen";
import RestaurantPreview from "../../screens/RestaurantPreview/RestaurantPreview";
import Restaurants from "../../screens/Restaurants/Restaurants";
import ProductScreen from "../../screens/ProductScreen/ProductScreen";
import CartScreen from "../../screens/Cart/CartScreen";
import Orders from "../../screens/Orders/Orders";
import ViewMore from "../../screens/ViewMore/ViewMore";
import Checkout from "../../screens/Checkout/Checkout";
import Category from "../../screens/Category/Category";
import DessertsScreen from "../../screens/DessertsScreen/DessertsScreen";
import BottomTabNavigation from "../BottomTabNavigation/BottomTabNavigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import AppNavigation from "../AppNavigation/AppNavigation";
import { auth } from "../../firebase";
import SplashScreen from "../../screens/SplashScreen/SplashScreen";

const ScreenNavigations = () => {
  const [isUser, setIsUser] = useState(false);
  const [isNotUser, setIsNotUser] = useState(false);
  const [flashScreen, setFlashScreen] =  useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user:any) => {
      if (user) {
        setIsUser(true);
        setFlashScreen(false)
      } else {
        setIsNotUser(true);
        setFlashScreen(false)
      }
    });

    return unsubscribe;

  }, []);

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="splashScreen"
    >
      {flashScreen && <Stack.Screen name="splashScreen" component={SplashScreen} />}
      {isNotUser && (
        <>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} />
      <Stack.Screen name="WelcomeScreen3" component={WelcomeScreen3} />
      <Stack.Screen name="WelcomeScreen4" component={WelcomeScreen4} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="ResetPasswordEmail" component={ResetPasswordEmail} />
      <Stack.Screen name="ResetPasswordNew" component={ResetPasswordNew} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
        </>
      )}
      {isUser && (
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
      )}
    </Stack.Navigator>
  );
};

export default ScreenNavigations;
