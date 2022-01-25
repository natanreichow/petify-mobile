import { useNavigation } from '@react-navigation/core';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export function AnimalKind() {
  const { navigate } = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentText}>
          <Text style={styles.title}>
            Olá
          </Text>
          <Text style={styles.text}>
            Que bom que você está aqui, vai ser uma honra ajudar você a cuidar do seu bichinho. Mas primeiramente, vamos cuidar de um gato ou de um cachorro?
          </Text>
        </View>
        <View style={styles.contentBox}>
          <TouchableOpacity style={styles.catBox} onPress={() => navigate("Breed", {
            petType: 'cat'
          })}>
            <Text style={styles.catEmoji}>🐱</Text>
            <Text style={styles.catText}>Cat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dogBox} onPress={() => navigate("Breed", {
            petType: 'dog'
          })}>
            <Text style={styles.dogEmoji}>🐶</Text>
            <Text style={styles.dogText}>Dog</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
  },

  title: {
    fontSize: 36,
    paddingBottom: 22,
    fontFamily: 'Nunito_700Bold'
  },

  text: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
  },

  contentBox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 42,
  },

  catBox: {
    backgroundColor: '#7130CD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 170,
  },

  dogBox: {
    backgroundColor: '#7130CD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 170,

  },

  catEmoji: {
    fontSize: 100,
    marginRight: 30,
    marginLeft: 30,
  },

  dogEmoji: {
    fontSize: 100,
    marginRight: 30,
    marginLeft: 30,
  },

  catText: {
    fontFamily: 'Nunito_700Bold',
    color: '#fff',
    fontSize: 20,
  },

  dogText: {
    fontFamily: 'Nunito_700Bold',
    color: '#fff',
    fontSize: 20,
  },
}
)