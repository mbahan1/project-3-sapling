import {useState} from "react";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import './App.css';
// import {Switch} from "antd";
import { GlobalStyles } from "./global";




function ToggleButton() {
    const[theme, setTheme] = useState ('light');

    const themeToggler = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        } 
    }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
        <>
            <GlobalStyles />
            <button onClick={themeToggler}>Toggle Theme</button>
        </>
      </ThemeProvider>
  );

}

export default ToggleButton;