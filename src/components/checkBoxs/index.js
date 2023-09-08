import React, { useState } from "react"
import {
    View,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import { responsiveWidth } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/Feather'
import { colors } from "../../services"
import { scale } from "react-native-size-matters"

export const CheckBoxes = ({onCheckBoxChange}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
        onCheckBoxChange(!isChecked);
    };
    return (
        <View style={styles.checkBoxContainer}>
            <TouchableOpacity
                style={[
                    styles.checkBox,
                    isChecked ? { backgroundColor: colors.appColor2, borderColor: colors.appColor2 } : { backgroundColor: colors.appColor2 },
                ]}
                onPress={handleCheckBoxChange}
            >
                {isChecked ? (
                    <View style={styles.innerCircle}>
                        <Icon style={{ alignSelf: 'center', top: scale(-0.5) }} name='check' size={12} color={colors.appColor5} />
                    </View>
                ) : null}
            </TouchableOpacity>
        </View>
    )
}

export const SquareCheckBox = ({onCheckBoxChange}) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
        onCheckBoxChange(!isChecked);
    };
    return (
        <View style={styles.checkBoxContainer}>
            <TouchableOpacity
                style={[
                    styles.SquarecheckBox,
                    isChecked ? { backgroundColor: colors.appColor2, borderColor: colors.appColor6, } : { backgroundColor: colors.appColor2 },
                ]}
                onPress={handleCheckBoxChange}
            >
                {isChecked ? (
                    <View style={styles.innerSquare}>
                        <Icon name='check' size={15} color={colors.appColor6} />
                    </View>
                ) : null}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBoxContainer: {
        flexDirection: 'row',
        marginHorizontal: responsiveWidth(4),
        justifyContent: 'center',
    },
    checkBox: {
        width: 16,
        height: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.appColor38,
    },
    innerCircle: {
        width: 16,
        height: 16,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SquarecheckBox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: colors.appColor6,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    innerSquare: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})