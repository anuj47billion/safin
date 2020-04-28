import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {ErrorMessage} from 'formik';

const FormikInputField = ({
  field: {...fields},
  form: {touched, errors, ...rest},
  ...props
}) => (
  <View>
    <Text>{props.label}</Text>
    <TextInput
      style={props.style}
      onChangeText={props.handleChange}
      // {...props}
    />
    {/* <ErrorMessage
      name={fields.name}
      render={msg => <div className="text-danger font-size-12">{msg}</div>}
    /> */}
  </View>
);

export default FormikInputField;
