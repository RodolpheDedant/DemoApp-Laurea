import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const CustomButtons = ({ onPressed, text, type, bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPressed}
            style={[styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}
            ]}
        >
            <Text
                style={[styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}
                ]}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: "#3B71F3",
    },
    container_SECONDARY: {
        borderColor: "#3B71F3",
        borderWidth: 2,

    },
    container_TERCIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_SECONDARY: {
        color: "#3B71F3",
    },
    text_TERCIARY: {
        color: 'gray'
    },
})

export default CustomButtons;