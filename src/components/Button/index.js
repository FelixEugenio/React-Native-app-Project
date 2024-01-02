import React from "react";
import { Text,Image, View ,TouchableOpacity, Pressable} from "react-native";
import styles from "./styles";

const Button = ({title,onPress,style}) =>{
    return (
       <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
       </TouchableOpacity>
    )
}

export default Button;