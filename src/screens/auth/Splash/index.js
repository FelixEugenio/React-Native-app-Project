import React from "react";
import { Text,Image, View, Pressable } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";

const Splash = ({navigation}) =>{

    const onSignup = () => {
    navigation.navigate('SignUp')
    }

    const onSignin = () => {
        navigation.navigate('SignIn')
        }

    return (
        <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require("../../../assets/logo.png")}/>
        <Text style={styles.title}>Ola Seja Bem vindo</Text>

        <Button onPress={onSignup} title="Sign Up"/>

        <Pressable onPress={onSignin}>
            <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
        </View>

        
    )
}

export default Splash;