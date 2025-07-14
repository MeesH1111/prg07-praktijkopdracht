import {Text, View} from "react-native";
import WebView from "react-native-webview";
import {useContext} from "react";
import {Theme} from "./Theme";

export default function DailySkatePart() {
    const {darkMode} = useContext(Theme)

    return (
        <View className="flex-1 mt-10">
            <View className="flex justify-center items-center">
                <Text className={`font-bold text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>Daily Skate Part</Text>
                <Text className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-black'}`}>─────────</Text>
            </View>
            <View className="flex-1 mt-10 m-4">
                <WebView
                    style={{width: '100%', height: 200}}
                    javaScriptEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/8FWmtEPGOxY'}}
                />
            </View>
        </View>
    )
}