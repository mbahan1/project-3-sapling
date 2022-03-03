import React, {useEffect, useState} from "react";
// import FortuneCookie from "../components/FortuneCookie";


import '../../index.css';
import NavBar from '../../components/NavBar';
import Quote from "../../components/Quote";


// const fetchFortuneCookieUrl = `http://fortunecookieapi.herokuapp.com/v1/cookie`;

function Home() {

  return (
    
    <div className="main">
     <NavBar />
     <Quote />
    </div>

	);

}

export default Home;

