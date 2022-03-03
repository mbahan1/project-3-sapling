import React, {useState, useEffect} from "react";



// const adviceUrl = "https://api.adviceslip.com/advice";



const Advice = () => {
    const [quotes, setQuotes] = useState ('');
    // const content = quotes;

    const getQuote = () => {
        fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => setQuotes(data.slip));
    };

    useEffect(() => {
        getQuote();
    }, []);

    // const getNewQuote = () => {
    //     getQuote();
    // };

    return (
        <div>
            <div>
                <p>{quotes}</p>
            </div>
            <div>
                <button onClick={getNewQuote}>Daily Advice</button>
            </div>   
        </div>

    );
}

export default Advice;







