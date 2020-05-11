import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Formik} from 'formik';
import * as Yup from 'yup';

import WeightForm from './components/WeightForm';
import Header from '../../../../common/Header';
import Footer from '../../../../common/Footer';

const validationSchema = Yup.object({
  date: Yup.string().required('This field is required'),
  babyWeight: Yup.string().required('This field is required'),
});

const Weight = props => {
  const {navigation} = props;

  const initialValues = {
    date: '',
    babyWeight: '',
  };

  return (
    <View style={styles.container}>
      <Header title="Weight" navigation={navigation} />
      <View style={styles.viewBody}>
        <View>
          <Text style={{fontSize: 18, color: '#1FC2CB'}}>Add Weight</Text>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => {
            // navigation.push('App');
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <WeightForm
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                values={values}
                navigation={navigation}
              />
            </>
          )}
        </Formik>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Weight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.83,
    padding: 25,
  },
});
