import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import React, {useContext} from "react";
import {Theme} from "../components/Theme";
import {Entypo, MaterialIcons} from "@expo/vector-icons";
import SkateSpotTypesList from "../components/SkateSpotTypesList";
import {useNavigation} from "@react-navigation/native";

export default function SkateSpotTypes() {
    const {darkMode, themeColors, fontFamilies} = useContext(Theme);
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        divider: {
            borderBottomWidth: 1,
            borderBottomColor: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(48,48,48,0.2)',
            marginVertical: 10,

        },
    })


    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1" style={{backgroundColor: darkMode ? 'black' : 'whitesmoke'}}>
                <ScrollView>
                    <View className="flex flex-col justify-start ml-7 mr-7 mt-10">
                        <Entypo name="chevron-left" size={32}
                                color={`${darkMode ? 'white' : 'black'}`} onPress={() => navigation.goBack()}/>
                        <View className="flex flex-row justify-center items-center">
                            <MaterialIcons className="" name="category" size={24}
                                           color={`${darkMode ? 'white' : 'black'}`}/>
                            <Text
                                className={`text-3xl font-semibold m-6 ${darkMode ? 'text-white' : 'text-black'}`}
                            >
                                Skatespot types
                            </Text>
                        </View>
                    </View>
                    <View className="ml-7 mt-6">
                        <Text style={{fontFamily: fontFamilies.displayText}}
                              className={`text-5xl ${darkMode ? 'text-white' : 'text-black'}`}>De verschillende type
                            street skate spots</Text>
                        <Text className={`text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>────</Text>
                    </View>
                    <SkateSpotTypesList/>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}