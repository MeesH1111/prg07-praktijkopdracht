import {useContext, useEffect, useState} from "react";
import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Theme} from "./Theme";


export default function HotspotList() {
    const [hotspot, setHotspot] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {darkMode} = useContext(Theme)


    const fetchSpots = async () => {
        try {
            const response = await fetch('https://api.jsonsilo.com/public/682f224f-4d79-4081-8d8c-eb1434b39b87')
            const data = await response.json()
            setHotspot(data.hotspots)
            console.log('Rendering item:', data.hotspots)
        } catch (error) {
            console.error('Fout bij het ophalen van hotspots:', error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSpots()
    }, [])

    if (loading === true) {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        );
    }

    const styles = StyleSheet.create({
        listItemView: {
            backgroundColor: darkMode ? 'black' : 'white',
        },

        listTextTitle: {
            color: darkMode ? 'white' : 'black'
        },

        listTextType: {
            color: darkMode ? 'white' : 'black'
        },

        listTextDescription: {
            color: darkMode ? 'white' : 'black'
        }
    });


    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <FlatList
                    data={hotspot}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <View style={styles.listItemView}
                              className="p-6 m-6 border-2 border-gray-300 rounded-lg shadow-xl">
                            <Text style={styles.listTextTitle} className="font-bold text-lg">{item.name}</Text>
                            <Text style={styles.listTextType}>{item.type}</Text>
                            <Text style={styles.listTextDescription}>{item.description}</Text>
                        </View>
                    )}

                />
            </SafeAreaView>
        </SafeAreaProvider>

    )
}



