import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from "react";
import {Theme} from "../components/Theme";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import {useNavigation} from "@react-navigation/native";
import DailySkatePart from "../components/DailySkatePart";
import HotspotItem from "../components/HotspotItem";


export default function Homepage() {
    const navigation = useNavigation();
    const {darkMode, themeColors, fontFamilies} = useContext(Theme);

    const [hotspots, setHotspots] = useState([])
    const [loading, setLoading] = useState(true)

    const handlePress = (hotspot) => {
        navigation.navigate('Map', {
            latitude: 51.91762853917579,
            longitude: 4.483075383438459,
        })
    }

    const fetchSpots = async () => {
        try {
            const response = await fetch('https://api.jsonsilo.com/public/682f224f-4d79-4081-8d8c-eb1434b39b87')
            const data = await response.json()
            setHotspots(data.hotspots)
        } catch (error) {
            console.error('Fout bij het ophalen van hotspots????')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSpots()
    }, [])

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

        divider: {
            borderBottomWidth: 1,
            borderBottomColor: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(48,48,48,0.2)',
            marginVertical: 10,

        },

        mapButton: {
            backgroundColor: themeColors.primaryColor,

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
        },
    });

    if (loading) {
        return <ActivityIndicator size="large" color="blue"/>;
    }


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View className="flex flex-row justify-center items-center mt-10">
                        <Feather name="home" size={24} color={`${darkMode ? 'white' : 'black'}`}/>
                        <Text style={styles.listTextTitle}
                              className="text-3xl font-semibold p-6"
                        >
                            Home
                        </Text>
                    </View>
                    <View className="flex-1">
                        <View className="pl-4">
                            <Text style={{fontFamily: fontFamilies.displayText}}
                                  className={`text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>Skatespots</Text>
                            <Text className={`text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>────</Text>
                        </View>
                        <FlatList
                            data={hotspots}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => <HotspotItem hotspot={item}/>}
                        />
                    </View>
                    <View>
                        <Pressable onPress={() => {
                            handlePress()
                        }}
                                   style={styles.mapButton}
                                   className="flex flex-row justify-center items-center p-4 m-4 rounded-xl shadow">
                            <Text style={{fontFamily: fontFamilies.displayText}}
                                  className="text-4xl color-white">Check the map! ️</Text>
                            {/*<FontAwesome6 name="hand-point-left" size={24} color="white" className="ml-4"/>*/}
                            <Text className="text-4xl ml-4">🗺️</Text>
                        </Pressable>
                        <View style={styles.divider}></View>
                        <DailySkatePart/>
                        <StatusBar style="auto"/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>


    );

}

