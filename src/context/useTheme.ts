import { useContext } from "react"
import { ThemeProviderContext } from "./themeProvider"


export const useTheme =()=>{
    const context = useContext(ThemeProviderContext)

    if(context === undefined){
        throw new Error("useTheme deve ser utilizado com um ThemeProvider")
    }
    return context
}

