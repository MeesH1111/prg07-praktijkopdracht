import React, {useContext, useEffect, useState} from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    ImageBackground,
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Theme} from "./Theme";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AntDesign, Entypo} from "@expo/vector-icons";


export default function HotspotList() {
    const navigation = useNavigation();
    const [hotspot, setHotspot] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [favorites, setfavorites] = useState({})
    const [notes, setNotes] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [currentHotspotId, setCurrentHotspotId] = useState(null)
    const [noteInput, setNoteInput] = useState('')

    const {darkMode} = useContext(Theme)
    const {themeColors} = useContext(Theme)
    const image = {uri: 'https://rotterdammakeithappen.nl/app/uploads/2019/09/201908_VerwoesteStad_558A3033_IrisvandenBroek-855x570.jpg'};

    const fetchSpots = async () => {
        try {
            const response = await fetch('https://api.jsonsilo.com/public/682f224f-4d79-4081-8d8c-eb1434b39b87')
            const data = await response.json()
            setHotspot(data.hotspots)
        } catch (error) {
            console.error('Fout bij het ophalen van hotspots')
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const loadFavorites = async () => {
        try {
            const storedfavorites = await AsyncStorage.getItem('favorites')
            if (storedfavorites) {
                setfavorites(JSON.parse(storedfavorites))
            }
        } catch (error) {
            console.error('Fout bij het ophalen van favorites')
        }
    }

    const toggleFavorite = async (hotspotId) => {
        try {
            const updatedfavorites = {...favorites}

            if (updatedfavorites[hotspotId]) {
                delete updatedfavorites[hotspotId]
            } else {
                updatedfavorites[hotspotId] = true
            }

            setfavorites(updatedfavorites)

            await AsyncStorage.setItem('favorites', JSON.stringify(updatedfavorites))
        } catch (error) {
            console.error('Fout bij het opslaan van favorites')
        }
    }

    const loadNotes = async () => {
        try {
            const storedNotes = await AsyncStorage.getItem('notes')
            if (storedNotes) {
                setNotes(JSON.parse(storedNotes))
            }
        } catch (error) {
            console.error('Fout bij het ophalen van notes')
        }
    }

    const addNote = async (hotspotId, note) => {
        try {
            const updatedNotes = {...notes, [hotspotId]: note}
            setNotes(updatedNotes)
            await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))
        } catch (error) {
            console.error('Fout bij het opslaan van notes')
        }
    }

    const openNoteModal = (hotspotId) => {
        setCurrentHotspotId(hotspotId)
        setNoteInput(notes[hotspotId] || '')
        setModalVisible(true)
    }

    const saveNote = () => {
        addNote(currentHotspotId, noteInput)
        setModalVisible(false)
    }

    useEffect(() => {
        fetchSpots()

        loadFavorites()

        loadNotes()
    }, [])

    if (loading === true) {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        );
    }

    const handlePress = (hotspot) => {
        navigation.navigate('Map', {
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
            color: darkMode ? 'white' : 'black',
        },

        favorite: {
            backgroundColor: favorites ? 'white' : 'black'
        },

    });


    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <FlatList
                    ListHeaderComponent={
                        <View className="flex flex-row justify-center items-center mt-10">
                            <Entypo name="list" size={24} color={`${darkMode ? 'white' : 'black'}`}/>
                            <Text
                                className="text-3xl font-semibold p-6"
                                style={styles.listTextTitle}
                            >
                                Skatespots lijst!
                            </Text>
                        </View>

                    }
                    data={hotspot}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <Pressable onPress={() => handlePress(item)}>
                            <ImageBackground
                                source={{uri: "https://rotterdammakeithappen.nl/app/uploads/2019/09/201908_VerwoesteStad_558A3033_IrisvandenBroek-855x570.jpg"}}
                                style={styles.listItemView}
                                className="p-6 m-6 border-2 border-gray-300 rounded-lg shadow-xl"

                            >
                                <View
                                    className={`flex  ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-4`}>
                                    <Text style={styles.listTextTitle}
                                          className="font-bold text-xl">{item.name}</Text>
                                    <Text style={styles.listTextDescription}
                                          className="text-lg">{item.description}</Text>
                                    <View style={{backgroundColor: themeColors.primaryColor}}
                                          className="flex flex-row justify-center items-center rounded-full max-w-28 mt-4">
                                        <Text
                                            className="p-2 text-lg color-white">{item.type}</Text>
                                    </View>
                                </View>
                                <View className='flex flex-row-reverse justify-between items-center'>
                                    {/*FAVORIET:*/}
                                    <Pressable onPress={() => toggleFavorite(item.id)}
                                               className={`p-2 mt-4 w-16 h-16 rounded-full flex justify-center items-center ${favorites[item.id] ? `bg-blue-500` : 'bg-[#f5f5f5]'}`}>
                                        <Text
                                            className="text-lg">{favorites[item.id] ?
                                            <AntDesign name="heart" size={24} color="black"/> :
                                            <AntDesign name="hearto" size={24} color="black"/>
                                        }</Text>
                                    </Pressable>

                                    {/*NOTITIE*/}
                                    <Pressable onPress={() => openNoteModal(item.id)}
                                               className={`p-6 mt-4 w-72 max-w-72 border-2 border-gray-500 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                        <View>
                                            <Text
                                                className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-lg`}>
                                                Notitie:
                                            </Text>
                                            <ScrollView>
                                                <Text
                                                    className={`${darkMode ? 'text-white' : 'text-black'} text-lg`}
                                                >
                                                    {notes[item.id] || ''}
                                                </Text>
                                            </ScrollView>
                                        </View>

                                    </Pressable>
                                </View>

                            </ImageBackground>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(false);
                                }}
                            >
                                <View className="flex-1 justify-center items-center bg-black/30">
                                    <View
                                        className={`p-6 flex flex-col justify-center items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} w-80 border-2 border-gray-500 rounded-lg`}
                                    >
                                        <TextInput
                                            placeholder="Notitie..."
                                            value={noteInput}
                                            onChangeText={setNoteInput}
                                            maxLength={100}
                                            className={`border-2 border-gray-500 rounded-lg p-4 mb-6 ${darkMode ? 'bg-white' : 'bg-white'} w-72 text-lg`}
                                        />
                                        <Text
                                            className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-right text-lg`}>
                                            {noteInput.length}/100 tekens
                                        </Text>
                                        <Button title="Opslaan" onPress={saveNote}/>
                                    </View>
                                </View>
                            </Modal>
                        </Pressable>
                    )}

                />
            </SafeAreaView>
        </SafeAreaProvider>

    )
}



