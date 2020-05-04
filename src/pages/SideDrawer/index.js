import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Header from '../../common/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../../pages/Dashboard';
import Summary from '../../pages/Summary';
import Profile from '../../pages/Profile';
import Settings from '../../pages/Settings';
import Weight from '../../pages/Weight';
import Notification from '../../pages/Notification';

const Drawer = createDrawerNavigator();

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
                  if (route.name === 'Notification') {
                    navigation.push('Notification');
                  } else {
                    props.navigation.push('App', {
                      screen: route.name,
                    });
                  }
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

const SideDrawer = params => {
  const {navigation} = params;
  return (
    <Drawer.Navigator
      initialRouteName={params.route.params.screenName}
      drawerContent={props => (
        <CustomDrawerContent {...props} otherParams={params} />
      )}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        initialParams={{screenName: 'Dashboard'}}
      />
      <Drawer.Screen
        name="Summary"
        component={Summary}
        initialParams={{screenName: 'Summary'}}
      />
      <Drawer.Screen
        name="Weight"
        component={Weight}
        initialParams={{screenName: 'Weight'}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        initialParams={{screenName: 'Settings'}}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
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

export default SideDrawer;

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
