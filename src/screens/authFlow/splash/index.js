import { View, Image, ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appImages, appStyles } from '../../../services/utilities'
import { scale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { DotIndicator } from 'react-native-indicators';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors } from '../../../services/utilities/colors/index';

const Splash = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(async () => {
            AsyncStorage.getItem("UserID", async (error, data) => {
                if (data) {
                    setLoading(false);
                    navigation.navigate('AppNavigation', { screen: 'Home' })
                } else {
                    setLoading(false);
                    navigation.navigate('AuthNavigation', { screen: 'Signin' })
                }
            })
        }, 4000);
        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <ImageBackground
            source={appImages.Background}
            style={appStyles.BackgroundImage}
        >
            <View style={styles.Splash_View}>
                <Image
                    style={styles.Splash_Image}
                    source={appImages.Logo} />
                {loading && (
                    <View
                        style={{
                            ...appStyles.VehicleDetail_Indicator,
                            backgroundColor: colors.appColor18,
                            top: scale(300)
                        }}>
                        <DotIndicator size={9} color={colors.appColor1} />
                    </View>
                )}
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    Splash_View: {
        top: scale(200),
        alignSelf: 'center',
        justifyContent: 'center',
        width: scale(250),
    },
    Splash_Image: {
        alignSelf: 'center',
        height: scale(120),
        width: scale(250),
        justifyContent: 'space-around'
    }
})

export default Splash