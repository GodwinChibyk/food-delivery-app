import React from 'react'

import Onboarding from '../../components/Onboarding/Onboarding'
import Login from '../AutScreens/Login'

const WelcomeScreen4 = () => {
    return (
        <Onboarding 
        title="live tracking"
         imageSrc= {require("../../assets/img/tracking.png")}
         screenName="Login"
        />
    )
}

export default WelcomeScreen4
