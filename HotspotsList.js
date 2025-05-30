import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from "react";
import Feather from '@expo/vector-icons/Feather';
import {Theme} from "./components/Theme";

export default function HotspotsList() {
    const { darkMode } = useContext(Theme);

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
            <Text className="text-xl font-semibold" style={styles.mainText}>Hotspots List!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

