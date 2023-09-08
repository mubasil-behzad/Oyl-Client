import {
    View,
    ImageBackground,
    BackHandler,
    ScrollView,
} from 'react-native'
import React, { useEffect } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { StatusBars } from '../../../components/statusBars'
import { ScreenHeader } from '../../../components/hearder'
import { appStyles, colors } from '../../../services'
import { Texts } from '../../../components/texts'
import { useNavigation, useRoute } from '@react-navigation/native';
import { appImages } from '../../../services/utilities'

const TermServices = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const fromSignup = route.params?.fromSignup
    const fromUserProfile = route.params?.fromUserProfile
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
        if (fromSignup === 'Signup') {
            navigation.navigate('AuthNavigation', { screen: 'Signup' });
            return true;
        }
        if (fromUserProfile === 'UserProfile') {
            navigation.reset({ routes: [{ name: 'AccountNavigation', params: { screen: 'UserProfile' } }] });
            return true;
        }
    };
    const handleGoBackPress = () => {
        if (fromSignup === 'Signup') {
            navigation.navigate('AuthNavigation', { screen: 'Signup' });
        }
        if (fromUserProfile === 'UserProfile') {
            navigation.reset({ routes: [{ name: 'AccountNavigation', params: { screen: 'UserProfile' } }] });
            return true;
        }
    };

    return (
        <ImageBackground
            source={appImages.Background}
            style={appStyles.BackgroundImage}>
            <StatusBars barStyle={'dark-content'} backgroundColor={colors.appColor2} />
            <ScreenHeader styles={{ paddingBottom: responsiveHeight(1.1) }}
                name={'chevron-small-left'}
                text={'Terms of Service'} textstyle={{
                    color: colors.appColor7,
                    marginLeft: responsiveWidth(11)
                }} onPress={handleGoBackPress} color={colors.appColor8} />
            <ScrollView style={appStyles.Privacy_Term_ScrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={appStyles.Privacy_Term_ContentContainer}>
                <View style={appStyles.Privacy_Term_MainContainer}>
                    <Texts text={'Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.\n\n\nPhasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.\n\n\nInteger at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo.\n\n\nProin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.\n\n\nInteger at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.\n\n\nPhasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.'} />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default TermServices