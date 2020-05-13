import React from 'react';
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

const BodyTemperature = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text>AAAAAAAAAAAAAAAA</Text>
    </View>
  );
};

export default BodyTemperature;

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
