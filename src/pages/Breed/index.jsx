import { useRoute } from "@react-navigation/native";
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react';

export function Breed() {
  const { params } = useRoute();

  if (params.petType === 'dog') {
    // loading do dog
    return (
      <View style={styles.animationContainer}>
        <LottieView
          style={{width: 300, height: 300}}
          source={require('../../../assets/Lotte/dogLoadingAnimation.json')}
        />
      </View>  
    )
  }

  if (params.petType === 'cat') {
    // loading do gato
    return (
      <View style={styles.animationContainer}>
        <LottieView
          style={{width: 400, height: 400}}
          source={require('../../../assets/Lotte/catLoadingAnimation.json')}
        />
      </View>
    )
  }

}


const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
