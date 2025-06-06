import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import React, {useState, useContext} from "react";
import {AppProvider, Theme} from "./components/Theme";



export default function Settings() {
    // const [darkMode, setDarkMode] = useState(true)
    const {darkMode, setDarkMode} = useContext(Theme)

    function switchMode() {
        setDarkMode(previousState => !previousState)
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: darkMode ? 'black' : 'white',
            alignItems: 'center',
            justifyContent: 'center',
        },
        mainText: {
            color: darkMode ? 'white' : 'black'
        }
    });

    return (
        <View style={styles.container}>
            <Text className="text-xl font-semibold" style={styles.mainText}>Settings! {darkMode ? 'Darkmode!' : 'Darkmode?'}</Text>
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

