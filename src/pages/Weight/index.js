import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WeightForm from './pages/WeightForm';
import WeightComparison from './pages/WeightComparison';

const Stack = createStackNavigator();

const Weight = props => {
  const {navigation} = props;

  return (
    <Stack.Navigator initialRouteName="WeightComparison">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="WeightForm"
        component={WeightForm}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="WeightComparison"
        component={WeightComparison}
      />
    </Stack.Navigator>
  );
};

export default Weight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.83,
  },
});
