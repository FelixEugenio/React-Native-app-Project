import React from "react";
import { Text,Image, View } from "react-native";
import styles from "./styles";

const Splash = () =>{
    return (
        <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require("../../../assets/logo.png")}/>
        <Text style={styles.title}>Ola Seja Bem vindo</Text>
        </View>
    )
}

export default Splash;