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
import * as Yup from 'yup';
const width = Dimensions.get('window').width;

const validationSchema = Yup.object({
  phoneNumber: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required")
})

const Login = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={{fontSize: 35}}>Sign In</Text>
      </View>
      <Formik
        initialValues={{phoneNumber: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          alert(JSON.stringify(values));
          navigation.push('OtpVerify');
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <LoginForm
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              values={values}
              navigation={navigation}
            />
          </>
        )}
      </Formik>
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
