import React from "react";
import { Text,Image, View ,TouchableOpacity, Pressable} from "react-native";
import styles from "./styles";

const AuthHeader = ({title,onBackPress}) =>{
    return (
       <View style={styles.container}>
        <Pressable hitSlop={20} onPress={onBackPress}>
            <Image style={styles.image} source={require('../../assets/voltar.png')} />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
       </View>
    )
}

export default AuthHeader;