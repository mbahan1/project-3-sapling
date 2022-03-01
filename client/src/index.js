import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import './index.css';
import Horoscope from "./components/Horoscope";
import Kudos from "./components/Kudos";



// horoscope Api
const fetchHoroscopeUrl = `https://aztro.sameerkumar.website/?sign=aries&day=today`;


// state variable
function App(){
  const [apiHoroscopeData, setApiHoroscopeData] = useState([]);

  useEffect(() => {
    getHoroscopeData();
  },[]);


  
  const getHoroscopeData =() =>{
    (async()=> {
      const responseHoroscope = await fetch(fetchHoroscopeUrl);
      const incomingHoroscopeData = await responseHoroscope.json();
      setApiHoroscopeData(incomingHoroscopeData);
    })();
  }

    return (
      <div>
        <Horoscope apiHoroscopeData={apiHoroscopeData} />
        <button onClick={ getHoroscopeData()}>Daily Horoscope </button>
        <Kudos />
      </div>
    );

  } 



ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	document.getElementById("root")
);

  
  
