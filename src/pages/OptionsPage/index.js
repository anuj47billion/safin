/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import OptionsButton from './components/OptionsButton';

const width = Dimensions.get('window').width;

const OptionsPage = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageTopCorner}>
        <Image source={require('../../assets/image/topRightCorner.png')} />
      </View>
      <View style={styles.bodyView}>
        <View style={styles.topView}>
          <Image source={require('../../assets/image/logo.png')} />
        </View>
        <View style={styles.bottomView}>
          <View style={styles.buttonView}>
            <OptionsButton navigation={navigation} />
          </View>
          <View style={styles.supportTextView}>
            <Text style={{color: '#5B81A4', fontSize: 18}}>
              Contact Support
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OptionsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: '#fff',
  },
  imageTopCorner: {
    position: 'absolute',
    right: 0,
  },
  topView: {
    flex: 0.55,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomView: {
    flex: 0.45,
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
  bodyView: {
    width: width,
  },
});
