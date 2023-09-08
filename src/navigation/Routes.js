import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, {useContext,useState,useEffect} from 'react'
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(false);
  
    const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    };
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; 
    }, []);
  
    if (initializing) return null;
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='AuthNavigation' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='AppNavigation' component={AppNavigation} />
                <Stack.Screen name='AuthNavigation' component={AuthNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes