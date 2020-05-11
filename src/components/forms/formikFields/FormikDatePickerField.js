import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {ErrorMessage} from 'formik';
import DatePicker from 'react-native-datepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;

const FormikDatePickerField = ({
  field: {...fields},
  form: {touched, errors, ...rest},
  ...props
}) => (
  <View>
    <Text>{props.label}</Text>
    <DatePicker
      style={{width: '100%', borderBottomWidth: 1}}
      date={props.value}
      mode="date"
      placeholder="select date"
      format="DD-MM-YYYY"
      //   minDate="2016-05-01"
      //   maxDate="2016-06-01"
      iconComponent={
        <MaterialCommunityIcons
          name="calendar-blank-outline"
          // color={color}
          size={28}
        />
      }
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateInput: {
          borderWidth: 0,
          alignItems: 'flex-start',
        },
      }}
      onDateChange={props.handleChange}
    />
    <ErrorMessage
      name={fields.name}
      render={msg => <Text style={{color: 'red'}}>{msg}</Text>}
    />
  </View>
);

export default FormikDatePickerField;
