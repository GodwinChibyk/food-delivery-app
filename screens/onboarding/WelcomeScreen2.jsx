import React from 'react'
import { View, Text, Image } from 'react-native'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import PrimaryButton from '../../components/General/Buttons/PrimaryButton'
import Onboarding from '../../components/Onboarding/Onboarding'
import WelcomeScreen3 from './WelcomeScreen3'

const WelcomeScreen2 = () => {
    return (
        <Onboarding 
        title="Find Food You Love"
         imageSrc= {require("../../assets/img/food5.png")}
         screenName="WelcomeScreen3"
        />
    )
}


export default WelcomeScreen2
