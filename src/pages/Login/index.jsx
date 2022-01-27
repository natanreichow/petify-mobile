import { Logo } from '../../components/Logo';
import React from 'react';
import { Formik } from 'formik';
import { Button } from '../../components/Button';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

export const LoginForm = props => {
  const { navigate } = useNavigation();

  const handleSubmit = (values) => {
    console.log(values);
    navigate('AnimalKind');
  }


  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => handleSubmit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput style={styles.input}
            label={'email'}
            placeholder={'Email'}
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
          <Button onPress={handleSubmit}>
            Login
          </Button>
        </View>
      )
      }
    </Formik>
  )
}

export function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Logo />
      </View>
      <View style={styles.box}>
        <View style={styles.boxContent}>
          <Text style={styles.title}>Login</Text>
          <LoginForm />
          <View style={styles.loginImage}>
            <Image source={require('../../../assets/loginImage.png')} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#7130CD',
    flex: 1,
  },

  logoBox: {
    height: '25%',
    justifyContent: 'center',
  },

  box: {
    height: '75%',
    width: '100%',
    backgroundColor: '#FFF',
    paddingTop: 32,
    borderRadius: 32,
    alignItems: 'center',
  },

  boxContent: {
    width: '85%',
  },

  title: {
    fontSize: 36,
    paddingBottom: 22,
    fontFamily: 'Nunito_700Bold'
  },

  input: {
    width: '100%',
    height: 58,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 12,
    marginBottom: 38,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 18,
  },

  loginImage: {
    alignItems: 'center',
    marginTop: 32,
  }

})