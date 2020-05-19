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
import {RFValue} from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ForgetPassword = props => {
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
            <Text style={{fontSize: RFValue(35, height)}}>Forget Password</Text>
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
                          fontSize: RFValue(18, height),
                          // marginBottom: 30,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.bottomButtonView}>
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
  centerView: {
    flex: 0.5,
  },
  bottomButtonView: {
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
    fontSize: RFValue(18, height),
  },
});
