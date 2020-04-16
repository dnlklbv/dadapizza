import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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

const screenOptions = ({route}) => ({
  tabBarIcon: () => {
    return <Icon name="shopping-cart" />;
  },
});

const tabBarOptions = {
  activeTintColor: '#000',
  inactiveTintColor: '#939596',
};

export default function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Menu"
          options={{tabBarLabel: 'Меню'}}
          component={MenuStack}
        />
        <Tab.Screen
          name="Profile"
          options={{tabBarLabel: 'Профиль'}}
          component={Profile}
        />
        <Tab.Screen
          name="Contact"
          options={{tabBarLabel: 'Контакты'}}
          component={Contact}
        />
        <Tab.Screen
          name="Basket"
          options={{tabBarLabel: 'Корзина'}}
          component={Basket}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
