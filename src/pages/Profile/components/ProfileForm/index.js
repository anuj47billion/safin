import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {Field} from 'formik';
import FormikInputField from '../../../../components/forms/formikFields/FormikInputField';
import FormikDatePickerField from '../../../../components/forms/formikFields/FormikDatePickerField';
import DatePicker from 'react-native-datepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;

const ProfileForm = props => {
  const {navigation, handleChange, handleBlur, handleSubmit, values} = props;
  const [date, setDate] = useState('2020-04-25');

  return (
    <View style={styles.formView}>
      <View style={styles.topView}>
        <View style={{marginTop: 20}}>
          <Field
            id="babyName"
            name="babyName"
            type="default"
            value={values.babyName}
            component={FormikInputField}
            handleChange={handleChange('babyName')}
            handleBlur={handleBlur('babyName')}
            label="Baby's Name"
            // placeholder="Phone Number"
            style={{
              borderBottomWidth: 1,
              fontSize: 18,
              // marginTop: -10,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Field
            id="birthday"
            name="birthday"
            value={values.birthday}
            component={FormikDatePickerField}
            handleChange={handleChange('birthday')}
            handleBlur={handleBlur('birthday')}
            label="Baby's Birthday"
            style={{
              borderBottomWidth: 1,
              fontSize: 18,
              marginTop: -10,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Field
            id="gender"
            name="gender"
            type="default"
            value={values.gender}
            component={FormikInputField}
            handleChange={handleChange('gender')}
            handleBlur={handleBlur('gender')}
            label="Gender"
            style={{
              borderBottomWidth: 1,
              fontSize: 18,
              // marginTop: -10,
            }}
          />
          <View style={{marginTop: 20}}>
            <Field
              id="birthWeight"
              name="birthWeight"
              type="default"
              value={values.birthWeight}
              component={FormikInputField}
              handleChange={handleChange('birthWeight')}
              handleBlur={handleBlur('birthWeight')}
              label="Weight of birth"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                // marginTop: -10,
              }}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Field
              id="birthHeight"
              name="birthHeight"
              type="default"
              value={values.birthHeight}
              component={FormikInputField}
              handleChange={handleChange('birthHeight')}
              handleBlur={handleBlur('birthHeight')}
              label="Height of birth"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                // marginTop: -10,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.buttonContainer}>
            <Text style={styles.signText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  formView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomView: {
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
