import React, { useState } from 'react';
import { View, Text, ImageComponent, Image, StyleSheet, useWindowDimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import Logo from "../../../assets/images/Exaderma.png";
import CustomInputs from '../../components/CustomInputs';
import CustomButtons from '../../components/CustomButtons';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { firebaseAuth } from '../../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';




const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = firebaseAuth;
    let loading = false;
    const setLoading = ({ loading }) => {
        loading = loading
    }

    const signOnPress = async () => {

        //confirmation
        // setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(firebaseAuth, username, password);
            navigation.navigate("HomeScreen");
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false);
        }
        navigation.navigate("HomeScreen");

    };

    const forgotPassword = () => {
        //confirmation
        navigation.navigate("ForgotPasswordScreen");
    };

    const signUpApp = () => {
        //confirmation
        navigation.navigate("SignUp");

    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='padding'>
                <View style={styles.root}>
                    <Image
                        source={Logo}
                        style={[styles.logo, { height: height * 0.25 }]}
                        resizeMode='contain'
                    />
                    <CustomInputs
                        placeholder={"Username"}
                        value={username}
                        setValue={setUsername}
                    />
                    <CustomInputs
                        placeholder={"Password"}
                        value={password}
                        setValue={setPassword}
                        securityTextEntry={true}
                    />

                    {loading ? (
                        <ActivityIndicator size="large" color="black" />
                    ) : (
                        <>
                            < CustomButtons
                                text={"Sign In"}
                                onPressed={signOnPress}
                                type={"PRIMARY"}
                            />
                            <CustomButtons
                                text={"Forgot Password?"}
                                onPressed={forgotPassword}
                                type={"TERCIARY"}
                            />

                            <SocialSignInButtons />


                            <CustomButtons
                                text={"Don't have an account? Create one."}
                                onPressed={signUpApp}
                                type={"TERCIARY"}
                            />
                        </>
                    )}
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    }
})

export default SignInScreen;