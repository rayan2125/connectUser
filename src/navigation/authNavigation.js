import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screen/Auth/register';
import Login from '../screen/Auth/login';
import TabNavigation from './tabNavigation'; // Import your TabNavigation component
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    const navigation = useNavigation();

    const handleSuccessfulLogin = () => {
        navigation.navigate('Home', { screen: 'Home' });
    };

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login'>
                {(props) => <Login {...props} onLogin={handleSuccessfulLogin} />}
            </Stack.Screen>
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    );
};

export default AuthNavigation;
