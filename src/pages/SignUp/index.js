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
  Image,
} from 'react-native';
import SignUpForm from './components/SignUpForm';
import {Formik} from 'formik';
import {CheckBox} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';
import {RFValue} from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
            <Text style={{fontSize: RFValue(35, height)}}>Sign Up</Text>
          </View>
          <Formik
            initialValues={{phoneNumber: '', password: '', confirmpassword: ''}}
            validationSchema={validationSchema}
            onSubmit={values => {
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
      </View>
    </View>
  );
};

export default SignUp;

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
