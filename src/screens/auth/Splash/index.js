import React from "react";
import { Text,Image, View, Pressable } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = ({navigation}) =>{

    const onSignup = () => {
    navigation.navigate('SignUp')
    }

    const onSignin = () => {
        navigation.navigate('SignIn')
        }

    return (
        <SafeAreaView>
        <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require("../../../assets/logo.png")}/>
        <Text style={styles.title}>Listning App</Text>

        <Button onPress={onSignup} title="Sign Up"/>

        <Pressable onPress={onSignin}>
            <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
        </View>
        </SafeAreaView>

        
    )
}

export default Splash;