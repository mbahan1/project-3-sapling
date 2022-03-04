import React from "react";
import ReactDOM from "react-dom";
// import Home from "./pages/HomePage";
import './index.css';
import App from "./App"
import {BrowserRouter} from "react-router-dom"



ReactDOM.render(
  <BrowserRouter>
		<React.StrictMode>

      {/* moved <Home /> to App.js
			<Home /> */}
      <App />
		</React.StrictMode>
    </BrowserRouter>,

	document.getElementById("root")
);