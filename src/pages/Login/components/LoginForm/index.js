/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {Field} from 'formik';
import FormikInputField from '../../../../components/forms/formikFields/FormikInputField';

const width = Dimensions.get('window').width;

const LoginForm = props => {
  const {navigation, handleChange, handleBlur, handleSubmit, values} = props;
  const [secureStatus, setSecureStatus] = useState(true);

  return (
    <>
      <View style={styles.centerView}>
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
              // placeholder="Phone Number"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                // marginBottom: 30,
                marginTop: -10,
              }}
            />
          </View>
          <View style={{marginBottom: 20}}>
            <Field
              id="password"
              name="password"
              type="password"
              value={values.password}
              component={FormikInputField}
              handleChange={handleChange('password')}
              handleBlur={handleBlur('password')}
              label="Password"
              // placeholder="Password"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                // marginBottom: 20,
                marginTop: -10,
              }}
            />
          </View>
          <View style={{marginTop: 30}}>
            <TouchableOpacity onPress={() => navigation.push('ForgetPassword')}>
              <Text style={{color: '#0081f2', fontSize: 16}}>
                Forget Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.buttonContainer}>
            <Text style={styles.signText}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{fontSize: 18}}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text style={{color: '#0081f2', fontSize: 18}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  centerView: {
    flex: 0.5,
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
});
