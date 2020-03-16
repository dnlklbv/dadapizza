import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Menu from './components/Menu';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Basket from './components/Basket';

function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerStyle: {
            backgroundColor: '#ff6900',
            shadowOffset: {
              height: 0,
            },
          },
          title: '',
          headerTintColor: '#ffffff',
        }}
      />
    </Stack.Navigator>
  );
}

export default function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Menu" component={MenuStack} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Basket" component={Basket} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
