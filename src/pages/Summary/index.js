import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WeeklyChart from './pages/WeeklyChart';
import WeeklySummary from './pages/WeeklySummary';

const Stack = createStackNavigator();

const Summary = props => {
  return (
    <Stack.Navigator
      initialRouteName={
        props.route.params ? props.route.params.gotoInsideScreen : 'WeeklyChart'
      }>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="WeeklyChart"
        component={WeeklyChart}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="WeeklySummary"
        component={WeeklySummary}
      />
    </Stack.Navigator>
  );
};

export default Summary;
