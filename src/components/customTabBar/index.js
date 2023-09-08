import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import React from 'react'
import { colors } from '../../services'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { scale } from "react-native-size-matters"
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from "../../services/utilities"
import { useNavigation } from '@react-navigation/native';



const CustomTabBar = () => {
    const navigation = useNavigation();
    const handleHomePress = () => {
        return (
            navigation.reset({ index: 0, routes: [{ name: 'HomeNavigation', params: { screen: 'Home' } }] })
        )
    };
    const handleUserProfilePress = () => {
        return (
            navigation.reset({ index: 0, routes: [{ name: 'AccountNavigation', params: { screen: 'UserProfile' } }] })
        )
    };
    return (
        <View style={styles.CustomTabBar_header} >
            <View style={styles.CustomTabBar_ImageView}>
                <TouchableOpacity onPress={handleHomePress}>
                    <View style={styles.CustomTabBar_NavigationContainner}>
                        <FeatherIcon name='home' size={28} color={colors.appColor1} />
                        <Text style={styles.textStyle}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleUserProfilePress}>
                    <View style={styles.CustomTabBar_NavigationContainner}>
                        <FontAwesome5Icon name='user' size={28} color={colors.appColor1} />
                        <Text style={styles.textStyle}>Account</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CustomTabBar_header: {
        position: 'absolute',
        height: responsiveHeight(7),
        width: responsiveWidth(100),
        top: scale(691),
        borderColor: colors.appColor14,
        backgroundColor: colors.appColor18
    },
    CustomTabBar_ImageView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: scale(9),
        justifyContent: 'space-around',
    },
    textStyle: {
        // alignSelf: 'center',
        fontSize: fontSize.Size_15,
        color: colors.appColor1
    },
    CustomTabBar_NavigationContainner: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CustomTabBar