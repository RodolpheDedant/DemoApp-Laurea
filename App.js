import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, ImageComponent, Image, StyleSheet, useWindowDimensions, ScrollView, KeyboardAvoidingView, Pressable, TextInput, SafeAreaView } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import HomeScreen from './src/screens/HomeScreen';
import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC"
  }

});

//   return (
//     <ScrollView>
//       <KeyboardAvoidingView behavior='padding'>
//         <View style={styles.root}>
//           <SignInScreen />
//         </View>
//       </KeyboardAvoidingView>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "#F9FBFC"
//   }

// });

