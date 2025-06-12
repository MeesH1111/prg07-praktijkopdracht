import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import React, {useContext} from "react";
import {Theme} from "./components/Theme";
import HotspotList from "./components/HotspotList";

export default function HotspotsList() {
    const {darkMode} = useContext(Theme);

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
            <HotspotList/>
            <StatusBar style="auto"/>
        </View>
    );
}

