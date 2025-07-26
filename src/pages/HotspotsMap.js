import {View} from "react-native";
import Map from "../components/Map";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {useRoute} from "@react-navigation/native";


export default function HotspotsMap() {
    const route = useRoute();
    const {latitude, longitude} = route.params || {}

    return (
        <View className="flex-1">
            <Map latitude={latitude} longitude={longitude}/>
            <StatusBar style="auto"/>
        </View>
    )
}