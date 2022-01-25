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
        <Image style={styles.dogImage} source={{ uri: 'https://s3-alpha-sig.figma.com/img/498c/5e6f/aa59283d781a8564392efcbef3c208a4?Expires=1643587200&Signature=cfhxsnmclrG0TKdmK0iC55yX-QZc4jBkO5b5Y4ygR4cbnaUWY5GrbIpxv60ymB9fPE4PmipcF2y~s~lkev~YJfKxpvpzzL9h92SIfmm7BykZNF7WQ5x-F0mcQfAYJghbVJPJjae9fiBv78EHWEVJ88hCHfb5AY6-ypl2VWQQsOL3Kj75PyfSUTpUNashlr7642aCnJy8fnDAbxgiTE4P60bL2n8IjJvUS01I9F~WnD9GO-4sMpfseUcFlfyZbTpO7~IPXNVDghGfZF~IQJmFnmpOxJ8Enbadp3HFbXDJ5sPLYstUxkvO0OzMwTkhajB9uSgFyX8G2H5zWb-E05RYQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }} />

        <View style={styles.box}>
          <View style={styles.boxContent}>
            <View style={styles.textBox}>
              <Text style={styles.title}>
                Bem vindo
              </Text>
              <Text style={styles.text}>
                Nosso objetivo aqui na petify é melhorar a qualidiade de vida do seu pet. Mas primeiro, você já possui uma conta?
              </Text>
            </View>
            <Button onPress={() => navigate('SignUp')}>
              Criar conta
            </Button>
            <UnderlineButton onPress={() => navigate('Login')}>
              já tenho uma conta
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
