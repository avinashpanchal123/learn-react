import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    changeTheme : ()=>{

    }
})



export const ThemeContextProvider =  ThemeContext.Provider;

export const useTheme =  function useTheme(){
    return useContext(themeContext)
}