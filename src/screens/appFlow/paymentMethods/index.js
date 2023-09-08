import {
    View,
    Text,
    ImageBackground,
    BackHandler,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native'
import React, { useEffect } from 'react'
import {  responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { StatusBars } from '../../../components/statusBars'
import { ScreenHeader } from '../../../components/hearder'
import { appStyles, colors } from '../../../services'
import { Payments } from '../../../components/payments'
import { useNavigation } from '@react-navigation/native';
import { appImages, fontSize} from '../../../services/utilities'

const PaymentMethods = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const handleBackPress = () => {
        navigation.navigate('HomeNavigation', { screen: 'VehicleDetail' });
        return true;
    };
    const handleVehicleDetailPress = () => {
        navigation.navigate('HomeNavigation', { screen: 'VehicleDetail' });
        return true;
    };

    return (
        <ImageBackground
            source={appImages.Background}
            style={appStyles.BackgroundImage}>
            <KeyboardAvoidingView
                style={appStyles.PaymentMethods_Container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
                <StatusBars barStyle={'dark-content'} backgroundColor={colors.appColor2} />
                <ScreenHeader
                    name={'chevron-small-left'} text={'Select Price & Payment Method'}
                    textstyle={{
                        color: colors.appColor7,
                        marginLeft: responsiveWidth(-1),
                        fontSize: fontSize.Size_14,
                    }} onPress={handleVehicleDetailPress}
                    color={colors.appColor8} />
                <ScrollView style={appStyles.PaymentMethods_ScrollView}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={appStyles.PaymentMethods_MainContainer}>
                            <View style={{ height: responsiveHeight(84.7) }} >
                                <View style={appStyles.PaymentMethods_View1}>
                                    <View style={appStyles.PaymentMethods_Textview_Container1}>
                                        <View style={appStyles.PaymentMethods_Textview_Container2}>
                                            <View style={appStyles.PaymentMethods_TextView1}>
                                                <Text style={appStyles.PaymentMethods_Text1}>YOUR OYL AND FYLTER CHANGE WILL BE</Text>
                                            </View>
                                            <View style={appStyles.PaymentMethods_InnerTextview_Container}>
                                                <View style={appStyles.PaymentMethods_TextView2}>
                                                    <Text style={appStyles.PaymentMethods_Text2}>$</Text>
                                                </View>
                                                <View style={appStyles.PaymentMethods_TextView3}>
                                                    <Text style={appStyles.PaymentMethods_Text3}>87</Text>
                                                </View>
                                            </View>
                                            <View style={appStyles.PaymentMethods_TextView4}>
                                                <Text style={appStyles.PaymentMethods_Text4}>THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES - SHOOT WE'LL EVEN TOP OFF YOUR WASHER FLUID AND AIR UP YOUR TIRES</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={appStyles.PaymentMethods_TextView5}>
                                    <Text style={appStyles.PaymentMethods_Text5}>Payment Methods</Text>
                                </View>
                                <View style={appStyles.PaymentMethods_PaymentContainer}>
                                    <View style={appStyles.PaymentMethods_Inner_PaymentContainer1}>
                                        <Payments source={appImages.stripe} />
                                        <Payments source={appImages.a_pay} />
                                        <Payments source={appImages.i_pay} />
                                    </View>
                                    <View style={appStyles.PaymentMethods_Inner_PaymentContainer2}>
                                        <Payments source={appImages.bitPay} />
                                        <Payments source={appImages.affirm} />
                                        <Payments source={appImages.klarna} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default PaymentMethods