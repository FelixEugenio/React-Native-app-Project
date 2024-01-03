import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {

  const theme = {
    colors: {
      background: 'white',
    },
  };

  return (
    <SafeAreaProvider>
<NavigationContainer theme={theme} >
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen  name="Spash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
      
   
  );
}

