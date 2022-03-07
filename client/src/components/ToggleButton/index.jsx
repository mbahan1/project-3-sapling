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



//  function ToggleButton() {
//   const[theme, setTheme] = useState ("light");

//   const themeToggler = () => {
//       theme === "light" ? setTheme("dark") : setTheme("light");
//   };

//   return (
//     <div>
//       <div className="toggle"></div>
//       <div className="circle"></div>
//     <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
//       <GlobalStyles />
//       <Toggle onToggle={() => themeToggler()}/>
//         Change the Color
//       </ThemeProvider>

//     </div>
    
//   );

// }

// export default ToggleButton;

