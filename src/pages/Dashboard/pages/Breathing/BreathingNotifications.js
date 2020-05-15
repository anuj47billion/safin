import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Header from '../../../../common/Header';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BreathingNotifications = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header title="Breathing" type="breathing" navigation={navigation} />
      <View style={styles.viewBody}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#d5d5d5',
          }}>
          <View
            style={{
              flex: 0.15,
            }}>
            <View
              style={{
                borderRadius: 50,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FD9068',
              }}>
              <Text style={{color: '#fff'}}>15</Text>
              <Text style={{color: '#fff', marginTop: -5}}>May</Text>
            </View>
          </View>
          <View style={{flex: 0.85, paddingLeft: 10}}>
            <Text style={{color: '#A9B7C4', fontSize: 15}}>02:15 pm</Text>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '700'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#d5d5d5',
          }}>
          <View
            style={{
              flex: 0.15,
            }}>
            <View
              style={{
                borderRadius: 50,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FD9068',
              }}>
              <Text style={{color: '#fff'}}>15</Text>
              <Text style={{color: '#fff', marginTop: -5}}>May</Text>
            </View>
          </View>
          <View style={{flex: 0.85, paddingLeft: 10}}>
            <Text style={{color: '#A9B7C4', fontSize: 15}}>12:15 pm</Text>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '700'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#d5d5d5',
          }}>
          <View
            style={{
              flex: 0.15,
            }}>
            <View
              style={{
                borderRadius: 50,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FD9068',
              }}>
              <Text style={{color: '#fff'}}>15</Text>
              <Text style={{color: '#fff', marginTop: -5}}>May</Text>
            </View>
          </View>
          <View style={{flex: 0.85, paddingLeft: 10}}>
            <Text style={{color: '#A9B7C4', fontSize: 15}}>04:15 pm</Text>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '700'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BreathingNotifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.91,
    flexDirection: 'column',
    backgroundColor: '#F5FBFF',
  },
});
