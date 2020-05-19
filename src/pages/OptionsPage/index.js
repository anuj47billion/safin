/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import OptionsButton from './components/OptionsButton';
import {RFValue} from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OptionsPage = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageTopView}>
        <Image
          style={{height: '100%', alignSelf: 'flex-end'}}
          source={require('../../assets/image/topRightCorner.png')}
        />
      </View>
      <View style={styles.centerView}>
        <Image
          style={{height: '80%'}}
          source={require('../../assets/image/logo.png')}
        />
      </View>
      <View style={styles.bottomView}>
        <View style={styles.buttonView}>
          <OptionsButton navigation={navigation} />
        </View>
        <View style={styles.supportTextView}>
          <Text style={{color: '#5B81A4', fontSize: RFValue(18, height)}}>
            Contact Support
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OptionsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  imageTopView: {
    right: 0,
    flex: 0.2,
  },
  centerView: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 0.4,
    flexDirection: 'column',
  },
  buttonView: {
    flex: 0.7,
  },
  supportTextView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
