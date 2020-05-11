import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardHome from './pages/DashboardHome';
import DashboardWarning from './pages/DashboardWarning';
import DashboardAttention from './pages/DashboardAttention';

const Stack = createStackNavigator();

const Dashboard = props => {
  return (
    <Stack.Navigator
      initialRouteName={
        props.route.params
          ? props.route.params.gotoInsideScreen
          : 'DashboardHome'
      }>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="DashboardHome"
        component={DashboardHome}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="DashboardWarning"
        component={DashboardWarning}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="DashboardAttention"
        component={DashboardAttention}
      />
    </Stack.Navigator>
  );
};

export default Dashboard;
