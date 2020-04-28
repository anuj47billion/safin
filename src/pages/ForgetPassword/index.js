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
import {Formik} from 'formik';

const width = Dimensions.get('window').width;

const ForgetPassword = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={{fontSize: 35}}>Forget Password</Text>
      </View>
      <Formik
        initialValues={{phoneNumber: '', password: ''}}
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
              </View>
            </View>
            <View style={styles.bottomView}>
              <TouchableOpacity onPress={() => navigation.push('OtpVerify')}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.signText}>Reset</Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default ForgetPassword;

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
