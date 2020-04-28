/* eslint-disable no-undef */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;

const OptionsButton = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.signText}>Sign In</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('SignUp')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.signText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OptionsButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 15,
    width: width * 0.8,
    backgroundColor: '#1FC2CB',
    marginTop: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  signText: {
    color: '#fff',
    fontSize: 18,
  },
});
