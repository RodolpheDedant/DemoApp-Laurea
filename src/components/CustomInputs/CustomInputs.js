import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInputs = ({ value, setValue, placeholder, securityTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={securityTextEntry} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: "100%",
        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5,
        marginVertical: 10,
        // height: '7%'
    },
    input: {}
})

export default CustomInputs;