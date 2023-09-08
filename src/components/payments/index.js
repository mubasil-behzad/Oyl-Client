import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import React, { useState } from 'react'
import { PaymentModal } from '../modals'
import { scale } from 'react-native-size-matters'
import { colors } from '../../services'

export const Payments = ({ source }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <TouchableOpacity style={styles.Payments_Touchable} onPress={toggleModal}>
            <View style={styles.Payments_Container}>
                <View style={styles.PaymentModal_ImageView}>
                    <Image style={styles.PaymentModal_Image} source={source} />
                </View>
                <PaymentModal isVisible={isModalVisible} onBackdropPress={toggleModal} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Payments_Touchable: {
        flex: 1,
        height: scale(90)
    },
    Payments_Container: {
        flex: 1,
        marginHorizontal: responsiveWidth(2),
        height: responsiveHeight(12.5),
        borderRadius: responsiveWidth(7),
        shadowColor: colors.appColor1,
        elevation: 7,
        backgroundColor: colors.appColor2
    },
    PaymentModal_ImageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    PaymentModal_Image: {
        top: responsiveHeight(3)
    }
})
