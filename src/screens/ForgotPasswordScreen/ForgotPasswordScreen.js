import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInputs from '../../components/CustomInputs';
import CustomButtons from '../../components/CustomButtons';
import { useNavigation } from '@react-navigation/native';


const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');

    const sendPress = () => {
        navigation.navigate("NewPasswordScreen");

    };


    const signInApp = () => {
        navigation.navigate("SignIn");

    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInputs
                    placeholder={"Username"}
                    value={username}
                    setValue={setUsername}
                />

                <CustomButtons
                    text={"Send"}
                    onPressed={sendPress}
                    type={"PRIMARY"}
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

export default ForgotPasswordScreen;