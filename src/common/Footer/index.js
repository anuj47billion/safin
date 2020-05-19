import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

const Footer = props => {
  const {navigation} = props;
  return (
    <View style={styles.footerTab}>
      <TouchableOpacity
        style={styles.iconTextView}
        onPress={() => {
          navigation.push('App', {
            screen: 'Dashboard',
            screenName: 'Dashboard',
          });
        }}>
        <AntDesign color="#80D5DC" name="home" size={22} />
        <Text style={{color: '#80D5DC', fontSize: 12}}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconTextView}
        onPress={() => {
          navigation.push('App', {
            screen: 'Summary',
            screenName: 'Summary',
          });
        }}>
        <MaterialCommunityIcons
          color="#80D5DC"
          name="calendar-blank-outline"
          size={22}
        />
        <Text style={{color: '#80D5DC', fontSize: 12}}>Summary</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconTextView}
        onPress={() => {
          navigation.push('App', {
            screen: 'Settings',
            screenName: 'Settings',
          });
        }}>
        <Feather color="#80D5DC" name="settings" size={22} />
        <Text style={{color: '#80D5DC', fontSize: 12}}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconTextView}
        onPress={() => {
          navigation.push('App', {
            screen: 'Profile',
            screenName: 'Profile',
          });
        }}>
        <EvilIcons color="#80D5DC" name="user" size={35} />
        <Text style={{color: '#80D5DC', fontSize: 12}}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerTab: {
    flex: 0.08,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  iconTextView: {
    alignItems: 'center',
    flex: 0.25,
    marginTop: 5,
  },
});
