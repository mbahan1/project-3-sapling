import React, {useEffect, useState} from "react";
// import FortuneCookie from "../components/FortuneCookie";


import '../../index.css';


// const fetchFortuneCookieUrl = `http://fortunecookieapi.herokuapp.com/v1/cookie`;

function Home() {
	const [fortuneCookie, setFortuneCookie] = useState([]);


	useEffect(() => {
		fetch("http://fortunecookieapi.herokuapp.com/v1/cookie")
    .then(response => response.json())
    .then(
    (fortuneCookie) => {
      setFortuneCookie(fortuneCookie);
      // console.log(fortuneCookie)

    })
	}, []);

  const getNewFortuneCookie = () =>{
    fetch("http://fortunecookieapi.herokuapp.com/v1/cookie")
    .then(response => response.json())
    .then(
    (fortuneCookie) => {
      setFortuneCookie(fortuneCookie.content);
      // console.log(fortuneCookie)

    })
	}

  return (
		<div className="main">
     <h3>{fortuneCookie}</h3>
       <button onClick={getNewFortuneCookie}>Fortune Cookie!</button>
     </div>
	);

}

export default Home;

