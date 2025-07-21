import { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDrakeMode, toggleDrakeMode] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if(isDrakeMode === "dark"){
            root.classList.add("dark");
        } else{
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", isDrakeMode);
    }, [isDrakeMode]);

    return(
        <ThemeContext.Provider value={{isDrakeMode: isDrakeMode === "dark", toggleDrakeMode}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);