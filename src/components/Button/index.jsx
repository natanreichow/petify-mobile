import { TouchableOpacity, Text,StyleSheet } from "react-native";

export function Button({ onPress = () => {}, children }) {
  return(
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.text}>
      {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#7130cd',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 24,
    marginBottom: 12,
    marginTop: 12,
  },

  text: {
    fontSize: 16,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#fff',
  }
});
