import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import HomeNavigation from '../homeNavigation';
import AccountNavigation from '../AccountNavigation';
import { colors } from '../../services';

const Tab = createBottomTabNavigator();
const AppNavigation = () => {

    return (
        <Tab.Navigator initialRouteName='HomeNavigation' screenOptions={{
            style: { backgroundColor: colors.appColor2 },
            tabBarActiveTintColor: colors.appColor6,
        }}>
            <Tab.Screen
                name="HomeNavigation"
                component={HomeNavigation}
                options={() => ({
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FeatherIcon name='home' size={25} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="AccountNavigation"
                component={AccountNavigation}
                options={() => ({
                    tabBarLabel: 'Account',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5Icon name='user' size={25} color={color} />
                    ),
                })}
            />
        </Tab.Navigator>
    );
}

export default AppNavigation