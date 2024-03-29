import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/app/Home'
import Profile from './src/screens/app/Profile'
import Favorites from './src/screens/app/Favorites'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './src/utils/colors';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Tabs = () =>{
  return(
<Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/tabs/home_active.png')
            : require('./src/assets/tabs/home.png');
        } else if (route.name === 'Profile') {
          icon = focused
            ? require('./src/assets/tabs/profile_active.png')
            : require('./src/assets/tabs/profile.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/tabs/bookmark_active.png')
            : require('./src/assets/tabs/bookmark.png');
        }

        // You can return any component that you like here!
        return <Image style={{ width: 24, height: 24 }} source={icon} />
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightgrey }
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  )
  
}

export default function App() {
  const isSignedIn = true;

  const theme = {
    colors: {
      background: 'white',
    },
  };

  return (
    <SafeAreaProvider>
<NavigationContainer theme={theme} >
      <Stack.Navigator>
        {isSignedIn ? (

          <> 
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          </>
        ):(
          <>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
              <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
              
          </>

        )}   
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

