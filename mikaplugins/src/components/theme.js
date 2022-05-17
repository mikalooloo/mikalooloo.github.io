import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const reduceTheme = (state, action) => {
  switch(action.type) {
    case "darkMode":
      return { darkMode: true };
    case "lightMode":
      return { darkMode: false };
    default:
      return state;
  }
}

const initialTheme = {
  darkMode: true,
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(reduceTheme, initialTheme);

  return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>
}