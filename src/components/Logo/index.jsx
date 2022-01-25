import { StyleSheet, Image } from 'react-native';

export function Logo() {
  return(
    <Image style={styles.logo} source={require('../../../assets/petify-logo.png')} />
  )
}
const styles = StyleSheet.create({
  logo: {
    // marginTop: 52,
    width: 263,
    height: 93,
  },

})