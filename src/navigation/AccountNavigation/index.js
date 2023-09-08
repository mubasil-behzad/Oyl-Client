import { createStackNavigator } from '@react-navigation/stack';
import { PrivacyPolicy, TermServices, ThanKYou, UserProfile } from '../../screens/appFlow';
import EditProfile from '../../screens/appFlow/account';

const Stack = createStackNavigator();

const AccountNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='UserProfile'>
            <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name='ThankYou' component={ThanKYou} options={{ headerShown: false }} />
            <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ headerShown: false }} />
            <Stack.Screen name='TermServices' component={TermServices} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AccountNavigation;
