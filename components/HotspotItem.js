import {ImageBackground, Pressable, Text, View} from "react-native";
import React from "react";


export default function HotspotItem({hotspot, onPress}) {
    return (
        <Pressable onPress={() => onPress(hotspot)}>
            <ImageBackground
                source={{uri: "https://rotterdammakeithappen.nl/app/uploads/2019/09/201908_VerwoesteStad_558A3033_IrisvandenBroek-855x570.jpg"}}
                className="p-3 m-3 border-2 border-gray-300 rounded-lg shadow-xl"

            >
                <View
                    className={`flex 'bg-gray-100' rounded-lg p-4 w-60`}>
                    <Text
                        className="font-bold text-lg">{hotspot.name}</Text>
                    <View
                        className="flex flex-row justify-center items-center rounded-full max-w-44 bg-sky-100 mt-4">
                        <Text
                            className="font-semibold p-2 color-blue-500 ">{hotspot.type}</Text>
                    </View>
                </View>
            </ImageBackground>
        </Pressable>
    )
}