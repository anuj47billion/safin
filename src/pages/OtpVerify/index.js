import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      <View style={styles.imageTopCorner}>
        <Image source={require('../../assets/image/topRightCorner.png')} />
      </View>
      <View style={styles.bodyView}>
        <View style={{flex: 0.09, padding: 20}}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={35}
          />
        </View>
        <View style={{flex: 0.9, marginTop: 15}}>
          <View style={styles.topView}>
            <Text style={{fontSize: 35}}>Verify Mobile</Text>
          </View>
          <View style={styles.centerView}>
            <OtpInputBoxs />
            <View style={{flexDirection: 'column', padding: 20}}>
              <Text style={{fontSize: 16, color: '#c1c1c1'}}>
                Please enter 4 digit one time password sent to your mobile
                number.
              </Text>
              <TouchableOpacity onPress={() => alert('Send Again')}>
                <Text style={{color: '#000', fontSize: 18}}>Send Again</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('App', {
                  screen: 'Profile',
                });
              }}>
              <View style={styles.buttonContainer}>
                <Text style={styles.signText}>Verify</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OtpVerify;

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
  bodyView: {
    width: width,
    flex: 1,
  },
});
