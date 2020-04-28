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
      onBlur={props.handleBlur}
      value={props.value}
      secureTextEntry={props.type === 'password'}
      keyboardType={props.type}
      // {...props}
    />
    <ErrorMessage
      name={fields.name}
      render={msg => <Text style={{color: 'red'}}>{msg}</Text>}
    />
  </View>
);

export default FormikInputField;
