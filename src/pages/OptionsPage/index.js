/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import OptionsButton from './components/OptionsButton';

const OptionsPage = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={'stretch'}
        style={{flex: 1}}
        // source={require('../../assets/image/background.jpg')}
      >
        <View style={styles.topView} />
        <View style={styles.bottomView}>
          <View style={styles.buttonView}>
            <OptionsButton navigation={navigation} />
          </View>
          <View style={styles.supportTextView}>
            <Text style={{color: '#0081f2'}}>Contact Support</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OptionsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topView: {
    flex: 0.55,
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
});
