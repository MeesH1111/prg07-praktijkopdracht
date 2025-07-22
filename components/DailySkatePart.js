import {Text, View} from "react-native";
import WebView from "react-native-webview";
import {useContext} from "react";
import {Theme} from "./Theme";

export default function DailySkatePart() {
    const {darkMode, fontFamilies} = useContext(Theme)
    const emoji = darkMode ? <Text className="ml-4 text-4xl">🔥</Text> : <Text className="ml-4 text-4xl">🛹</Text>

    return (
        <View className="flex-1 mt-10">
            <View className="flex justify-center items-center">
                <View className="flex flex-row justify-center items-center">
                    <Text style={{fontFamily: fontFamilies.displayText}}
                          className={`text-5xl ${darkMode ? 'text-white' : 'text-black'}`}>Daily Skate
                        Part</Text>
                    {/*<FontAwesome5 className="ml-4" name="fire-alt" size={32} color="black"/>*/}
                    <Text className="ml-4 text-4xl">{emoji}</Text>
                </View>
                <Text className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-black'}`}>────</Text>
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