import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {Alert, StyleSheet} from "react-native";
import {useContext, useEffect, useRef, useState} from "react";
import * as Location from 'expo-location';
import {Theme} from "./Theme";
import {useRoute} from "@react-navigation/native";


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
        console.log('Navigated to Map with:', latitude, longitude);
        if (mapRef.current) {
            console.log("MapRef is correctly initialized:", mapRef.current);
        } else {
            console.log("MapRef is not initialized");
        }


        if (latitude && longitude && mapRef.current) {
            console.log("Animating to region:", {latitude, longitude});
            mapRef.current.animateToRegion({
                latitude,
                longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            })
        }
    }, [latitude, longitude])

    return (
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
                    onPress={() => Alert.alert(hotspot.name, hotspot.description)}
                    key={hotspot.id}
                    coordinate={{
                        latitude: hotspot.latitude,
                        longitude: hotspot.longitude
                    }}
                    title={hotspot.name}
                    description={hotspot.description}
                />
            ))}

        </MapView>


    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
});
