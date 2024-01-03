import React from "react";
import { Text,Image, View ,TouchableOpacity, Pressable} from "react-native";
import styles from "./styles";

const GoogleLogin = () =>{
    return (
       <TouchableOpacity activeOpacity={0.5} style={styles.container}>
        <Image style={styles.image} source={require('../../assets/google.png')}/>
       </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin);