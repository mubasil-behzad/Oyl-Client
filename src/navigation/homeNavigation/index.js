import { createStackNavigator } from '@react-navigation/stack';
import { Home, PaymentMethods, VehicleDetail } from '../../screens/appFlow';

const Stack = createStackNavigator();

const HomeNavigation = ( ) => {
    
    return (
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
            <Stack.Screen name="VehicleDetail" component={VehicleDetail} options={{ headerShown: false }} />
            <Stack.Screen name='PaymentMethods' component={PaymentMethods} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default HomeNavigation;
