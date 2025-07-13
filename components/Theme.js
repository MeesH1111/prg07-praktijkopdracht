import React, {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Theme = createContext();

export function AppProvider({children}) {
    const [darkMode, setDarkMode] = useState(false)

    const themeColors = {
        primaryColor: darkMode ? '#D50000' : '#D50000',
    }

    useEffect(() => {
        const loadDarkMode = async () => {
            const savedMode = await AsyncStorage.getItem('darkMode');
            if (savedMode !== null) {
                setDarkMode(JSON.parse(savedMode));
            }
        }

        loadDarkMode();
    }, [])

    useEffect(() => {
        const saveDarkMode = async () => {
            await AsyncStorage.setItem('darkMode', JSON.stringify(darkMode));
        }

        saveDarkMode();
    }, [darkMode])


    return (
        <Theme.Provider value={{darkMode, setDarkMode, themeColors}}>
            {children}
        </Theme.Provider>
    )
}