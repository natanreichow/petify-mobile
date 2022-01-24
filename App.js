import { StatusBar } from 'expo-status-bar';
import { Home } from './src/pages/Home';
import { SignUp } from './src/pages/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black
} from '@expo-google-fonts/nunito';

export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black
  });

  const Stack = createNativeStackNavigator();


  if (!fontsLoaded) {
    return <></>
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
          headerShown: false 
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    );
  }
}

