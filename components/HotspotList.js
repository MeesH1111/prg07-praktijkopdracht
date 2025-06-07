import {useContext, useEffect, useState} from "react";
import {
    ActivityIndicator,
    Animated,
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    useAnimatedValue,
    View
} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Theme} from "./Theme";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function HotspotList() {
    const navigation = useNavigation();
    const [hotspot, setHotspot] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [likes, setLikes] = useState({})
    const {darkMode} = useContext(Theme)

    const fadeAnim = useAnimatedValue(0);

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    const fetchSpots = async () => {
        try {
            const response = await fetch('https://api.jsonsilo.com/public/682f224f-4d79-4081-8d8c-eb1434b39b87')
            const data = await response.json()
            setHotspot(data.hotspots)
        } catch (error) {
            console.error('Fout bij het ophalen van hotspots:', error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const loadLikes = async () => {
        try {
            const storedLikes = await AsyncStorage.getItem('likes')
            if (storedLikes) {
                setLikes(JSON.parse(storedLikes))
            }
        } catch (error) {
            console.error('Fout bij het ophalen van likes:', error)
        }
    }

    const toggleLike = async (hotspotId) => {
        try {
            const updatedLikes = {...likes}

            if (updatedLikes[hotspotId]) {
                delete updatedLikes[hotspotId]
            } else {
                updatedLikes[hotspotId] = true
            }

            setLikes(updatedLikes)
        } catch (error) {
            console.error('Fout bij het opslaan van likes:', error)
        }
    }

    useEffect(() => {
        fetchSpots()

        loadLikes()
    }, [])

    if (loading === true) {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        );
    }

    const handlePress = (hotspot) => {
        navigation.navigate('HotspotsMap', {
            latitude: hotspot.latitude,
            longitude: hotspot.longitude,
        })
    }

    const styles = StyleSheet.create({
        listItemView: {
            backgroundColor: darkMode ? 'black' : 'white',
        },

        listTextTitle: {
            color: darkMode ? 'white' : 'black'
        },

        listTextType: {
            // color: darkMode ? 'white' : 'black'
        },

        listTextDescription: {
            color: darkMode ? 'white' : 'black'
        },

        like: {
            backgroundColor: likes ? 'white' : 'black'
        }

    });


    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <FlatList
                    data={hotspot}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <Pressable onPress={() => handlePress(item)}>
                            <View style={styles.listItemView}
                                  className="p-6 m-6 border-2 border-gray-300 rounded-lg shadow-xl"

                            >
                                <Text style={styles.listTextTitle} className="font-bold text-lg">{item.name}</Text>
                                <Text style={styles.listTextType}
                                      className="font-semibold pt-2 pb-2 color-blue-500">{item.type}</Text>
                                <Text style={styles.listTextDescription} className="">{item.description}</Text>
                                <Pressable onPress={() => toggleLike(item.id)}
                                           className={`p-2 mt-4 rounded max-w-20 flex justify-center items-center ${likes[item.id] ? `bg-[#1a1110] ${darkMode ? 'border-2 border-gray-300' : 'border-1'}` : 'bg-[#f5f5f5]'}`}>
                                    <Text
                                        className="color-gray-100">{likes[item.id] ? '❤️' : '🤍'}</Text>
                                </Pressable>
                            </View>
                        </Pressable>
                    )}

                />
            </SafeAreaView>
        </SafeAreaProvider>

    )
}



