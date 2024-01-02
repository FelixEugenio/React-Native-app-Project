import React, { useState } from "react";
import { Text,Image, View } from "react-native";
import styles from "./styles";
import AuthHeader from '../../../components/AuthHeader'
import Input from "../../../components/Input";
import CheckBox from '../../../components/CheckBox'
import Button from '../../../components/Button'

const SignUp = () =>{
    const [checked,setChecked] = useState(false)
    return (
        <View style={styles.container}>
        <AuthHeader title="Sign Up" />
        <Input label="Nome" placeholder="Felix Mavila"/>
        <Input label="Email" placeholder="example@gmail.com"/>
        <Input isPassword={true} label="Password" placeholder="*********"/>

        <View style={styles.agreeRow}>
            <CheckBox checked={checked} onCheck={setChecked} />
            <Text style={styles.agreeText}>Eu Aceito os <Text style={styles.agreeTexBold}>Termos</Text> & <Text style={styles.agreeTexBold}>Privacidade</Text></Text>
        </View>

        <Button style={styles.button} title="Sign Up"/>
        </View>
    )
}

export default SignUp;