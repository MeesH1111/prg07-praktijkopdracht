import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Feather from '@expo/vector-icons/Feather';

export default function HotspotsList() {

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
            <Text>Hotspots List!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

