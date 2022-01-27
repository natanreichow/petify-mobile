import { Logo } from '../../components/Logo';
import { SignUpForm } from '../../components/SignUpForm';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export function SignUp() {
  return (
    <ScrollView style={{ width: '100%', height: '100%' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        keyboardVerticalOffset={80}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.logoBox}>
              <Logo />
            </View>
            <View style={styles.box}>
              <View style={styles.boxContent}>
                <Text style={styles.title}>
                  Sign Up
                </Text>
                <SignUpForm />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#7130CD',
    height: "120%",
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
})