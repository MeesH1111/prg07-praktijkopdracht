import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HotspotsList from "./HotspotsList";
import HotspotsMap from "./HotspotsMap";
import Settings from "./Settings";
import React from "react";
import Feather from '@expo/vector-icons/Feather';
import Homepage from "./Homepage";
import {AppProvider} from "./components/Theme";
import './global.css';


export default function App() {
    const Tab = createBottomTabNavigator()


    function Tabs() {
        return (
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen
                    name={'Home'}
                    component={Homepage}
                    options={{tabBarIcon: () => <Feather name="home" size={23}/>}}
                />

                <Tab.Screen
                    name={'HotspotsMap'}
                    component={HotspotsMap}
                    options={{tabBarIcon: () => <Feather name="map-pin" size={24} color="black"/>}}
                />

                <Tab.Screen
                    name={'HotspotsList'}
                    component={HotspotsList}
                    options={{tabBarIcon: () => <Feather name="list" size={24} color="black"/>}}
                />

                <Tab.Screen
                    name={'Settings'}
                    component={Settings}
                    options={{tabBarIcon: () => <Feather name="settings" size={22} color="black"/>}}
                />
            </Tab.Navigator>

        )
    }

    return (
        <AppProvider>
            <NavigationContainer>
                <Tabs style={styles.tabs}/>
            </NavigationContainer>
        </AppProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const screenOptions = {
    tabBarInactiveTintColor: 'black',
    animation: 'shift'
};
