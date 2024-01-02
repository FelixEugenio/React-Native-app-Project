import React, { useState } from "react";
import { Text,Image, View,TextInput, Pressable} from "react-native";
import styles from "./styles";

const Input = ({label,placeholder,isPassword}) =>{

    const [isPasswordVisible,setIsPasswordVisible] = useState(false);

    const onEyesPress = () =>{
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
       <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
        <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input}/>

        {isPassword ? (
            <Pressable onPress={onEyesPress}>
            <Image style={styles.eyes} source={isPasswordVisible ? require('../../assets/olho.png') :  require('../../assets/fechado.png') } />
         </Pressable>
        ):null}
        
        </View>
       </View>
    )
}

export default Input;