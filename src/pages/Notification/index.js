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

  return (
    <View style={styles.container}>
      <Header title="Notification" navigation={navigation} />
      <View style={styles.viewBody}>
        <Text>Notification</Text>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.83,
  },
});
