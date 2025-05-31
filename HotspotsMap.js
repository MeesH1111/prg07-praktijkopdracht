import {View} from "react-native";
import Map from "./components/Map";
import {StatusBar} from "expo-status-bar";
import React from "react";


export default function HotspotsMap() {
    return (
        <View className="flex-1">
            <Map />
            <StatusBar style="auto" />
        </View>
    )
}