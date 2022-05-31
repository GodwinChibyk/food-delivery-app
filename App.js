import 'react-native-gesture-handler';
import React from "react";
import { fonts } from "./assets/fonts/fonts";
import { typography } from "./customs/TextModifier";
import LoadAssets from "./loaders/LoadAssets";
import ScreenNavigations from './customs/ScreenNavigations/ScreenNavigations';
import BottomTabNavigation from './customs/BottomTabNavigation/BottomTabNavigation';
typography();
const  App = () => {

  
  return (
      <LoadAssets {...{ fonts }}>
        <ScreenNavigations/>
        {/* <BottomTabNavigation/> */}
          
      </LoadAssets>

    // <LoadAssets {...{ fonts }}>

    //   <ProductScreen/>
    //   <RestaurantPreview/>
    //     <SuccessModal/>
    //   <GeneralScreen>
    //     <WelcomeScreen />
    //     <WelcomeScreen2 />
    //     <WelcomeScreen3 />
    //     <WelcomeScreen4 />
    //     <Login/>
    //     <SignupScreen/>
    //     <ResetPasswordEmail/>
    //     <ResetPasswordNew/>
    //     <OtpScreen/>
    //     <HomeIndex/>
    //     <MenuScreen/>
    //     <DessertsScreen/>
    //     <LatestOffers/>
    //     <UserProfile/>
    //     <ViewMore/>
    //     <Notifications/>
    //     <Orders/>
    //     <Restaurants/>
    //     <CartScreen/>
    //     <Checkout/>
    //     <Stores/>
    //     <Category/>
    //   </GeneralScreen>
    // </LoadAssets>
  );
}

export default App;
