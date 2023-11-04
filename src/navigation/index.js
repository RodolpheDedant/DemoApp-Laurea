import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
// import { User, onAuthStateChanged } from 'firebase/auth';
// import { firebaseAuth } from '../../firebase';


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

// function InsideLayout() {
//     return (
//         <InsideStack.Navigator screenOptions={{ headerShown: false }}>
//             <InsideStack.Screen name="HomeScreen" component={HomeScreen} />
//         </InsideStack.Navigator>
//     );
// }

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
                {/* <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} /> */}
                <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    );

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     onAuthStateChanged(firebaseAuth, (user) => {
    //         // console.log('user', user)
    //         setUser(user);
    //     });
    // }, []);
    // return (
    //     <NavigationContainer>
    //         <Stack.Navigator screenOptions={{ headerShown: false }}>
    //             {user ? (
    //                 <>
    //                     <Stack.Screen name="HomeScreen" component={InsideLayout} />
    //                 </>

    //             ) : (
    //                 <>
    //                     <Stack.Screen name="SignIn" component={SignInScreen} />
    //                     <Stack.Screen name="SignUp" component={SignUpScreen} />
    //                     <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
    //                     <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    //                     <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
    //                 </>
    //             )
    //             }
    //         </Stack.Navigator>
    //     </NavigationContainer >
    // );
}

export default Navigation;