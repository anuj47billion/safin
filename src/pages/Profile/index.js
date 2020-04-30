import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Header from '../../common/Header';
import ProfileForm from './components/ProfileForm';
import {Formik} from 'formik';
import * as Yup from 'yup';

const width = Dimensions.get('window').width;

const validationSchema = Yup.object({
  babyName: Yup.string().required('This field is required'),
  birthday: Yup.string().required('This field is required'),
  gender: Yup.string().required('This field is required'),
  birthWeight: Yup.string().required('This field is required'),
  birthHeight: Yup.string().required('This field is required'),
});

const Profile = props => {
  const {navigation} = props;

  const initialValues = {
    babyName: '',
    birthday: '',
    gender: '',
    birthWeight: '',
    birthHeight: '',
  };

  return (
    <View style={styles.container}>
      <Header title="Profile" navigation={navigation} />
      <View style={styles.viewBody}>
        <View>
          <Text style={{fontSize: 18, color: '#1FC2CB'}}>
            Enter your baby's Detail
          </Text>
        </View>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={values => {
            // alert(JSON.stringify(values));
            // navigation.push('Dashboard');
            navigation.push('App');
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <ProfileForm
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
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.91,
    padding: 25,
  },
});
