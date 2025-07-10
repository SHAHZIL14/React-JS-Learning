import { createContext, useContext } from "react";
const themeContext = createContext({
    themeMode:"light",
    themeChanger:(themeMode)=>{}
});
export const ThemeContextProvider = themeContext.Provider;
export default function useTheme(){
    return useContext(themeContext);
}