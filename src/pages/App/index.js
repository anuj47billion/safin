/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Dashboard from '../Dashboard';
import Summary from '../Summary';
import Profile from '../Profile';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Tabs = () => (
  <Tab.Navigator initialRouteName="Profile">
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Summary"
      component={Summary}
      options={{
        tabBarLabel: 'Summary',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Dashboard}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({color, size}) => (
          <Feather name="settings" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <EvilIcons name="user" color={color} size={size + 18} />
        ),
      }}
    />
  </Tab.Navigator>
);

const App = props => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Tabs} />
    </Drawer.Navigator>
  );
};

export default App;