import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import React, {useState, useContext} from "react";
import {AppProvider, Theme} from "./components/Theme";



export default function Settings() {
    // const [darkMode, setDarkMode] = useState(true)
    const {darkMode, setDarkMode} = useContext(Theme)

    function switchMode() {
        setDarkMode(previousState => !previousState)
        console.log('Darkmode:', darkMode)
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <Text>Settings! {darkMode ? 'Darkmode!' : 'Darkmode?'}</Text>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={switchMode}
                value={darkMode}
            />
            <StatusBar style="auto" />
        </View>
    );
}

