import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../../screens/AutScreens/Login'
import OtpScreen from '../../screens/AutScreens/OtpScreen'
import ResetPasswordEmail from '../../screens/AutScreens/ResetPasswordEmail'
import ResetPasswordNew from '../../screens/AutScreens/ResetPasswordNew'
import SignupScreen from '../../screens/AutScreens/SignupScreen'
import WelcomeScreen from '../../screens/onboarding/WelcomeScreen'
import WelcomeScreen2 from '../../screens/onboarding/WelcomeScreen2'
import WelcomeScreen3 from '../../screens/onboarding/WelcomeScreen3'
import WelcomeScreen4 from '../../screens/onboarding/WelcomeScreen4'

const AuthNavigation = () => {
    const Stack = createStackNavigator()
  return (
    // <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="WelcomeScreen" >
    //   <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    //   <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} />
    //   <Stack.Screen name="WelcomeScreen3" component={WelcomeScreen3} />
    //   <Stack.Screen name="WelcomeScreen4" component={WelcomeScreen4} />
    //   <Stack.Screen name="Login" component={Login} />
    //   <Stack.Screen name="SignupScreen" component={SignupScreen} />
    //   <Stack.Screen name="ResetPasswordEmail" component={ResetPasswordEmail} />
    //   <Stack.Screen name="ResetPasswordNew" component={ResetPasswordNew} />
    //   <Stack.Screen name="OtpScreen" component={OtpScreen} />
    // </Stack.Navigator>
  )
}

export default AuthNavigation