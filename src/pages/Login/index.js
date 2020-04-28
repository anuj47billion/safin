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

const width = Dimensions.get('window').width;

const Login = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={{fontSize: 35}}>Sign In</Text>
      </View>
      <View style={styles.centerView}>
        <Formik
          initialValues={{phoneNumber: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
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
              <View style={{marginTop: 30}}>
                <Text>Forget Password</Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={() => navigation.push('OtpVerify')}>
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
    </View>
  );
};

export default Login;

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