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
        <h3>Words of Advice</h3>
        <p>{quote}</p>
        </div>
        <div>
        <button className="quote-btn" onClick={getQuote}>Click to Read</button>

        </div>
    </div>
    )
}