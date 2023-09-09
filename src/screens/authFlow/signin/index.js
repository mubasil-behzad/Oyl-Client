import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  BackHandler
} from 'react-native'
import Toast from 'react-native-simple-toast'
import React, { useContext, useState, useEffect } from 'react'
import { appStyles, colors } from '../../../services'
import { InputFields } from '../../../components/textInput'
import TouchableButton from '../../../components/buttons'
import { useNavigation } from '@react-navigation/native'
import { StatusBars } from '../../../components/statusBars'
import { appImages } from '../../../services/utilities'
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { AuthContext } from '../../../navigation/AuthProvider'
import { DotIndicator } from 'react-native-indicators';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Signin = () => {
  const navigation = useNavigation();
  const { login, user } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      backHandler.remove();
    };
  }, []);
  const handleBackPress = () => {
    BackHandler.exitApp()
    return true;
  };
  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const isPasswordValid = (password) => {
    return password.length >= 6;
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignupPress = () => {
    navigation.navigate('AuthNavigation', { screen: 'Signup' });
  };
  const handleHomePress = async () => {
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
        setLoading(true);
        console.log('helo');
        await login(email, password).then(() => {
          console.log('user id: ', user.uid);
          AsyncStorage.setItem("UserID", JSON.stringify(user));
          setLoading(false);
          navigation.navigate('AppNavigation', { screen: 'Home' })
        });
      } catch (error) {
        Toast.show('Invalid email or password !', Toast.SHORT, Toast.TOP);
        setLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={appStyles.Signin_Container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
    >
      <ScrollView style={appStyles.Signin_ScrollView}
        contentContainerStyle={appStyles.Signin_ContentContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={appImages.Background}
            style={appStyles.BackgroundImage}
          >
            <StatusBars barStyle={'dark-content'} backgroundColor={colors.appColor6} />
            <View style={appStyles.Signin_ImageView}>
              <Image
                style={appStyles.Signin_LogoImage}
                source={appImages.Logo} />
            </View>
            <View style={appStyles.Signin_TextView1}>
              <Text style={appStyles.Signin_Text1}>Enter your Email & Password number to log in!</Text>
            </View>
            <View style={{
              ...appStyles.Signin_InputContainer,
              shadowColor: colors.appColor11,
              elevation: 6,
            }}>
              <Text style={appStyles.Signin_Text2}>Email</Text>
              <InputFields style={appStyles.Signin_InputField}
                placeholderTextColor={colors.appColor7}
                placeholder={'Enter your email'}
                onChangeText={(userEmail) => setEmail(userEmail)}
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
                    onChangeText={(userPassword) => setPassword(userPassword)}
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
            <View style={appStyles.Signin_TextViewContainer}>
              <View style={appStyles.Signin_TextView3}>
                <Text style={appStyles.Signin_Text3}>Do not have an account? </Text>
              </View>
              <View style={appStyles.Signin_TextView4}>
                <TouchableOpacity onPress={handleSignupPress}>
                  <Text style={appStyles.Signin_Text4}>Create</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={appStyles.Signin_ButtonView}>
              <TouchableButton style={appStyles.Signin_Button}
                styles={appStyles.Signin_ButtonText}
                title="LUBE ME UP!"
                onPress={handleHomePress} />
            </View>
            {loading && (
              <View
                style={{ ...appStyles.VehicleDetail_Indicator, top: scale(500) }}>
                <DotIndicator size={9} color={colors.appColor1} />
              </View>
            )}
          </ImageBackground>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Signin