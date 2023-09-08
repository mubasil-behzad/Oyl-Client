import React from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import Icon from 'react-native-vector-icons/Entypo'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { appStyles, colors } from "../../services"
import { appImages, fontSize } from "../../services/utilities"

export const ScreenHeader = ({ styles, name, color, onPress, text, textstyle }) => {
    return (
        <View style={{ ...appStyles.Header_header, ...styles }} >
            <View style={{ ...appStyles.Header_imageView }}>
                <TouchableOpacity onPress={onPress}>
                    <Icon style={appStyles.Header_Icon1} name={name} size={30} color={color} />
                </TouchableOpacity>
            </View>
            <View style={appStyles.Header_textView1}>
                <Text style={{ ...appStyles.Header_text1, ...textstyle }}>{text}</Text>
            </View>
        </View>
    )
}

export const ImageScreenHeader = ({ text, textStyle }) => {
    return (
        <View style={styles.Home_textview1}>
            <Image style={{
                height: responsiveHeight(22),
                width: responsiveWidth(100),
                borderBottomLeftRadius: responsiveWidth(15),
                borderBottomRightRadius: responsiveWidth(15),
            }} source={appImages.Background} />
            <Text style={{ ...styles.Home_text1, position: 'absolute', ...textStyle }}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Home_textview1: {
        height: responsiveHeight(22),
        width: responsiveWidth(100),
        backgroundColor: 'white',
        borderBottomEndRadius: responsiveWidth(15),
        borderBottomStartRadius: responsiveWidth(15),
        justifyContent: 'center',
        alignItems: 'center'
    },
    Home_text1: {
        fontSize: fontSize.Size_7,
        color: colors.appColor2
    },
})
