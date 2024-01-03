import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';

export default function App() {
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
