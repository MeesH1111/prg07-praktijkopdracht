import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HotspotsList from "../pages/HotspotsList";
import HotspotsMap from "../pages/HotspotsMap";
import Settings from "../pages/Settings";
import React, {useContext, useEffect} from "react";
import Feather from '@expo/vector-icons/Feather';
import Homepage from "../pages/Homepage";
import {AppProvider, Theme} from "../components/Theme";
import '../../global.css';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
    const Tab = createBottomTabNavigator()
    const [loaded, error] = useFonts({
        'BebasNeue-Regular': require('../../assets/fonts/BebasNeue-Regular.ttf'),
        'PTSans-Regular': require('../../assets/fonts/PT Sans/PTSans-Regular.ttf'),
        'PTSans-Bold': require('../../assets/fonts/PT Sans/PTSans-Bold.ttf'),

    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }


    function Tabs() {
        const {darkMode, themeColors} = useContext(Theme);
        const screenOptions = {
            headerShown: false,
            tabBarInactiveTintColor: darkMode ? 'white' : 'black',
            animation: 'shift',
            tabBarStyle: {
                backgroundColor: darkMode ? 'black' : 'white',
                borderTopColor: 'black',
                borderTopWidth: 1,
                elevation: 0,
                shadowOpacity: 0,
            }
        };

        return (
            <Tab.Navigator
                screenOptions={screenOptions}
            >
                <Tab.Screen
                    name={'Home'}
                    component={Homepage}
                    options={{
                        tabBarIcon: ({focused}) => <Feather name="home" size={23}
                                                            color={focused ? ('#3b82f6') : (darkMode ? 'white' : 'black')}
                        />
                    }}
                />

                <Tab.Screen
                    name={'Map'}
                    component={HotspotsMap}
                    options={{
                        tabBarIcon: ({focused}) => <Feather name="map" size={22}
                                                            color={focused ? ('#3b82f6') : (darkMode ? 'white' : 'black')}/>
                    }}
                />

                <Tab.Screen
                    name={'List'}
                    component={HotspotsList}
                    options={{
                        tabBarIcon: ({focused}) => <Feather name="list" size={24}
                                                            color={focused ? ('#3b82f6') : (darkMode ? 'white' : 'black')}/>
                    }}
                />

                <Tab.Screen
                    name={'Settings'}
                    component={Settings}
                    options={{
                        tabBarIcon: ({focused}) => <Feather name="settings" size={22}
                                                            color={focused ? ('#3b82f6') : (darkMode ? 'white' : 'black')}/>
                    }}
                />
            </Tab.Navigator>

        )
    }

    return (
        <AppProvider>
            <NavigationContainer>
                <Tabs/>
            </NavigationContainer>
        </AppProvider>
    );
}


