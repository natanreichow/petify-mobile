import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function Input({ 
  iconName,
  iconColor = "#7130CD",
  ...props 
}) {
  return (
    <View style={styles.searchInput}>
      <MaterialIcons name={iconName} size={24} color={iconColor} />
      <TextInput
        style={styles.input}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  searchInput: {
    flexDirection: 'row',
    width: '100%',
    height: 58,
    borderWidth: 1,
    borderColor: '#7130CD',
    borderRadius: 12,
    marginBottom: 38,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center'
  },

  input: {
    flex: 1,
    marginLeft: 20,
    fontSize: 18,
  }
})