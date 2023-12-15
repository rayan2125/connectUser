
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../screen/home'
import Profile from '../screen/Tab/profile'
import Chat from '../screen/Tab/chat'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Donate from '../screen/Tab/donate'

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
    return (
        <Tab.Navigator  screenOptions={({ route }) => ({
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 12,
    
            },
            tabBarIcon: ({ color, size }) => {
              let iconName;
    
    
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Chat') {
                iconName = 'comments';
              } else if (route.name === 'Profile') {
                iconName = 'user';
              } else if( route.name === 'Donate'){
                iconName = 'plus';
              }
    
              return <Icon name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: '#14213d',
            tabBarInactiveTintColor: '#eb5e28', 
            tabBarActiveBackgroundColor: '#e5e5e5', 
            tabBarInactiveBackgroundColor: 'white', 
            tabBarShowLabel: true, 
          })}
        >
            <Tab.Screen name='Home' component={Home}
             options={{
                tabBarLabel: 'Home',
              }}
            />
            <Tab.Screen name='Donate' component={Donate}
            options={{
                tabBarLabel: 'Donate',
              }}
            />
            <Tab.Screen name='Chat' component={Chat} 
            options={{
                tabBarLabel: 'Chat',
              }}
            />
            <Tab.Screen name='Profile' component={Profile}
            options={{
                tabBarLabel: 'Profile',
              }}
            />
        </Tab.Navigator>




    )
}

export default TabNavigation