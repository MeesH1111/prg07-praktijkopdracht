import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {Alert, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {useContext, useEffect, useRef, useState} from "react";
import * as Location from 'expo-location';
import {Theme} from "./Theme";
import {useRoute} from "@react-navigation/native";
import WebView from "react-native-webview";
import {AntDesign} from "@expo/vector-icons";


export default function Map() {
    const route = useRoute();
    const mapRef = useRef(null)
    const [location, setLocation] = useState(null)
    const [initialRegion] = useState({
        latitude: 51.92003432310167,
        longitude: 4.4888911303646575,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    })
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedHotspot, setSelectedHotspot] = useState(null);
    const [hotspots, setHotspots] = useState([])
    const {darkMode} = useContext(Theme)
    const {latitude, longitude} = route.params || {}

    const darkModeMapStyle = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#263c3f"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6b9a76"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#38414e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#212a37"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9ca5b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#1f2835"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#f3d19c"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2f3948"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#17263c"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#515c6d"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#17263c"
                }
            ]
        }
    ]

    useEffect(() => {
        const getLocationPermission = async () => {
            const {status} = await Location.requestForegroundPermissionsAsync();
        }

        getLocationPermission()

        const fetchHotspots = async () => {
            try {
                const response = await fetch('https://api.jsonsilo.com/public/682f224f-4d79-4081-8d8c-eb1434b39b87');
                const data = await response.json();
                setHotspots(data.hotspots);
            } catch (error) {
                console.error('Fout bij het ophalen van hotspots:', error);
                Alert.alert('Error', 'Kon hotspots niet laden');
            }
        };

        fetchHotspots();
    }, []);

    useEffect(() => {

        if (latitude && longitude && mapRef.current) {
            mapRef.current.animateToRegion({
                latitude,
                longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            })
        }
    }, [latitude, longitude])

    return (
        <View>
            <MapView
                ref={mapRef}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={initialRegion}
                showsUserLocation={true}
                showsMyLocationButton={true}
                mapType={darkMode ? 'standard' : 'hybrid'}
                customMapStyle={darkMode ? darkModeMapStyle : []}
            >
                {hotspots.map(hotspot => (
                    <Marker
                        onPress={() => {
                            setModalVisible(true)
                            setSelectedHotspot(hotspot)
                        }}
                        key={hotspot.id}
                        coordinate={{
                            latitude: hotspot.latitude,
                            longitude: hotspot.longitude
                        }}
                    />
                ))}
            </MapView>

            {selectedHotspot && (
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View className="flex-1 justify-center items-center">
                        <View
                            className={`flex ${darkMode ? 'bg-gray-800 border-white' : 'bg-white border-gray-700'} border-2 rounded-xl w-96 h-96`}>
                            <View className="flex justify-start items-start">
                                <View className="flex flex-row justify-between items-center w-full">
                                    <Text
                                        className={`p-2 font-bold text-xl ${darkMode ? 'text-white' : 'text-black'}`}>{selectedHotspot.name}</Text>
                                    <Pressable
                                        className="p-2 rounded-full text-white"
                                        onPress={() => {
                                            setModalVisible(false)
                                        }}
                                    >
                                        <AntDesign name="closecircleo" size={24} color="#3b82f6"/>
                                    </Pressable>
                                </View>
                                <Text
                                    className={`pl-2 pb-2 ${darkMode ? 'text-white' : 'text-black'} text-lg`}>{`${selectedHotspot.description}`}</Text>
                            </View>
                            <WebView
                                source={{html: `<iframe width="100%" height="100%" src=${selectedHotspot.iframeSrc} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                            />
                        </View>
                    </View>

                </Modal>
            )}

        </View>


    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
});
