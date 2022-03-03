import React, {useState, useEffect} from "react";



// const adviceUrl = "https://api.adviceslip.com/advice";



const Advice = () => {
    const [quotes, setQuotes] = useState ([]);
    const {content} = quotes;

    const getQuote = () => {
        fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => setQuotes(data));
    };

    useEffect(() => {
        getQuote();
    }, []);

    const getNewQuote = () => {
        getQuote();
    };

    return (
        <div>
            <div>
                <p>{content}</p>
            </div>
            <div>
                <button onClick={getNewQuote}>Daily Advice</button>
            </div>   
        </div>

    );
}

export default Advice;


// // import axios from "axios";
// import React, {useEffect, useState} from "react";
// // import FortuneCookie from "../components/FortuneCookie";
// import '../../index.css';


// // const fetchFortuneCookieUrl = `http://fortunecookieapi.herokuapp.com/v1/cookie`;

// function Home() {
// 	const [fortuneCookie, setFortuneCookie] = useState([]);


// 	useEffect(() => {
//     getNewFortuneCookie()
// 		fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
//     .then(response => response.json())
//     .then(
//     (fortuneCookie) => {
//       setFortuneCookie(fortuneCookie);
//       // console.log(fortuneCookie)

//     })
// 	}, []);

//   const getNewFortuneCookie = () =>{
//     fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
//     .then(response => response.json())
//     .then(
//     (fortuneCookie) => {
//       setFortuneCookie(fortuneCookie);
//       // console.log(fortuneCookie)

//     })
// 	}

//   return (
// 		<div>
//      <h3>{fortuneCookie}</h3>
//        <button onClick={getNewFortuneCookie}>Fortune Cookie!</button>
//      </div>
// 	);

// }

// export default Home;

