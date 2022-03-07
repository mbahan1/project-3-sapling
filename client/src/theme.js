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
    background-color: #D9C4B3;

  }


  // small {
  //   display: block;
  // }
  // button {
  //   font-size: 10px;
  //   letter-spacing: 2px;
  //   font-weight: 200 !important;
  //   background-color: #e63946ff;
  //   color: #fff;
  //   padding: 10px 15px;
  //   margin: auto;
  //   text-align: center;
  //   display: inline-block !important;
  //   text-decoration: none;
  //   border: 0px;
  //   width: max-content;
  //   cursor: pointer;
  //   transition: all 0.3s 0s ease-in-out;
  

  // }

  button:hover {
    background-color: #4CAF50; 
    color: white;
  }


`;