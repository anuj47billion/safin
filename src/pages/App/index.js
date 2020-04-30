/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
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
import Notification from '../Notification';
import Settings from '../Settings';
import Weight from '../Weight';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Tabs = params => {
  console.log(params);
  return (
    <Tab.Navigator
      initialRouteName={
        params.route.params ? params.route.params.screenName : 'Profile'
      }>
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
        component={Settings}
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
};

const CustomDrawerContent = props => {
  const {navigation, state} = props;
  return (
    <>
      <View style={styles.titleView}>
        <Text style={{color: '#fff', fontSize: 15}}>Welcome</Text>
        <Text style={{color: '#fff', fontSize: 25}}>Test User</Text>
      </View>
      <DrawerContentScrollView {...props}>
        {state.routes.length > 0 &&
          state.routes.map((route, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  props.navigation.push('App', {
                    screen: route.name,
                  });
                }}>
                <View style={styles.drawerRoutesView}>
                  <View>
                    {route.name === 'Dashboard' && (
                      <AntDesign name="home" size={30} />
                    )}
                    {route.name === 'Summary' && (
                      <MaterialCommunityIcons
                        name="calendar-blank-outline"
                        size={30}
                      />
                    )}
                    {route.name === 'Profile' && (
                      <EvilIcons name="user" size={30} />
                    )}
                    {route.name === 'Notification' && (
                      <MaterialCommunityIcons name="bell-outline" size={30} />
                    )}
                  </View>
                  <View style={{marginLeft: 15}}>
                    <Text style={{fontSize: 18}}>{route.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </DrawerContentScrollView>
    </>
  );
};

const App = params => {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent {...props} otherParams={params} />
      )}>
      <Drawer.Screen
        name="Dashboard"
        component={Tabs}
        initialParams={{screenName: 'Dashboard'}}
      />
      <Drawer.Screen
        name="Summary"
        component={Tabs}
        initialParams={{screenName: 'Summary'}}
      />
      <Drawer.Screen
        name="Weight"
        component={Weight}
        initialParams={{screenName: 'Weight'}}
      />
      <Drawer.Screen
        name="Settings"
        component={Tabs}
        initialParams={{screenName: 'Settings'}}
      />
      <Drawer.Screen
        name="Profile"
        component={Tabs}
        initialParams={{screenName: 'Profile'}}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        initialParams={{screenName: 'Notification'}}
      />
    </Drawer.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  titleView: {
    padding: 30,
    backgroundColor: '#1BA9B1',
  },
  drawerRoutesView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
});
