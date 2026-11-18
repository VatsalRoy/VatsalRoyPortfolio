import { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDrakeMode, toggleDrakeMode] = useState(() => {
        try { return localStorage.getItem("theme") || "dark"; } catch { return "dark"; }
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if(isDrakeMode === "dark"){
            root.classList.add("dark");
        } else{
            root.classList.remove("dark");
        }
        try { localStorage.setItem("theme", isDrakeMode); } catch { /* storage unavailable */ }
    }, [isDrakeMode]);

    return(
        <ThemeContext.Provider value={{isDrakeMode: isDrakeMode === "dark", toggleDrakeMode}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);