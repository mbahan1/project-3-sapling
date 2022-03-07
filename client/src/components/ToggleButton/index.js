import { useState } from "react";
import Switch from "../../components/ToggleSwitcher";
import { ThemeProvider } from "styled-components";




const LightTheme = {
  pageBackground: "#A1B182",
  titleColor: "purple",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#4B2E75",
  titleColor: "green",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function ToggleButton() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeProvider theme={themes[theme]}>
      <Switch theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default ToggleButton;












