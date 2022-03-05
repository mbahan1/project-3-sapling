import {useState} from "react";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import './App.css';
// import {Switch} from "antd";
import Toggle from "./components/ToggleButton";




function ToggleButton() {
  const[theme, setTheme] = useState ("light");

  const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
      <GlobalStyles />
      <Toggle onClick={() => themeToggler()}/>
        Change the Color
    </ThemeProvider>
  );

}

export default ToggleButton;