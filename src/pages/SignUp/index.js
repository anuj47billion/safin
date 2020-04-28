/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LoginForm from './components/LoginForm';
import {Formik} from 'formik';
import {CheckBox} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;

const SignUp = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={{fontSize: 35}}>Sign Up</Text>
      </View>
      <Formik
        initialValues={{phoneNumber: '', password: '', confirmpassword: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <View style={styles.centerView}>
              <View style={{padding: 20}}>
                <View>
                  <Text>Phone Number</Text>
                  <TextInput
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                    style={{
                      borderBottomWidth: 1,
                      fontSize: 18,
                      marginBottom: 30,
                      marginTop: -10,
                    }}
                  />
                </View>
                <View>
                  <Text>Password</Text>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={{
                      borderBottomWidth: 1,
                      fontSize: 18,
                      marginBottom: 20,
                      marginTop: -10,
                    }}
                  />
                </View>
                <View>
                  <Text>Confirm Password</Text>
                  <TextInput
                    onChangeText={handleChange('confirmpassword')}
                    onBlur={handleBlur('confirmpassword')}
                    value={values.password}
                    style={{
                      borderBottomWidth: 1,
                      fontSize: 18,
                      marginBottom: 20,
                      marginTop: -10,
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
                          size={20}
                        />
                      </View>
                    }
                    uncheckedIcon={
                      <View style={{padding: 9, borderWidth: 1}} />
                    }
                    containerStyle={{
                      backgroundColor: 'transparent',
                      borderWidth: 0,
                      padding: 0,
                    }}
                    checked={true}
                  />
                </View>
              </View>
            </View>
            <View style={styles.bottomView}>
              <TouchableOpacity onPress={() => alert('Sign Up')}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.signText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={{fontSize: 18}}>You have an account? </Text>
                <TouchableOpacity onPress={() => navigation.push('Login')}>
                  <Text style={{color: '#0081f2', fontSize: 18}}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;

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
