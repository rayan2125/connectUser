
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../screen/Auth/login'


import AuthNavigation from './authNavigation'
import TabNavigation from './tabNavigation'

const Stack = createStackNavigator()
const IndexNaviagtion = () => {
    const data = null
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                data === "" ?
                    <Stack.Screen name='Login' component={AuthNavigation} /> :
                    <Stack.Screen name='Home' component={TabNavigation} />
            }
        </Stack.Navigator>
    )
}

export default IndexNaviagtion

