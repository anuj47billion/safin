/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const LoginForm = props => {
  const {navigation} = props;
  const [secureStatus, setSecureStatus] = useState(true);

  return (
    <View style={styles.container}>
      <Text>AAAAAAAAAAAAAAAAAAAAAA</Text>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
