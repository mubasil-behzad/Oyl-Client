import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ProfileSetup, Signin, Signup, Splash } from '../../screens/authFlow';
import { PrivacyPolicy, TermServices } from '../../screens/appFlow';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Signin' component={Signin} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='ProfileSetup' component={ProfileSetup} />
            <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ headerShown: false }} />
            <Stack.Screen name='TermServices' component={TermServices} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthNavigation