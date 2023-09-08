import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../services';
import { scale } from 'react-native-size-matters';

const TouchableButton = ({ title, onPress, styles, style, color, touchableStlye }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...touchableStlye, height: scale(43), }}>
            <LinearGradient
                colors={color ? color : [colors.appColor10, colors.appColor3]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={style}
            >
                <Text style={styles}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default TouchableButton;
