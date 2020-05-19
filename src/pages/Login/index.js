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
      <View style={styles.topView}>
        <View style={{padding: 20}}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={35}
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
});
