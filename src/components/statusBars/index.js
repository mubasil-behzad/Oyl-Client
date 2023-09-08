import React from "react"
import { View, StatusBar } from "react-native"

export const StatusBars = ({ hidden,backgroundColor, barStyle }) => {
    return (
        <View>
            <StatusBar hidden={hidden} backgroundColor={backgroundColor} barStyle={barStyle} />
        </View>
    )
}