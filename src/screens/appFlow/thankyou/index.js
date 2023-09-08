import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard,
    BackHandler,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React, { useEffect } from 'react'
import { appStyles, colors } from '../../../services'
import { StatusBars } from '../../../components/statusBars'
import TouchableButton from '../../../components/buttons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { appImages, fontSize } from '../../../services/utilities';

const ThanKYou = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const fromPaymentMethods = route.params?.fromPaymentMethods
    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
        return () => {
            navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } })
        }
    });
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const handleBackPress = () => {
        if (fromPaymentMethods === 'PaymentMethods') {
            navigation.reset({ index: 2, routes: [{ name: 'HomeNavigation', params: { screen: 'PaymentMethods' } }] });
            return true;
        }
        else {
            navigation.navigate('AccountNavigation', { screen: 'UserProfile' });
            return true;
        }
    };
    const handleHomePress = () => {
        return (
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeNavigation', params: { screen: 'Home' } }],
            })
        )
    };

    return (
        <ImageBackground
            source={appImages.Background}
            style={appStyles.BackgroundImage}>
            <KeyboardAvoidingView
                style={appStyles.ThanYou_Container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
                <StatusBars barStyle={'dark-content'} backgroundColor={colors.appColor2} />
                <ScrollView style={appStyles.ThanYou_ScrollView}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={appStyles.ThanYou_ContentContainer}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={appStyles.ThanYou_MainContainer}>
                            <View style={appStyles.ThanYou_ThumbContainer}>
                                <View style={appStyles.ThanYou_ThumbView}>
                                    <Image style={appStyles.ThanYou_ThumbImage}
                                        source={appImages.Thumbsup} />
                                </View>
                            </View>
                            <View style={appStyles.ThanYou_InnerContainer}>
                                <View style={appStyles.ThanYou_TextView1}>
                                    <Text style={appStyles.ThanYou_Text1}>Thank You!</Text>
                                </View>
                                <View style={appStyles.ThanYou_TextView2} >
                                    <Text style={appStyles.ThanYou_Text2}>Thanks for using our app, We hope you like it and use it again.</Text>
                                </View>
                                <View style={appStyles.ThanYou_ImageContainer}>
                                    <TouchableOpacity>
                                        <Image style={appStyles.ThanYou_FacebookImage} source={appImages.facebook} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={appStyles.ThanYou_InstagramImage} source={appImages.instagram} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ ...appStyles.Home_Buttonview }}>
                                    <TouchableButton style={{
                                        ...appStyles.Signin_Button,
                                        shadowColor: colors.appColor1,
                                        width: responsiveWidth(50),
                                        shadowRadius: 4,
                                        elevation: 7,
                                    }}
                                        touchableStlye={{
                                            marginTop: responsiveHeight(7),
                                            marginBottom: responsiveHeight(3.5),
                                        }}
                                        color={[colors.appColor1, colors.appColor2]}
                                        title={'Go Home'} styles={{
                                            ...appStyles.Home_ButtonText,
                                            fontSize: fontSize.Size_17
                                        }} onPress={handleHomePress} />
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default ThanKYou