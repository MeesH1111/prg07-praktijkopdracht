import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useContext} from "react";
import {AppProvider, Theme} from "./components/Theme";



export default function Homepage() {
    const { darkMode } = useContext(Theme);


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: darkMode ? 'black' : 'white' ,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <Text>Homepage!</Text>
            <StatusBar style="auto" />
        </View>
    );

}

