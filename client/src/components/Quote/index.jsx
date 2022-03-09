import { useEffect, useState } from "react";
import "./style.css";

// Daily Quote Button
// Fetches random inspirational quote from a quote API
export default function Quote() {

    const [quote, setQuote] = useState("")

    const getQuote = () => {
        fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => setQuote(data.slip.advice))
    }

    useEffect(() => {
        getQuote();
    }, []);

    return (
    <div>
        <div>
            <h2>Daily Quote</h2>
            <p>{quote}</p>
        </div>
        <div>
            <button className="quote-btn" onClick={getQuote}>Get New Quote</button>
        </div>
    </div>
    )
}