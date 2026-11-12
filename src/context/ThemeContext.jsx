import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");

  function changeTheme() {

    if (theme === "light") {

      setTheme("dark");

    } else {

      setTheme("light");

    }

  }

  return (

    <ThemeContext.Provider
      value={{ theme, changeTheme }}
    >

      <div className={`app theme-${theme}`}>

        {children}

      </div>

    </ThemeContext.Provider>

  );

}

export function useTheme() {

  return useContext(ThemeContext);

}