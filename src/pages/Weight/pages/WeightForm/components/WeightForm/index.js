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
import FormikInputField from '../../../../../../components/forms/formikFields/FormikInputField';
import FormikDatePickerField from '../../../../../../components/forms/formikFields/FormikDatePickerField';

const width = Dimensions.get('window').width;

const WeightForm = props => {
  const {navigation, handleChange, handleBlur, handleSubmit, values} = props;
  const [date, setDate] = useState('2020-04-25');

  return (
    <View style={styles.formView}>
      <View style={styles.topView}>
        <View style={{marginTop: 20}}>
          <Field
            id="date"
            name="date"
            value={values.date}
            component={FormikDatePickerField}
            handleChange={handleChange('date')}
            handleBlur={handleBlur('date')}
            label="Date"
            style={{
              borderBottomWidth: 1,
              fontSize: 18,
              marginTop: -10,
            }}
          />
        </View>
        <View style={{marginTop: 40}}>
          <Field
            id="babyWeight"
            name="babyWeight"
            type="default"
            value={values.babyWeight}
            component={FormikInputField}
            handleChange={handleChange('babyWeight')}
            handleBlur={handleBlur('babyWeight')}
            label="Baby's weight"
            style={{
              fontSize: 18,
              // marginTop: -10,
            }}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.buttonContainer}>
            <Text style={styles.saveText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WeightForm;

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
  saveText: {
    color: '#fff',
    fontSize: 18,
  },
});
