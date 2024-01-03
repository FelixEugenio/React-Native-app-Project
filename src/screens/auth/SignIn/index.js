import React, { useState } from "react";
import { Text,Image, View } from "react-native";
import styles from "./styles";
import AuthHeader from '../../../components/AuthHeader'
import Input from "../../../components/Input";
import CheckBox from '../../../components/CheckBox'
import Button from '../../../components/Button'
import Separator from '../../../components/Separator'
import GoogleLogin from "../../../components/GoogleLogin";

const SignIn = ({navigation}) =>{
    const [checked,setChecked] = useState(false)

    const onSignUp = () => {
  navigation.navigate('SignUp')
    }

    const onBack = () => {
   navigation.goBack();
    }

    return (
        <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />

        <Input label="Email" placeholder="example@gmail.com"/>
        <Input isPassword={true} label="Password" placeholder="*********"/>

        <Button style={styles.button} title="Sign In"/>
        <Separator text="Or Sign In With" />

        <GoogleLogin />

        <Text style={styles.footerText}>
            Voce Nao tem uma conta ?
            <Text onPress={onSignUp} style={styles.footerLink}> SignUp</Text>
        </Text>

        </View>
    )
}

export default SignIn;