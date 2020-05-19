/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'react-native-elements';
import {Field} from 'formik';
import FormikInputField from '../../../../components/forms/formikFields/FormikInputField';
import {RFValue} from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SignUpForm = props => {
  const {navigation, handleChange, handleBlur, handleSubmit, values} = props;
  const [securePasswordStatus, setSecurePasswordStatus] = useState(true);
  const [secureCPasswordStatus, setSecureCPasswordStatus] = useState(true);

  const changeSecureStatus = name => {
    if (name === 'password') {
      setSecurePasswordStatus(!securePasswordStatus);
    } else {
      setSecureCPasswordStatus(!secureCPasswordStatus);
    }
  };

  return (
    <>
      <View style={styles.centerView}>
        <ScrollView>
          <View style={{padding: 20}}>
            <View style={{marginBottom: 30}}>
              <Field
                id="phoneNumber"
                name="phoneNumber"
                type="numeric"
                value={values.phoneNumber}
                component={FormikInputField}
                handleChange={handleChange('phoneNumber')}
                handleBlur={handleBlur('phoneNumber')}
                label="Phone Number"
                style={{
                  borderBottomWidth: 1,
                  fontSize: RFValue(18, height),
                }}
              />
            </View>
            <View style={{marginBottom: 30}}>
              <Field
                id="password"
                name="password"
                type="password"
                value={values.password}
                component={FormikInputField}
                handleChange={handleChange('password')}
                handleBlur={handleBlur('password')}
                changeSecureStatus={changeSecureStatus}
                secureStatus={securePasswordStatus}
                label="Password"
                style={{
                  fontSize: RFValue(18, height),
                }}
              />
            </View>
            <View style={{marginBottom: 20}}>
              <Field
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                value={values.confirmpassword}
                component={FormikInputField}
                handleChange={handleChange('confirmpassword')}
                handleBlur={handleBlur('confirmpassword')}
                changeSecureStatus={changeSecureStatus}
                secureStatus={secureCPasswordStatus}
                label="Confirm Password"
                style={{
                  fontSize: RFValue(18, height),
                }}
              />
            </View>
            <View>
              <CheckBox
                title="Terms & Conditions"
                checkedIcon={
                  <View style={{backgroundColor: '#1FC2CB'}}>
                    <AntDesign
                      style={{color: '#fff'}}
                      name="check"
                      size={RFValue(20, height)}
                    />
                  </View>
                }
                uncheckedIcon={<View style={{padding: 9, borderWidth: 1}} />}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                  padding: 0,
                }}
                checked={true}
              />
            </View>

            <View style={styles.bottomView}>
              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.signText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{fontSize: RFValue(18, height)}}>
                  You have an account?{' '}
                </Text>
                <TouchableOpacity onPress={() => navigation.push('Login')}>
                  <Text
                    style={{color: '#0081f2', fontSize: RFValue(18, height)}}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  centerView: {
    flex: 0.8,
  },
  bottomView: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    padding: 15,
    width: width * 0.85,
    backgroundColor: '#1FC2CB',
    marginTop: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  signText: {
    color: '#fff',
    fontSize: RFValue(18, height),
  },
});
