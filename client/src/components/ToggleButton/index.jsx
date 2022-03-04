import {useState} from "react";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import './App.css';
import {Switch} from "antd";




function ToggleButton() {
  const[theme, setTheme] = useState ("light");

  const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
      <GlobalStyles />
      <Switch onClick={() => themeToggler()}/>
        Change the Color
      </ThemeProvider>
  );

}

export default ToggleButton;