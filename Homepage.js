import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from "react";
import {Theme} from "./components/Theme";
import About from "./components/About";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";


export default function Homepage() {
    const {darkMode} = useContext(Theme);


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: darkMode ? 'black' : 'smokewhite',
        },

        mainText: {
            color: darkMode ? 'white' : 'black'
        },

        listTextTitle: {
            color: darkMode ? 'white' : 'black'
        },
    });

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View className="flex flex-row justify-center items-center mt-10">
                    <Feather name="home" size={24} color={`${darkMode ? 'white' : 'black'}`}/>
                    <Text style={styles.listTextTitle}
                          className="text-3xl font-semibold p-6"
                    >
                        Home
                    </Text>
                </View>
                <View>
                    <About/>
                    <StatusBar style="auto"/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>


    );

}

