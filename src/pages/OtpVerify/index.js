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
import {RFValue} from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
        <View style={{padding: 20}}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={RFValue(35, height)}
          />
        </View>
        <View>
          <Image
            style={{height: '100%'}}
            source={require('../../assets/image/topRightCorner.png')}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bodyView}>
          <View style={styles.bodyTopView}>
            <Text style={{fontSize: RFValue(35, height)}}>Verify Mobile</Text>
          </View>
          <View style={styles.centerView}>
            <OtpInputBoxs />
            <View style={{flexDirection: 'column', padding: 20}}>
              <Text style={{fontSize: RFValue(16, height), color: '#c1c1c1'}}>
                Please enter 4 digit one time password sent to your mobile
                number.
              </Text>
              <TouchableOpacity onPress={() => alert('Send Again')}>
                <Text style={{color: '#000', fontSize: 18}}>Send Again</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomButtonView}>
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
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  topView: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomView: {
    flex: 0.8,
  },
  bodyView: {
    width: width,
    flex: 1,
  },
  bodyTopView: {
    flex: 0.2,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  centerView: {
    flex: 0.5,
    // flexDirection: 'row',
  },
  bottomButtonView: {
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
    fontSize: RFValue(18, height),
  },
  otpInputView: {
    paddingLeft: 20,
  },
});
