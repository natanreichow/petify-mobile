import React from 'react';
import { Formik } from 'formik';
import { Button } from '../Button';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const SignUpForm = props => {
  const { navigate } = useNavigation();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      onSubmit={values => { console.log(values); navigate('AnimalKind') }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput style={styles.input}
            label={'name'}
            placeholder={'Name'}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          <TextInput style={styles.input}
            label={'email'}
            placeholder={'Email'}
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <TextInput style={styles.input}
            label={'password'}
            keyboardType="visible-password"
            textContentType="password"
            secureTextEntry
            placeholder={'Password'}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <TextInput style={styles.input}
            label={'confirmPassword'}
            placeholder={'Confirm password'}
            keyboardType="visible-password"
            textContentType="password"
            secureTextEntry
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
          />
          <Button onPress={handleSubmit}>
            Sign Up!
        </Button>
        </View>
      )}
    </Formik>
  )
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 58,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 12,
    marginBottom: 38,
    paddingLeft: 16,
    paddingRight: 16,
  }
})