import React, { useState } from "react";
import { Text,Image, View } from "react-native";
import styles from "./styles";
import AuthHeader from '../../../components/AuthHeader'
import Input from "../../../components/Input";
import CheckBox from '../../../components/CheckBox'
import Button from '../../../components/Button'
import Separator from '../../../components/Separator'
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = ({navigation}) =>{
    const [checked,setChecked] = useState(false)

    const onSignIn = () => {
  navigation.navigate('SignIn')
    }

    const onBack = () => {
        navigation.goBack();
         }
    return (
        <SafeAreaView>

        
        <View style={styles.container}>
        <AuthHeader  onBackPress={onBack} title="Sign Up" />
        <Input label="Nome" placeholder="Felix Mavila"/>
        <Input label="Email" placeholder="example@gmail.com"/>
        <Input isPassword={true} label="Password" placeholder="*********"/>

        <View style={styles.agreeRow}>
            <CheckBox checked={checked} onCheck={setChecked} />
            <Text style={styles.agreeText}>Eu Aceito os <Text style={styles.agreeTexBold}>Termos</Text> & <Text style={styles.agreeTexBold}>Privacidade</Text></Text>
        </View>

        <Button style={styles.button} title="Sign Up"/>
        <Separator text="Or Sign Up With" />

        <GoogleLogin />

        <Text style={styles.footerText}>
            Voce Ja tem uma conta ?
            <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
        </Text>

        </View>
        </SafeAreaView>
    )
}

export default SignUp;