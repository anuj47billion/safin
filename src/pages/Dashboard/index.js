import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardHome from './pages/DashboardHome';
import DashboardWarning from './pages/DashboardWarning';
import DashboardAttention from './pages/DashboardAttention';
import BodyTemperature from './pages/BodyTemperature';
import BodyTemperatureLandscape from './pages/BodyTemperature/BodyTemperatureLandscape';
import Breathing from './pages/Breathing';
import BreathingNotifications from './pages/Breathing/BreathingNotifications';
import BodyTemperatureNotifications from './pages/BodyTemperature/BodyTemperatureNotifications';

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
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="BodyTemperature"
        component={BodyTemperature}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="BodyTemperatureLandscape"
        component={BodyTemperatureLandscape}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Breathing"
        component={Breathing}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="BreathingNotifications"
        component={BreathingNotifications}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="BodyTemperatureNotifications"
        component={BodyTemperatureNotifications}
      />
    </Stack.Navigator>
  );
};

export default Dashboard;
