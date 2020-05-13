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
import {Formik, Field} from 'formik';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormikInputField from '../../components/forms/formikFields/FormikInputField';

const width = Dimensions.get('window').width;

const ForgetPassword = props => {
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
        <View style={{flex: 0.9, marginTop: 15}}>
          <View style={styles.topView}>
            <Text style={{fontSize: 35}}>Forget Password</Text>
          </View>
          <Formik
            initialValues={{phoneNumber: ''}}
            onSubmit={values => {
              navigation.push('OtpVerify');
            }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <>
                <View style={styles.centerView}>
                  <View style={{padding: 20}}>
                    <View>
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
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.bottomView}>
                  <TouchableOpacity onPress={handleSubmit}>
                    <View style={styles.buttonContainer}>
                      <Text style={styles.signText}>Reset</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default ForgetPassword;

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
