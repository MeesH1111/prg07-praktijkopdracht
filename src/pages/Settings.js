import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, ScrollView, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useContext} from "react";
import {Theme} from "../components/Theme";
import Feather from "@expo/vector-icons/Feather";
import {SafeAreaProvider} from "react-native-safe-area-context";
import About from "../components/About";


export default function Settings() {
    // const [darkMode, setDarkMode] = useState(true)
    const {darkMode, setDarkMode} = useContext(Theme)

    function switchMode() {
        setDarkMode(previousState => !previousState)
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: darkMode ? 'black' : 'whitesmoke',
        },
        contentContainer: {
            flexGrow: 1,
            backgroundColor: darkMode ? 'black' : 'whitesmoke',
            paddingBottom: 20,
        },

        mainText: {
            color: darkMode ? 'white' : 'black'
        },

        block: {
            backgroundColor: darkMode ? 'black' : 'white',
        },

        listTextTitle: {
            color: darkMode ? 'white' : 'black'
        },
    });

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View className="flex flex-row justify-center items-center mt-10">
                    <Feather name="settings" size={24} color={`${darkMode ? 'white' : 'black'}`}/>
                    <Text
                        className="text-3xl font-semibold p-6"
                        style={styles.listTextTitle}
                    >
                        Settings
                    </Text>
                </View>
                <ScrollView style={styles.contentContainer}>
                    <Text style={styles.mainText}
                          className="pl-4 ml-4 pt-4 font-medium text-lg"
                    >
                        Layout
                    </Text>
                    <View style={styles.block}
                          className="flex flex-row justify-between items-center p-4 m-4 border-2 border-gray-200 rounded-2xl bg-white shadow">
                        <View className="flex flex-row items-center justify-between w-40">
                            <Feather name={`${darkMode ? 'sun' : 'moon'}`} size={24}
                                     color={`${darkMode ? 'white' : 'black'}`}/>
                            <Text style={styles.mainText}
                                  className="flex text-xl font-semibold"

                            >
                                {darkMode ? 'Dark Mode!' : 'Dark Mode?'}
                            </Text>
                        </View>
                        <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={switchMode}
                            value={darkMode}
                        />
                    </View>
                    <About/>
                    <StatusBar style="auto"/>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

