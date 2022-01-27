import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from '../../components/Button';
import { UnderlineButton } from '../../components/UnderlineButton';
import { Logo } from '../../components/Logo';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Logo />
      </View>

      <View style={styles.contentBox}>
        <Image style={styles.dogImage} source={{ uri: "https://s3-alpha-sig.figma.com/img/f2b6/a51e/2ceccdad84ebf5bb6ab1ed9da5560bc5?Expires=1644192000&Signature=EwyoUkNNOqlvba6yGvphjM2zZZgRwi6HWFffZW9zvOUxpIJtaDh3frHNbCpUSoCa2X~JPbNh4Sr6eyHhciypERVJvBLI5irTx~av1Xkc6kRH9kLpCzMJHNCMmFdsFpD-pXtN5kfq~Jjgy5d1-FphazcdOYnbnLTzZxSve1ZrWSxwXX37H0beMSFHqS0QTG9WCvdM3yAazg-nagJkUINQPCry~DoeDBopDhPP6tDOc4kg6oflzHr3on64MhW20X5LoXMYLl6Sno6NkdMuje6ScAp2Nq5NrrOjlfBPoBlbNCFEziLk814oPQ5iIpBO6QdGyMRz75tiM2Lo25pDY87ZHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" }} />

        <View style={styles.box}>
          <View style={styles.boxContent}>
            <View style={styles.textBox}>
              <Text style={styles.title}>
                Wellcome
              </Text>
              <Text style={styles.text}>
                Our goal here at Petify is to improve yours and your pet's quality of life. Do you already have a account?
              </Text>
            </View>
            <Button onPress={() => navigate('SignUp')}>
              Sign Up!
            </Button>
            <UnderlineButton onPress={() => navigate('Login')}>
              I already have a account
            </UnderlineButton>
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7130CD',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contentBox: {
    alignItems: 'center',
    width: '100%',
    height: "75%",
  },

  logoBox: {
    height: '25%',
    justifyContent: 'center',
  },

  dogImage: {
    width: 375,
    height: 368,
  },

  box: {
    borderRadius: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: "100%",
    paddingTop: 32,
  },

  title: {
    fontSize: 36,
    paddingBottom: 16,
    fontFamily: 'Nunito_700Bold'
  },

  boxContent: {
    alignItems: 'center',
    width: '85%',
    height: '35%'
  },

  textBox: {
    paddingBottom: 16,
  },

  text: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
  }
});
