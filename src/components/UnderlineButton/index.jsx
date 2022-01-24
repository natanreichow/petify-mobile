import { TouchableOpacity, Text,StyleSheet } from "react-native";

export function UnderlineButton () {
  return (
    <TouchableOpacity style={styles.UnderlineButton} activeOpacity={0.7}>
      <Text style={styles.text}>
        já possuo conta
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#8E8E8E',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline'
  }
})