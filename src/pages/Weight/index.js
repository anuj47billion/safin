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
import Footer from '../../common/Footer';

const Weight = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header title="Weight" navigation={navigation} />
      <View style={styles.viewBody}>
        <Text>Weight</Text>
      </View>
      <Footer navigation={navigation} />
    </View>
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
