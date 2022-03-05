import {useState} from "react";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../theme";
// import './App.css';
// import {Switch} from "antd";





function ToggleButton() {
  const[theme, setTheme] = useState ("light");

  const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
  };

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








// import {useState} from "react";
// import styled from "styled-components";
// import { lightTheme, darkTheme, GlobalStyles } from "../../theme";
// import Switch from "react-switch";
// import Toggle from "./components/Toggle";
// import "./style.css";



// function ToggleButton() {
//     const[theme, setTheme] = useState ('light');

//     const themeToggler = () => {
//         if (theme === 'light') {
//             setTheme('dark');
//         } else {
//             setTheme('light');
//         } 
//     }

  
//   return (
//         <>
//             <GlobalStyles />
//             <Toggle onToggle={themeToggler}>
//                 <Switch/>
//             </Toggle>
            
//         </>
//   );

// }

// export default ToggleButton;