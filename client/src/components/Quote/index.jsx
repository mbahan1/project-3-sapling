
import { useEffect, useState } from "react";

export default function Quote() {

    const [quote, setQuote] = useState("")
    const [getNew, setGetNew] = useState("false");

    const getQuote = () => {
        fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => setQuote(data.slip.advice))
    }

    useEffect(() => {
        getQuote();
    }, [getNew]);

    const getNewQuote = () => {
        setGetNew((current) => !current)
    }

    return (
    <div>
        <h3>Daily Quote</h3>
        <p>{quote}</p>
        <button onClick={getNewQuote}>Get New Quote</button>
    </div>
    )
       
}