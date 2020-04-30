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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Settings = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header title="Settings" navigation={navigation} />
      <View style={styles.viewBody}>
        <Text>Settings</Text>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.91,
  },
  dashboardBody: {
    flex: 0.92,
  },
  dashboardHeader: {
    flex: 0.08,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#d2d2d2',
  },
  headerOptionView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  imageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideIconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  itemListView: {
    borderBottomWidth: 1,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});
