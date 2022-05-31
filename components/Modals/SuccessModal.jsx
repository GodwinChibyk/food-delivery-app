import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { elevate } from 'react-native-elevate'
import tailwind from 'tailwind-rn'
import colors from '../../assets/colors'
import CheckIcon from '../../assets/icons/CheckIcon'
import HomeIndex from '../../screens/Home/HomeIndex'

const SuccessModal = ({closeModal}) => {

    const navigation = useNavigation()
    
    return (
        <Pressable 
        onPress={closeModal}
        style={[tailwind("h-full w-full absolute z-30 inset-0 px-4 justify-center"),
        {backgroundColor: colors.overLayColor}]}>
            <View onStartShouldSetResponder={() => true} style={[tailwind(" w-full bg-gray-50 rounded-2xl px-4 pb-3"),{...elevate(5)}]}>
                <View style={[tailwind("w-full items-center")]}>
                <View style={[tailwind("h-16 w-16 -mt-8 rounded-full items-center justify-center bg-green-500"),
                {...elevate(5)}]}>
                    <CheckIcon color="#fefefe" width="30" height="30"/>
                </View>
                </View>

                <View style={[tailwind("mt-6")]}>
                <Text style={[tailwind("text-center mb-6"),{fontFamily:"Metropolis-SemiBold",fontSize:17}]}>
                    Thank you for your Order!
                </Text>
                <Text style={[tailwind("text-center"),{fontFamily:"Metropolis-Regular", lineHeight:20}]}>
                    Your Order is now being processed. We will let you know once the order is picked from the outlet.
                    Have a nice day!
                </Text>
                <View style={[tailwind("items-center mt-8 mb-6")]}>
                <Pressable onPress={()=> navigation.navigate(HomeIndex)} >
                    <Text style={[tailwind(""),{fontFamily:"Metropolis-SemiBold",fontSize:17,color:colors.primaryColor}]}>
                        Back to Home
                    </Text>
                </Pressable>
                </View>
                </View>
            </View>
        </Pressable>
    )
}

export default SuccessModal
