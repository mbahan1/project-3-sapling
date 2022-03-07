import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "../../theme";
// import './App.css';
// import {Switch} from "antd";




function ThemeButton(){
  const[theme,setTheme]=useState("light");

  const themeToggler=()=>{
      theme==="light"? setTheme("dark"): setTheme("light");
  };

return(
    <ThemeProvider theme={theme === 'light'? lightTheme: darkTheme}>
        <>
            <GlobalStyles/>
            <button onClick={themeToggler}>Toggle Theme</button>
        </>
      </ThemeProvider>
  );

}

export default ThemeButton;