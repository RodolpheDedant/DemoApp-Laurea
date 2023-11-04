import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import CustomButtons from '../../components/CustomButtons';
// import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import { useNavigation } from '@react-navigation/native';


// const navigation = useNavigation();

const SocialSignInButtons = () => {

    // const webClientId = "1:360893092426:web:1bfaac0da55f20d5960cb3";

    // useEffect(() => {
    //     GoogleSignin.configure({
    //         webClientId: webClientId,
    //     })
    // }, [])
    const signInWithFb = () => {
        console.warn("Facebook");
    };

    const signInWithGoogle = async () => {
        // try {
        //     await GoogleSignin.hasPlayServices();
        //     const userInfo = await GoogleSignin.signIn();
        //     console.log("userinfo", userInfo);
        //     navigation.navigate("HomeScreen");

        // } catch (error) {
        //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //         console.log(error)
        //     } else if (error.code === statusCodes.IN_PROGRESS) {
        //         console.log(error)
        //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //         console.log(error)
        //     } else {
        //     }
        // }
        console.warn("Google");
    }
    return (
        <>
            <CustomButtons
                text={"Sign in with Facebook"}
                onPressed={signInWithFb}
                type={"PRIMARY"}
                bgColor={"#E7EAF4"}
                fgColor={"#4765A9"}
            />
            <CustomButtons
                text={"Sign in with Google"}
                onPressed={signInWithGoogle}
                type={"PRIMARY"}
                bgColor={"#FAE9EA"}
                fgColor={"#DD4D44"}
            />
        </>
    );
}
export default SocialSignInButtons;