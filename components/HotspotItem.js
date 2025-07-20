import {ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import React, {useContext} from "react";
import {useNavigation} from "@react-navigation/native";
import {Theme} from "./Theme";
import {AntDesign} from "@expo/vector-icons";


export default function HotspotItem({hotspot, onPress}) {
    const navigation = useNavigation();
    const {darkMode, fontFamilies} = useContext(Theme)
    const {themeColors} = useContext(Theme)


    const handlePress = (hotspot) => {
        navigation.navigate('Map', {
            latitude: hotspot.latitude,
            longitude: hotspot.longitude,
        })
    }

    const styles = StyleSheet.create({
        cardView: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
        },

        typeView: {
            backgroundColor: themeColors.primaryColor,

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
        }
    })

    return (
        <Pressable onPress={() => handlePress(hotspot)}>
            <View style={styles.cardView}
                  className={`flex w-[19rem] h-[19.438rem] m-4 rounded-xl bg-white ${darkMode ? 'border-2 border-white' : ''}`}>
                <ImageBackground
                    className="flex flex-row bg-gray-300 rounded-t-xl w-full h-[12.375rem] max-h-96">
                    <View style={styles.typeView}
                          className="flex justify-center items-center ml-4 mt-4 pl-4 pr-4 h-[3rem] rounded-full shadow">
                        <Text
                            className="text-white text-base">{hotspot.type}</Text>
                    </View>
                </ImageBackground>
                <View className={`flex-1 justify-center pl-4 rounded-b-xl ${darkMode ? 'bg-black' : 'bg-white'}`}>
                    <Text
                        // style={{fontFamily: fontFamilies.bodyTextBold}}
                        className={`font-bold text-xl pb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{hotspot.name}</Text>
                    <View className="flex flex-row justify-between items-center">
                        <Text
                            adjustsFontSizeToFit={true} numberOfLines={3}
                            style={{
                                lineHeight: 20,
                                // fontFamily: fontFamilies.bodyText
                            }}
                            className={`font-normal text-lg w-[13.25rem] ${darkMode ? 'text-white' : 'text-gray-700'}`}>{hotspot.description}</Text>
                        <Pressable className="pr-4 shadow-xl" onPress={() => handlePress(hotspot)}>
                            <AntDesign name="rightcircleo" size={32}
                                       color={`${darkMode ? 'white' : themeColors.primaryColor}`}/>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}