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
import SignUpForm from './components/SignUpForm';
import {Formik} from 'formik';
import {CheckBox} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';

const width = Dimensions.get('window').width;

const validationSchema = Yup.object({
  phoneNumber: Yup.string().required('This field is required'),
  password: Yup.string().required('This field is required'),
  confirmpassword: Yup.string().required('This field is required'),
});

const SignUp = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={{fontSize: 35}}>Sign Up</Text>
      </View>
      <Formik
        initialValues={{phoneNumber: '', password: '', confirmpassword: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          alert(JSON.stringify(values));
          navigation.push('OtpVerify');
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <SignUpForm
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            values={values}
            navigation={navigation}
          />
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
});
