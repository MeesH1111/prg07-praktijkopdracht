import React, { createContext, useState } from "react";

export const Theme = createContext();

export function AppProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <Theme.Provider value={{darkMode, setDarkMode}}>
            {children}
        </Theme.Provider>
    )
}