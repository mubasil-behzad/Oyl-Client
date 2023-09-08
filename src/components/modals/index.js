import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
} from 'react-native';
import Toast from 'react-native-simple-toast'
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'
import Svg, { G, Path } from "react-native-svg"
import { InputFields } from '../textInput';
import TouchableButton from '../buttons';
import { appStyles, colors } from '../../services';
import { appImages } from '../../services/utilities';
import { AuthContext } from '../../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const LocationModal = ({ isVisible, onBackdropPress, onSubmitLocation }) => {
    const [location, setLocation] = useState('');
    const handleLocationSubmit = () => {
        onSubmitLocation(location);
        onBackdropPress();
    };
    useEffect(() => {
        if (isVisible) {
            setLocation('');
        }
    }, [isVisible]);

    return (
        <KeyboardAvoidingView
            style={appStyles.S_Profile_Container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
        >
            <Modal style={appStyles.LocationModal_Modal} isVisible={isVisible} onBackdropPress={onBackdropPress}>
                <View style={appStyles.LocationModal_MainContainer}>
                    <LinearGradient
                        colors={[colors.appColor25, colors.appColor6]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={appStyles.LocationModal_SvgView}
                    >
                        <LocationSvg />
                    </LinearGradient>
                    <View style={appStyles.LocationModal_InnerContainer}>
                        <Text style={appStyles.LocationModal_Text}>Add Location</Text>
                        <View style={appStyles.LocationModal_InputView}>
                            <InputFields style={appStyles.LocationModal_Input} placeholder={'Search here'} placeholderTextColor={colors.appColor26}
                                value={location}
                                onChangeText={(text) => setLocation(text)} />
                        </View>
                        <View style={appStyles.S_Profile_ButtonView}>
                            <TouchableButton style={{
                                ...appStyles.Signin_Button, ...appStyles.LocationModal_TouchableButton
                            }}
                                onPress={handleLocationSubmit}
                                touchableStlye={{
                                    marginTop: responsiveHeight(1),
                                    marginBottom: responsiveHeight(2), width: responsiveWidth(30)
                                }}
                                color={[colors.appColor28, colors.appColor6]}
                                styles={appStyles.LocationModal_ButtonText} title="Submit"
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export const OiltypeModal = ({ isVisible, onBackdropPress, onSelect }) => {
    const handleOilTypeSelection = (oilType) => {
        onSelect(oilType);
        onBackdropPress();
    };
    return (
        <Modal style={appStyles.OiltypeModal_Modal} isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <View style={appStyles.OiltypeModal_MainContainer}>
                <View style={{
                    ...appStyles.Signin_InputContainer,
                    marginTop: responsiveHeight(1),
                    backgroundColor: colors.appColor22,
                    elevation: 7
                }}>
                    <Text style={appStyles.Signin_Text2}>Oil type</Text>
                    <View style={appStyles.Signup_PasswordContainer}>
                        <View style={{ flex: 4 }}>
                            <InputFields
                                style={{ ...appStyles.Signin_InputField, }}
                                placeholderTextColor={colors.appColor24}
                                placeholder={'Please select Oil type from here \n(All Oil High Quality Synthetic)'}
                                keyboardType={'default'}
                                editable={false}
                            />
                        </View>
                        <View style={appStyles.Signup_ImageContainer}>
                            <TouchableOpacity onPress={onBackdropPress}>
                                <AntDesign style={appStyles.Signup_Icon1} name='down' size={25} color={colors.appColor6} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={appStyles.OiltypeModal_TouchableConatiner}>
                    <TouchableOpacity style={appStyles.OiltypeModal_TouchableText1}
                        onPress={() => handleOilTypeSelection('Manufacturers Recommendation')} >
                        <Text style={appStyles.OiltypeModal_Text1}>Manufacturers Recommendation</Text>
                    </TouchableOpacity>
                    <View style={appStyles.OiltypeModal_TextView}>
                        <Text style={appStyles.OiltypeModal_Text2}>------- OR -------</Text>
                    </View>
                    <TouchableOpacity style={appStyles.OiltypeModal_TouchableText1}
                        onPress={() => handleOilTypeSelection('0W-20')}>
                        <Text style={appStyles.OiltypeModal_Text1}>0W-20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyles.OiltypeModal_TouchableText1}
                        onPress={() => handleOilTypeSelection('5W-20')}>
                        <Text style={appStyles.OiltypeModal_Text1}>5W-20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyles.OiltypeModal_TouchableText1}
                        onPress={() => handleOilTypeSelection('5W-30')}>
                        <Text style={appStyles.OiltypeModal_Text1}>5W-30</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyles.OiltypeModal_TouchableText1}
                        onPress={() => handleOilTypeSelection('10W-30')}>
                        <Text style={appStyles.OiltypeModal_Text1}>10W-30</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyles.OiltypeModal_TouchableText2}
                        onPress={() => handleOilTypeSelection('10W-40')}>
                        <Text style={appStyles.OiltypeModal_Text1}>10W-40</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export const DownModal = ({ modalstyle, isVisible, onBackdropPress, text, text2, style, name }) => {
    const navigation = useNavigation();
    const handlePress = () => {

        if (name === 'PaymentMethods') {
            navigation.navigate('HomeNavigation', { screen: 'PaymentMethods' });
        } else if (name === 'ThankYou') {
            navigation.navigate('AccountNavigation', { screen: 'ThankYou', params: { fromPaymentMethods: 'PaymentMethods' } });
        }
    };
    return (
        <Modal style={appStyles.DownModal_Modal} backdropColor={modalstyle} isVisible={isVisible}
            onBackdropPress={onBackdropPress} onBackButtonPress={onBackdropPress}>
            <View style={appStyles.DownModal_MainContainer}>
                <Image style={appStyles.DownModal_Image} source={appImages.Background} />
                <View style={appStyles.DownModal_SvgView}>
                    <Checkcircle />
                </View>
                <View style={appStyles.DownModal_TextView}>
                    <Text style={{ ...appStyles.DownModal_Text1, ...style }}>{text}</Text>
                    <Text style={appStyles.DownModal_Text2}>{text2}</Text>
                </View>
                <View style={{ position: 'absolute', top: responsiveHeight(35), alignSelf: 'center' }}>
                    <TouchableButton style={{
                        ...appStyles.Signin_Button,
                        shadowColor: colors.appColor17,
                        elevation: 8,
                    }}
                        touchableStlye={{
                            marginTop: responsiveHeight(3),
                            marginBottom: responsiveHeight(4),
                        }}
                        color={[colors.appColor2, colors.appColor1]}
                        styles={appStyles.DownModal_ButtonText}
                        title="CONTINUE" onPress={handlePress}
                    />
                </View>
            </View>
        </Modal>
    )
}

export const PaymentModal = ({ isVisible, onBackdropPress }) => {
    const [isDown_ModalVisible, setDown_ModalVisible] = useState(false);
    const toggleDownModal = () => {
        setDown_ModalVisible(!isDown_ModalVisible);
    };
    return (
        <KeyboardAvoidingView
            style={appStyles.S_Profile_Container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
        >
            <Modal style={appStyles.LocationModal_Modal} isVisible={isVisible} backdropColor={isDown_ModalVisible ? colors.appColor18 : colors.appColor6} onBackdropPress={onBackdropPress}>
                <View style={appStyles.LocationModal_MainContainer}>
                    {!isDown_ModalVisible ? (
                        <LinearGradient
                            colors={[colors.appColor30, colors.appColor31, colors.appColor6]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={appStyles.PaymentModal_SvgView}
                        >
                            <PaymentSvg />
                        </LinearGradient>
                    ) : null}
                    {!isDown_ModalVisible ? (
                        <View style={appStyles.LocationModal_InnerContainer}>
                            <Text style={appStyles.PaymentModal_Text1}>Add New Details</Text>
                            <Text style={appStyles.PaymentModal_Text2}>Please enter your Payment Details</Text>
                            <View style={appStyles.PaymentModal_InputContainer}>
                                <View style={appStyles.PaymentModal_InputView}>
                                    <InputFields style={appStyles.PaymentModal_Input1} placeholder={'Card holder name'} placeholderTextColor={colors.appColor7} />
                                </View>
                                <View style={appStyles.PaymentModal_InputView}>
                                    <InputFields style={appStyles.PaymentModal_Input1} placeholder={'Number of card'} placeholderTextColor={colors.appColor7} />
                                </View>
                                <View style={appStyles.PaymentModal_TextView}>
                                    <Text style={appStyles.PaymentModal_Text3}>VALID THRU</Text>
                                </View>
                                <View style={appStyles.PaymentModal_InputView2}>
                                    <InputFields style={appStyles.PaymentModal_Input2} maxLength={2} placeholder={'MM'} placeholderTextColor={colors.appColor7} keyboardType={'numeric'} />
                                    <Text style={appStyles.PaymentModal_Text4}>/</Text>
                                    <InputFields style={appStyles.PaymentModal_Input2} maxLength={2} placeholder={'YY'} placeholderTextColor={colors.appColor7} keyboardType={'numeric'} />
                                    <InputFields style={appStyles.PaymentModal_Input2} maxLength={3} placeholder={'CVV'} placeholderTextColor={colors.appColor7} keyboardType={'numeric'} />
                                </View>
                            </View>
                            <View style={appStyles.S_Profile_ButtonView}>
                                <TouchableButton
                                    style={{ ...appStyles.Signin_Button, ...appStyles.PaymentModal_TouchableButton }}
                                    touchableStlye={{
                                        marginTop: responsiveHeight(3),
                                        marginBottom: responsiveHeight(2),
                                    }}
                                    color={[colors.appColor28, colors.appColor6]}
                                    styles={appStyles.LocationModal_ButtonText}
                                    title="Save"
                                    onPress={toggleDownModal}
                                />
                            </View>
                        </View>
                    ) : null}
                    {isDown_ModalVisible ? (
                        <DownModal
                            modalstyle={colors.appColor2}
                            style={{ fontSize: responsiveFontSize(4.5) }}
                            isVisible={isDown_ModalVisible}
                            onBackdropPress={toggleDownModal}
                            text={'Congratulations!'}
                            text2={'We will see you on [DATE SCHEDULED]'}
                            name={'ThankYou'}
                        />
                    ) : null}
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export const CategoryModal = ({ modalstyle, isVisible, onBackdropPress }) => {
    const navigation = useNavigation();
    const { user, logout } = useContext(AuthContext);

    const handleEditProfilePress = () => {
        navigation.navigate('AccountNavigation', { screen: 'EditProfile' });
    };
    const handleThankYouPress = () => {
        navigation.navigate('AccountNavigation', { screen: 'ThankYou' });
    };
    const handleSigninPress = async () => {
        const currentUser = auth().currentUser;
        if (currentUser) {
            try {
                await logout().then(() => {
                    AsyncStorage.removeItem("UserID");
                    navigation.navigate('AuthNavigation', { screen: 'Signin' });
                });
            } catch {
                Toast.show('Timeout', Toast.SHORT, Toast.TOP);
            }
        } else {
            console.log('Current user not eixt');
        }
    };
    const handlePrivacyPolicyPress = () => {
        navigation.navigate('AccountNavigation', { screen: 'PrivacyPolicy', params: { fromUserProfile: 'UserProfile' } });
    };
    const handleTermServicesPress = () => {
        navigation.navigate('AccountNavigation', { screen: 'TermServices', params: { fromUserProfile: 'UserProfile' } });
    };
    return (
        <Modal style={appStyles.CategoryModal_Modal} backdropColor={modalstyle} isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <View style={appStyles.CategoryModal_MainContainer}>
                <View style={appStyles.CategoryModal_TouchableConatiner}>
                    <TouchableOpacity style={appStyles.CategoryModal_TouchableText1} onPress={handleEditProfilePress}>
                        <Text style={appStyles.CategoryModal_Text1}>Edit Profile</Text>
                        <AntDesign style={appStyles.CategoryModal_Icon} name='right' size={10} color={colors.appColor36} />
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyles.CategoryModal_TouchableText1} onPress={handleThankYouPress}>
                        <Text style={appStyles.CategoryModal_Text1}>Share Your Feedback</Text>
                        <AntDesign style={appStyles.CategoryModal_Icon} name='right' size={10} color={colors.appColor36} />
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyles.CategoryModal_TouchableText1} onPress={handleTermServicesPress}>
                        <Text style={appStyles.CategoryModal_Text1}>Terms of Service</Text>
                        <AntDesign style={appStyles.CategoryModal_Icon} name='right' size={10} color={colors.appColor36} />
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyles.CategoryModal_TouchableText1} onPress={handlePrivacyPolicyPress}>
                        <Text style={appStyles.CategoryModal_Text1}>Privacy Policy</Text>
                        <AntDesign style={appStyles.CategoryModal_Icon} name='right' size={10} color={colors.appColor36} />
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyles.CategoryModal_TouchableText1} onPress={handleThankYouPress}>
                        <Text style={appStyles.CategoryModal_Text1}>About Us</Text>
                        <AntDesign style={appStyles.CategoryModal_Icon} name='right' size={10} color={colors.appColor36} />
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyles.CategoryModal_TouchableText2} onPress={handleSigninPress}>
                        <Text style={{ ...appStyles.CategoryModal_Text1, color: colors.appColor6, fontWeight: 'bold' }}>Logout</Text>
                        <AntDesign style={appStyles.CategoryModal_Icon} name='right' size={10} color={colors.appColor36} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

function LocationSvg(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={34.333}
            height={44.066}
            viewBox="0 0 34.333 44.066"
            {...props}
        >
            <Path
                data-name="Path 8"
                d="M27.461 42.285c.638 0 2.685-.85 5.615-3.559 4.654-4.284 10.087-11.812 10.087-18.9a15.8 15.8 0 10-31.593 0c0 11.135 12.97 22.223 15.891 22.459zm-.094-31.869a7.528 7.528 0 11-7.528 7.528 7.528 7.528 0 017.528-7.528zm17.166 33.349c0 1.473-6.056 4.331-17.167 4.331S10.2 45.238 10.2 43.765c0-.984 2.835-2.811 9.15-3.756a1.055 1.055 0 00.315-.1c2.961 2.8 5.859 4.591 7.607 4.725h.22c2.362 0 5.8-2.906 7.19-4.181.173-.157.346-.331.52-.5a1.576 1.576 0 00.181.047c6.317.954 9.15 2.781 9.15 3.765z"
                transform="translate(-10.2 -4.03)"
                fill="#ffffc8"
            />
        </Svg>
    )
}

function Checkcircle(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={62.041}
            height={61.075}
            viewBox="0 0 62.041 61.075"
            {...props}
        >
            <G
                fill="none"
                stroke="#ffffc8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={5}
            >
                <Path
                    data-name="Path 846"
                    d="M58 27.435v2.576A28 28 0 1141.4 4.419"
                    transform="translate(.506 .539)"
                />
                <Path
                    data-name="Path 847"
                    d="M58 7.611L30 35.639l-8.4-8.4"
                    transform="translate(.506 .539)"
                />
            </G>
        </Svg>
    )
}

function PaymentSvg(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={46}
            height={31.846}
            viewBox="0 0 46 31.846"
            {...props}
        >
            <Path
                d="M45.462 7H6.538A3.538 3.538 0 003 10.538v24.77a3.538 3.538 0 003.538 3.538h38.924A3.538 3.538 0 0049 35.308v-24.77A3.538 3.538 0 0045.462 7zM17.154 33.538h-7.077a1.769 1.769 0 110-3.538h7.077a1.769 1.769 0 010 3.538zm1.769-12.385a1.769 1.769 0 01-1.769 1.769h-7.077a1.769 1.769 0 01-1.769-1.769v-7.076a1.769 1.769 0 011.769-1.769h7.077a1.769 1.769 0 011.769 1.769zm23 12.385H27.769a1.769 1.769 0 010-3.538h14.154a1.769 1.769 0 110 3.538z"
                transform="translate(-3 -7)"
                fill="#ffffc8"
            />
        </Svg>
    )
}