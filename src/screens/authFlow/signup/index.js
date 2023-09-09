import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    BackHandler
} from 'react-native'
import Toast from 'react-native-simple-toast'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { useEffect, useState, useContext } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { appStyles, colors } from '../../../services'
import { InputFields } from '../../../components/textInput'
import { ScreenHeader } from '../../../components/hearder'
import { CheckBoxes } from '../../../components/checkBoxs'
import TouchableButton from '../../../components/buttons'
import { StatusBars } from '../../../components/statusBars'
import { useNavigation } from '@react-navigation/native'
import { scale } from 'react-native-size-matters'
import { appImages } from '../../../services/utilities'
import { AuthContext } from '../../../navigation/AuthProvider'
import auth from '@react-native-firebase/auth';
import { DotIndicator } from 'react-native-indicators';

const Signup = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const handleBackPress = () => {
        navigation.reset({ index: 1, routes: [{ name: 'AuthNavigation', params: { screen: 'Signin' } }] });
        return true;
    };
    const navigation = useNavigation();
    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    const isPasswordValid = (password) => {
        return password.length >= 6;
    };
    const handleProfileSetupPress = async () => {
        if (!isEmailValid(email)) {
            if (email.trim() === '') {
                Toast.show('Enter email first', Toast.SHORT, Toast.TOP);
            } else {
                Toast.show('Enter valid email', Toast.SHORT, Toast.TOP);
                return;
            }
        } else if (!isPasswordValid(password)) {
            if (password.trim() === '') {
                Toast.show('Enter password first', Toast.SHORT, Toast.TOP);
            } else {
                Toast.show('Password length less than 6', Toast.SHORT, Toast.TOP);
                return;
            }
        } else {
            try {
                if (isChecked) {
                    setLoading(true);
                    await auth().createUserWithEmailAndPassword(email, password).then(() => {
                        console.log('User added');
                        setLoading(false);
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'AuthNavigation', params: { screen: 'ProfileSetup' } }],
                        });
                    })


                } else {
                    Toast.show('Please check the circle', Toast.SHORT, Toast.TOP);
                }
            } catch (error) {
                setLoading(false);
                if (error.code === 'auth/email-already-in-use') {
                    Toast.show('Email already exists', Toast.SHORT, Toast.TOP);
                    console.log('Email already exists');
                    setPassword('');
                    setEmail('');
                } else {
                    console.error('Registration error:', error);
                }
            }
        }
    };
    const handlePrivacyPolicyPress = () => {
        navigation.navigate('AuthNavigation', { screen: 'PrivacyPolicy', params: { fromSignup: 'Signup' } });
    };
    const handleTermServicesPress = () => {
        navigation.navigate('AuthNavigation', { screen: 'TermServices', params: { fromSignup: 'Signup' } });
    };
    const handleGoBackPress = () => {
        navigation.reset({ routes: [{ name: 'AuthNavigation', params: { screen: 'Signin' } }] });
        return true;
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <KeyboardAvoidingView
            style={appStyles.Signup_Container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
        >
            <ScrollView style={appStyles.Signup_ScrollView}
                contentContainerStyle={appStyles.Signup_ContentContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ImageBackground
                        source={appImages.Background}
                        style={appStyles.BackgroundImage}
                    >
                        <View style={appStyles.Signup_Maincontainer}>
                            <StatusBars barStyle={'dark-content'} backgroundColor={colors.appColor2} />
                            <ScreenHeader name={'chevron-small-left'}
                                text={'Create Account'} textstyle={{
                                    color: colors.appColor7,
                                    paddingLeft: responsiveWidth(1)
                                }} onPress={handleGoBackPress}
                                color={colors.appColor8} />
                            <View style={appStyles.Signup_InputView}>
                                <View style={{
                                    ...appStyles.Signin_InputContainer,
                                    shadowColor: colors.appColor13,
                                    elevation: 8,
                                    marginTop: responsiveHeight(4),
                                    paddingRight: responsiveWidth(20),
                                }}>
                                    <Text style={appStyles.Signin_Text2}>Email</Text>
                                    <InputFields style={appStyles.Signin_InputField}
                                        placeholderTextColor={colors.appColor7}
                                        placeholder={'Enter your email'}
                                        value={email}
                                        onChangeText={setEmail}
                                        keyboardType={'default'} />
                                </View>
                                <View style={{
                                    ...appStyles.Signin_InputContainer,
                                    marginTop: scale(10),
                                    shadowColor: colors.appColor13,
                                    height: scale(65),
                                    elevation: 8,
                                }}>
                                    <Text style={appStyles.Signin_Text2}>Password</Text>
                                    <View style={appStyles.Signup_PasswordContainer}>
                                        <View style={{ flex: 4 }}>
                                            <InputFields
                                                style={appStyles.Signin_InputField}
                                                placeholderTextColor={colors.appColor7}
                                                placeholder={'Enter your password'}
                                                keyboardType={'default'}
                                                onChangeText={setPassword}
                                                secureTextEntry={!showPassword}
                                                value={password} />
                                        </View>
                                        <View style={appStyles.Signup_ImageContainer}>
                                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                                <Icon style={appStyles.Signup_Icon1} name={showPassword ? 'eye-slash' : 'eye'} size={16} color={colors.appColor9} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={appStyles.Signup_View1}>
                                <View style={appStyles.Signup_View2}>
                                    <View style={appStyles.Signup_View3}>
                                        <CheckBoxes onCheckBoxChange={(data) => {
                                            setIsChecked(data);
                                        }} />
                                    </View>
                                    <View style={appStyles.Signup_View4}>
                                        <Text style={appStyles.Signup_Text3}>I accept the </Text>
                                    </View>
                                    <View style={appStyles.Signup_View5} >
                                        <TouchableOpacity onPress={handleTermServicesPress}>
                                            <Text style={appStyles.Signup_Text4}>Terms of Service </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={appStyles.Signup_View6}>
                                        <Text style={appStyles.Signup_Text3}>and </Text>
                                    </View>
                                    <View style={appStyles.Signup_View7}>
                                        <TouchableOpacity onPress={handlePrivacyPolicyPress}>
                                            <Text style={appStyles.Signup_Text4}>Privacy Policy</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 10, alignSelf: 'center' }}>
                                <TouchableButton style={{
                                    ...appStyles.Signin_Button,
                                }}
                                    touchableStlye={{ marginTop: responsiveHeight(10) }}
                                    styles={appStyles.Signup_ButtonText} title="Lets go!"
                                    onPress={handleProfileSetupPress}
                                />
                            </View>
                        </View>
                        {loading && (
                            <View
                                style={{...appStyles.VehicleDetail_Indicator,top:scale(250)}}>
                                <DotIndicator size={9} color={colors.appColor1} /> 
                            </View>
                        )}
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Signup