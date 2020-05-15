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
  Image,
} from 'react-native';
import LoginForm from './components/LoginForm';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;

const validationSchema = Yup.object({
  phoneNumber: Yup.string().required('This field is required'),
  password: Yup.string().required('This field is required'),
});

const Login = props => {
  const {navigation} = props;

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
        <View style={{flex: 0.91}}>
          <View style={styles.topView}>
            <Text style={{fontSize: 35}}>Sign In</Text>
          </View>
          <Formik
            initialValues={{phoneNumber: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={values => {
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
      </View>
    </View>
  );
};

export default Login;

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
  bodyView: {
    width: width,
    flex: 1,
  },
});
