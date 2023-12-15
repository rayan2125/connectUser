
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../screen/Auth/login'


import AuthNavigation from './authNavigation'
import TabNavigation from './tabNavigation'
import UploadDonation from '../screen/uploadDonation'
import Cummunication from '../screen/cummunication'

const Stack = createStackNavigator()
const IndexNaviagtion = () => {
   
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
           
                    <Stack.Screen name='Home' component={TabNavigation} />
                    <Stack.Screen name='UploadDonation' component={UploadDonation}/>
                    <Stack.Screen name='Cummunication' component={Cummunication}/>
            
        </Stack.Navigator>
    )
}

export default IndexNaviagtion

