import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Animated} from 'react-native';
import {ErrorMessage} from 'formik';

const FormikInputField = ({
  field: {...fields},
  form: {touched, errors, ...rest},
  ...props
}) => {
  const position = new Animated.Value(props.value ? 1 : 0);
  const [isFieldActive, setIsFieldActive] = useState(false);

  const handleBlur = () => {
    if (isFieldActive) {
      setIsFieldActive(false);
      Animated.timing(position, {
        toValue: 0,
        duration: 150,
      }).start();
    }
  };

  const handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
      }).start();
    }
  };

  const returnAnimatedTitleStyles = () => {
    return {
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
    };
  };

  return (
    <View>
      <Animated.Text style={[styles.titleStyles, returnAnimatedTitleStyles()]}>
        {props.label}
      </Animated.Text>
      <TextInput
        style={props.style}
        onChangeText={props.handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
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
};

export default FormikInputField;

const styles = StyleSheet.create({
  titleStyles: {
    position: 'absolute',
    left: 5,
  },
});
