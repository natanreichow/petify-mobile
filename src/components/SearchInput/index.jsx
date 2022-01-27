import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

export function SearchInput() {
  return (
    <View style={styles.searchInput}>
      <Image source={require('../../../assets/search-vector.png')} />
      <TextInput 
      style={styles.input}
      placeholder={'Search'} />
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