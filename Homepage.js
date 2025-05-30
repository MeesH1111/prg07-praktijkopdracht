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
        mainText: {
            color: darkMode ? 'white' : 'black'
        }
    });

    return (
        <View style={styles.container}>
            <Text className="text-xl font-semibold" style={styles.mainText}>Homepage!</Text>
            <StatusBar style="auto" />
        </View>
    );

}

