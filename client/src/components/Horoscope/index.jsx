import React from "react";


function Horoscope ({apiHoroscopeData}) {
    const [data, setHoroscopeData] = React.useState();
    let content;
    if (!data && apiHoroscopeData) {
        content = setHoroscopeData(apiHoroscopeData);
        
    } else {
        content = (
            <div>
                <p> Opps, no horoscope today.</p>
            </div>
        );
    };
    return (
        <div>
            {content}
        </div>
    
           );   
    
}
  
export default Horoscope;


