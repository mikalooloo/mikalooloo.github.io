import React, { createContext } from "react";
import useLocalStorage from "../apis/use-local-storage";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);

  return <ThemeContext.Provider value={{ darkMode, setDarkMode }}>{props.children}</ThemeContext.Provider>
}