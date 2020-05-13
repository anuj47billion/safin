import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Animated,
  Dimensions,
} from 'react-native';
import {ErrorMessage} from 'formik';

import Octicons from 'react-native-vector-icons/Octicons';

const width = Dimensions.get('window').width;

const FormikInputField = props => {
  console.log('=================', props);

  const {
    id,
    label,
    field,
    secureStatus,
    form,
    value,
    handleChange,
    type,
    style,
    changeSecureStatus,
  } = props;

  const {touched, errors, isSubmitting} = form;

  // {
  //   field: {...fields},
  //   form: {touched, errors, ...rest},
  //   secureStatus,
  //   ...props
  // }

  const position = new Animated.Value(value ? 1 : 0);
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
        outputRange: [14, -10],
      }),
    };
  };

  if (id === 'password' || id === 'babyWeight' || id === 'confirmpassword') {
    return (
      <View>
        <Animated.Text
          style={[styles.titleStyles, returnAnimatedTitleStyles()]}>
          {label}
        </Animated.Text>
        <View style={styles.textinputView}>
          <View style={styles.inputView}>
            <TextInput
              style={style}
              onChangeText={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={value}
              secureTextEntry={secureStatus}
              keyboardType={type}
              // {...props}
            />
          </View>
          <View style={styles.secureIconView}>
            {(id === 'password' || id === 'confirmpassword') && (
              <Octicons
                name={secureStatus ? 'eye' : 'eye-closed'}
                size={22}
                onPress={() => changeSecureStatus(field.name)}
              />
            )}
            {id === 'babyWeight' && (
              <Text style={{fontWeight: '700', fontSize: 18}}>lbs</Text>
            )}
          </View>
        </View>
        <ErrorMessage
          name={field.name}
          render={msg => <Text style={{color: 'red'}}>{msg}</Text>}
        />
      </View>
    );
  }

  return (
    <View>
      <Animated.Text style={[styles.titleStyles, returnAnimatedTitleStyles()]}>
        {label}
      </Animated.Text>
      <TextInput
        style={style}
        onChangeText={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={value}
        secureTextEntry={type === 'password'}
        keyboardType={type}
        // {...props}
      />
      <ErrorMessage
        name={field.name}
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
    fontSize: 17,
  },
  textinputView: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
  },
  inputView: {
    flex: 0.9,
  },
  secureIconView: {
    flex: 0.1,
    justifyContent: 'center',
  },
});
