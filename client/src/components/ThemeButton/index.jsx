import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "../../theme";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
// import './App.css';
// import {Switch} from "antd";




function ThemeButton(){
  const[theme,setTheme]=useState("light");

  const themeToggler=()=>{
      theme==="light"? setTheme("dark"): setTheme("light");
  };

  const icon1 = <HiMoon size={15} /> ;
  const icon2 = <CgSun size={15} /> ;

return(
    <ThemeProvider theme={theme === 'light'? lightTheme: darkTheme}>
        <>
            <GlobalStyles/>
            <button className="toggle-btn" onClick={themeToggler}>{icon1} {icon2}</button>
        </>
      </ThemeProvider>
  );

}

export default ThemeButton;