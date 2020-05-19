import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const Notification = props => {
  const {navigation} = props;

  const notifications = [
    {
      id: 1,
      day: 'TODAY',
      message: 'Please check device status LEDs for overall baby health status',
      isRead: false,
    },
    {
      id: 2,
      day: 'TODAY',
      message: 'Please check device status LEDs for overall baby health status',
      isRead: false,
    },
    {
      id: 3,
      day: 'YESTERDAY',
      message: 'Please check device status LEDs for overall baby health status',
      isRead: false,
    },
    {
      id: 4,
      day: 'YESTERDAY',
      message: 'Please check device status LEDs for overall baby health status',
      isRead: true,
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Notification" navigation={navigation} />
      <View style={styles.viewBody}>
        <ScrollView>
          {notifications.map((notification, key) => {
            return (
              <View style={{paddingTop: 20, paddingLeft: 20, paddingRight: 20}}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingBottom: 20,
                    borderBottomColor: '#D7EFFF',
                  }}>
                  <Text
                    style={{
                      color: !notification.isRead ? '#97A6B5' : '#CDD8E0',
                    }}>
                    {notification.day}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: notification.isRead ? '#C0C5C8' : '#6B6D6F',
                    }}>
                    {notification.message}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FBFF',
  },
  viewBody: {
    flex: 0.83,
  },
});
