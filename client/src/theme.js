import{createGlobalStyle}from"styled-components";

export const lightTheme={
  body: '#D9C4B3',
  fontColor: '#D9C4B3',
};

export const darkTheme={
  body: '#4B2E75',
  textColor: "#A1B182",
  
};



export const GlobalStyles=createGlobalStyle`
	body {
		background-color: ${({theme})=>theme.body};
    text-color: ${({theme})=>theme.textColor};
    
	}
  .toggle-btn {
    display: block;
    padding: 5px 5px;
    border-radius: 30px;
    cursor: pointer;
    background-color: #f5e8dd;

  }


  // small {
  //   display: block;
  // }
 


`;