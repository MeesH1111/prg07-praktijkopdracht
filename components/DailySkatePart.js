import {Text, View} from "react-native";
import WebView from "react-native-webview";

export default function DailySkatePart() {


    return (
        <View className="flex-1 mt-10">
            <View className="flex justify-center items-center">
                <Text className="font-bold text-4xl">Daily Skate Part</Text>
                <Text className="font-bold">─────────</Text>
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