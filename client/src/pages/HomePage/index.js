import React, {useState, useEffect} from "react";


import '../../index.css';
import NavBar from '../../components/NavBar';
import Quote from "../../components/Quote";


// const fetchFortuneCookieUrl = `http://fortunecookieapi.herokuapp.com/v1/cookie`;

export default function Home() {

  return (
    
    <div className="main">
     <NavBar />
     <Quote />

    </div>

)

}

 

