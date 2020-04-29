import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;

const OtpVerify = props => {
  const {navigation} = props;

  const OtpInputBoxs = props => {
    return (
      <View style={{flexDirection: 'row', marginTop: 50}}>
        {[0, 1, 2, 3].map((element, index) => (
          <View style={styles.otpInputView} key={index}>
            <View style={{borderWidth: 1, padding: 5}}>
              <TextInput />
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={{fontSize: 35}}>Verify Mobile</Text>
      </View>
      <View style={styles.centerView}>
        <OtpInputBoxs />
        <View style={{flexDirection: 'row', padding: 20}}>
          <Text style={{fontSize: 18}}>Get back OTP? </Text>
          <TouchableOpacity onPress={() => alert('Send Again')}>
            <Text style={{color: '#0081f2', fontSize: 18}}>Send Again</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={() => navigation.push('App')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.signText}>Verify</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topView: {
    flex: 0.2,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  centerView: {
    flex: 0.5,
    // flexDirection: 'row',
  },
  bottomView: {
    flex: 0.3,
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 15,
    width: width * 0.85,
    backgroundColor: '#1FC2CB',
    marginTop: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  signText: {
    color: '#fff',
    fontSize: 18,
  },
  otpInputView: {
    paddingLeft: 20,
  },
});
