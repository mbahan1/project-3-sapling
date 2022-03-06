import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: '#A1B182',
  fontColor: '#D9C4B3',
};

export const darkTheme = {
  body: '#4B2E75',
  fontColor: "#A1B182",
};



export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${({theme}) => theme.body};
    
	}
  small {
    display: block;
  }
  button {
    display: block;
  }


`;


