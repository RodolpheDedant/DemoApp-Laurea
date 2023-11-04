import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInputs from '../../components/CustomInputs';
import CustomButtons from '../../components/CustomButtons';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../../firebase';



const SignUpScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    // let loading = false;
    // const setLoading = ({ loading }) => {
    //     loading = loading
    // }
    const registerPress = async () => {
        // navigation.navigate("ConfirmEmailScreen");
        // setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            navigation.navigate("HomeScreen");

        } catch (error) {
            alert(error)
        }
        //     setLoading(false);
        // }

        // sendSignInLinkToEmail(firebaseAuth, email, actionCodeSettings)
        //     .then(() => {
        //         // The link was successfully sent. Inform the user.
        //         // Save the email locally so you don't need to ask the user for it again
        //         // if they open the link on the same device.
        //         window.localStorage.setItem('emailForSignIn', email);
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // ...
        //     });

    };


    const signInApp = () => {
        navigation.navigate("SignIn");

    }

    const onTermOfUse = () => {
        console.warn("Terms of use");
    }

    const onPrivacyPolicy = () => {
        console.warn("Privacy Policy");
    }

    return (
        <ScrollView>
            <View style={styles.root}>

                <Text style={styles.title}>Create an account</Text>
                <CustomInputs
                    placeholder={"Username"}
                    value={username}
                    setValue={setUsername}
                />
                <CustomInputs
                    placeholder={"Email"}
                    value={email}
                    setValue={setEmail}
                />
                <CustomInputs
                    placeholder={"Password"}
                    value={password}
                    setValue={setPassword}
                    securityTextEntry={true}
                />
                <CustomInputs
                    placeholder={"Confirm password"}
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    securityTextEntry={true}
                />

                {/* {loading ? (
                    <ActivityIndicator size="large" color="black" />
                ) : (
                    <> */}
                <CustomButtons
                    text={"Register"}
                    onPressed={registerPress}
                    type={"PRIMARY"}
                />

                <Text style={styles.text}>By registering you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermOfUse}>Terms of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPolicy}>Privacy Policy</Text>
                </Text>

                <SocialSignInButtons />

                <CustomButtons
                    text={"Have an account? Sign in"}
                    onPressed={signInApp}
                    type={"TERCIARY"}
                />
                {/* </>
                )} */}
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

export default SignUpScreen;