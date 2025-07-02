import {StatusBar} from 'expo-status-bar';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from "react";
import {Theme} from "./components/Theme";
import About from "./components/About";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import {FontAwesome6} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";


export default function Homepage() {
    const navigation = useNavigation();
    const {darkMode} = useContext(Theme);

    const handlePress = (hotspot) => {
        navigation.navigate('HotspotsMap', {
            latitude: 51.91762853917579,
            longitude: 4.483075383438459,
        })
    }

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
                    <Pressable onPress={() => {
                        handlePress()
                    }}
                               className="flex flex-row justify-center items-center p-4 m-4 border-2 border-gray-200 rounded-2xl bg-blue-500 shadow">
                        <Text className="font-bold text-2xl color-white">Check de spots!</Text>
                        <FontAwesome6 name="hand-point-left" size={24} color="white" className="ml-4"/>
                    </Pressable>
                    <StatusBar style="auto"/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>


    );

}

