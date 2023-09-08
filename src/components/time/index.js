import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native'
import React, { useState, useEffect } from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';
import { colors } from '../../services';
import { fontFamily, fontSize } from '../../services/utilities';

export const Times = ({ onTimeSelect }) => {
    const [selectedPeriod, setSelectedPeriod] = useState('AM');
    const [selectHours, setSelectHours] = useState('');
    const [selectMinutes, setSelectMinutes] = useState('');
    const [selectedInputIndex, setSelectedInputIndex] = useState(null);
    let period;
    const handleHoursChange = (value) => {
        if (value === '' || (value >= 1 && value <= 12)) {
            setSelectHours(value);
        } else if (value <= 0) {
            setSelectHours('1');
        } else {
            setSelectHours('12');
        }
    };
    const handleMinutesChange = (value) => {
        if (value === '' || (value >= 0 && value <= 59)) {
            setSelectMinutes(value);
        } else {
            setSelectMinutes('00');
        }
    };
    const togglePeriod = (selectedPeriod) => {
        setSelectedPeriod(selectedPeriod === 'AM' ? 'AM' : 'PM');
    };
    const handleInputPress = (index) => {
        setSelectedInputIndex(index);
    };
    useEffect(() => {
        const formattedHours = selectHours < 10 ? `0${selectHours}` : selectHours;
        const formattedMinutes = selectMinutes === '00' ? '00' : (selectMinutes < 10 ? `0${selectMinutes}` : selectMinutes);
        const period = selectedPeriod === 'AM' ? 'PM' : 'AM';
        console.log(period)
        const selectedTime = `${formattedHours} : ${formattedMinutes} ${period}`;
        onTimeSelect(selectedTime, formattedHours, formattedMinutes, period);

    }, [selectedPeriod, selectHours, selectMinutes]);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2.5 }}>
                <Text style={{ ...styles.Time_text, color: colors.appColor9, paddingLeft: responsiveWidth(3), fontSize: fontSize.Size_3 }}>Enter Time</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
                <View style={{ ...styles.Times_View1, flex: 1, backgroundColor: selectedInputIndex === 1 ? colors.appColor1 : colors.appColor2 }}>
                    <TextInput style={[styles.Times_textinput1, { backgroundColor: selectedInputIndex === 1 ? colors.appColor1 : colors.appColor2 }]}
                        placeholder='05'
                        keyboardType='numeric'
                        placeholderTextColor={colors.appColor9}
                        value={selectHours}
                        onChangeText={handleHoursChange}
                        maxLength={2}
                        onFocus={() => handleInputPress(1)}
                    />
                </View>
                <View style={{ ...styles.Times_View2, marginHorizontal: responsiveWidth(2), padding: responsiveWidth(1), paddingRight: responsiveWidth(1.5), minWidth: 40, flex: 0.5 }}>
                    <Text style={{ ...styles.Time_text }}>:</Text>
                </View>
                <View style={{ ...styles.Times_View3, marginLeft: responsiveWidth(-1), flex: 1, backgroundColor: selectedInputIndex === 2 ? colors.appColor1 : colors.appColor2 }}>
                    <TextInput style={[styles.Times_textinput1, { backgroundColor: selectedInputIndex === 2 ? colors.appColor1 : colors.appColor2 }]}
                        placeholder='05'
                        keyboardType='numeric'
                        placeholderTextColor={colors.appColor9}
                        value={selectMinutes}
                        onChangeText={handleMinutesChange}
                        maxLength={2}
                        onFocus={() => handleInputPress(2)}
                    />
                </View>
                <View style={{ ...styles.Times_View4, marginLeft: responsiveWidth(5), marginRight: responsiveWidth(4), paddingHorizontal: responsiveWidth(1), flex: 0.6, }}>
                    <View style={{
                        ...styles.Times_AM,
                        backgroundColor: selectedPeriod === 'AM' ? colors.appColor2 : colors.appColor1,
                    }}>
                        <TouchableOpacity onPress={() => togglePeriod('PM')}>
                            <Text style={{
                                fontSize: fontSize.Size_8, textAlign: 'center',
                                marginTop: responsiveHeight(1),
                                fontFamily: fontFamily.Roboto_Regular,
                                color: colors.appColor6
                            }}>AM</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        ...styles.Times_PM,
                        backgroundColor: selectedPeriod === 'PM' ? colors.appColor2 : colors.appColor1,
                    }}>
                        <TouchableOpacity onPress={() => togglePeriod('AM')}>
                            <Text style={{
                                fontSize: fontSize.Size_8, textAlign: 'center',
                                marginBottom: responsiveHeight(1),
                                fontFamily: fontFamily.Roboto_Regular,
                                color: colors.appColor6
                            }}>PM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Times_View1: {
        margin: responsiveHeight(0.7),
        marginLeft: responsiveWidth(4),
        padding: responsiveWidth(5),
        borderRightWidth: 1,
        borderColor: colors.appColor21,
        borderRadius: responsiveWidth(5),
        height: scale(100),
        minWidth: 85,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.appColor2,
        elevation: 5,
    },
    Times_View2: {
        margin: responsiveHeight(0.7),
        marginLeft: responsiveWidth(-0.5),
        borderColor: colors.appColor21,
        borderRadius: responsiveWidth(5),
        height: scale(100),
        minWidth: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Times_View3: {
        margin: responsiveHeight(0.7),
        marginHorizontal: responsiveWidth(-1),
        marginLeft: responsiveWidth(3),
        padding: responsiveWidth(5),
        borderRightWidth: 1,
        borderColor: colors.appColor21,
        borderRadius: responsiveWidth(5),
        height: scale(100),
        minWidth: 85,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.appColor2,
        elevation: 5,
    },
    Times_View4: {
        margin: responsiveHeight(0.7),
        padding: responsiveWidth(5),
        marginLeft: responsiveWidth(3),
        borderColor: colors.appColor21,
        borderRadius: responsiveWidth(5),
        height: scale(100),
        minWidth: 47,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    Times_textinput1: {
        height: scale(100),
        width: responsiveHeight(9),
        fontSize: fontSize.Size_9,
        fontFamily: fontFamily.Roboto_Regular,
        backgroundColor: colors.appColor2,
        justifyContent: 'center',
        textAlign: 'center',
        color: colors.appColor9
    },
    Time_text: {
        fontFamily: fontFamily.Roboto_Bold,
        fontSize: fontSize.Size_10,
        color: colors.appColor7
    },
    Times_AM: {
        flex: 1,
        borderColor: colors.appColor6,
        borderWidth: 1,
        width: responsiveWidth(15.5),
        marginTop: responsiveHeight(-2.5),
        borderTopLeftRadius: responsiveWidth(5),
        borderTopRightRadius: responsiveWidth(5),
    },
    Times_PM: {
        flex: 1,
        borderLeftColor: colors.appColor6,
        borderRightColor: colors.appColor6,
        borderBottomColor: colors.appColor6,
        borderTopColor: colors.appColor2,
        borderWidth: 1,
        justifyContent: 'flex-end',
        width: responsiveWidth(15.5),
        marginBottom: responsiveHeight(-2.5),
        borderBottomLeftRadius: responsiveWidth(5),
        borderBottomRightRadius: responsiveWidth(5),
    }
})