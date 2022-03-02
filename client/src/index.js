import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/HomePage";
import './index.css';
import NavBar from './components/NavBar';



ReactDOM.render(
		<React.StrictMode>
			<Home />
		</React.StrictMode>,
	document.getElementById("root")
);