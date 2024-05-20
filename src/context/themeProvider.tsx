import { ReactNode, createContext, useEffect, useState } from "react";

type Theme = "dark" | "light" ;

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeProviderContext = createContext<
  ThemeContextProps | undefined
>(undefined);

export const  ThemeProvider: React.FC<{children:ReactNode}>=({children})=> {
  const [theme, setTheme] = useState<Theme>("light")

 function toggleTheme(){
  setTheme(prevTheme=> prevTheme === "light"? "dark": "light");
  localStorage.setItem('theme', theme)
 }

 useEffect(()=>{
 localStorage.getItem("theme") || ""
 },[])

  

  return (
    <ThemeProviderContext.Provider  value={{theme, toggleTheme}}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
