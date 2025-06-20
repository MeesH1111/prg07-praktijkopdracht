import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useContext} from "react";
import {Theme} from "./components/Theme";
import Feather from "@expo/vector-icons/Feather";


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
        mainText: {
            color: darkMode ? 'white' : 'black'
        },
        block: {
            backgroundColor: darkMode ? 'black' : 'white',
        }
    });

    return (
        <View style={styles.container}
              className="mt-10"
        >
            <Text style={styles.mainText}
                  className="pl-4 ml-4 pt-4 font-medium text-lg"
            >
                Layout
            </Text>
            <View style={styles.block}
                  className="flex flex-row justify-between items-center p-4 m-4 border-2 border-gray-200 rounded-2xl bg-white shadow">
                <View className="flex flex-row items-center justify-between w-40">
                    <Feather name={`${darkMode ? 'sun' : 'moon'}`} size={24} color={`${darkMode ? 'white' : 'black'}`}/>
                    <Text style={styles.mainText}
                          className="flex text-lg font-semibold"

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
            <StatusBar style="auto"/>
        </View>
    );
}

