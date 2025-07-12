import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HotspotsList from "./HotspotsList";
import HotspotsMap from "./HotspotsMap";
import Settings from "./Settings";
import React, {useContext} from "react";
import Feather from '@expo/vector-icons/Feather';
import Homepage from "./Homepage";
import {AppProvider, Theme} from "./components/Theme";
import './global.css';


export default function App() {
    const Tab = createBottomTabNavigator()


    function Tabs() {
        const {darkMode} = useContext(Theme);

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


