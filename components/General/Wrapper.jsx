import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

const Wrapper = ({children}) => {
    return (
        <View style={[tailwind("px-8 min-h-full w-full bg-gray-50")]}>
            {children}
        </View>
    )
}

export default Wrapper
