import React from "react";
import { Text,Image, View } from "react-native";
import styles from "./styles";
import AuthHeader from '../../../components/AuthHeader'
import Input from "../../../components/Input";

const SignUp = () =>{
    return (
        <View style={styles.container}>
        <AuthHeader title="Sign Up" />
        <Input label="Nome" placeholder="Felix Mavila"/>
        <Input label="Email" placeholder="example@gmail.com"/>
        <Input isPassword={true} label="Password" placeholder="*********"/>
        </View>
    )
}

export default SignUp;