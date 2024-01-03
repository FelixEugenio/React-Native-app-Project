import React from "react";
import { Text,Image, View ,TouchableOpacity, Pressable} from "react-native";
import styles from "./styles";

const Header = ({title,onBackPress,onSearch,onLogout,showLogout,showSearch,showBack}) =>{
    return (
       <View style={styles.container}>
        {
            showBack ? (
                <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.icon} source={require('../../assets/voltar.png')} />
            </Pressable>
            ): showSearch ? (
                <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.icon} source={require('../../assets/search.png')} />
            </Pressable>
            ) : null}
        <Text style={styles.title}>{title}</Text>
        { showLogout ? (
            <Pressable hitSlop={20} onPress={onLogout}>
            <Image style={styles.icon} source={require('../../assets/logout.png')} />
        </Pressable>
        ): null}
       </View>
    )
}

export default Header;