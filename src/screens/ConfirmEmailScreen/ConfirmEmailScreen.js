import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInputs from '../../components/CustomInputs';
import CustomButtons from '../../components/CustomButtons';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const ConfirmEmailScreen = () => {
    const navigation = useNavigation();

    const [code, setCode] = useState('');


    const confirmPress = () => {
        navigation.navigate("HomeScreen");

    };


    const signInApp = () => {
        navigation.navigate("SignIn");

    }

    const onResendCode = () => {
        console.warn("Resend code")
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your Email</Text>
                <CustomInputs
                    placeholder={"Enter your confirmation code"}
                    value={code}
                    setValue={setCode}
                />

                <CustomButtons
                    text={"Confirm"}
                    onPressed={confirmPress}
                    type={"PRIMARY"}
                />

                <CustomButtons
                    text={"Resend code"}
                    onPressed={onResendCode}
                    type={"SECONDARY"}
                />
                <CustomButtons
                    text={"Back to Sign in"}
                    onPressed={signInApp}
                    type={"TERCIARY"}
                />


            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051C60",
        margin: 10,
    },
    text: {
        color: "gray",
        marginVertical: 10,
    },
    link: {
        color: "#FDB075"
    }
})

export default ConfirmEmailScreen;