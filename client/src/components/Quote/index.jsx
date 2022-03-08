
import { useEffect, useState } from "react";
import "./style.css";

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
        <h3>Daily Quote</h3>
        <p>{quote}</p>
        </div>
        <div>
        <button className="quote-btn" onClick={getQuote}>Get New Quote</button>

        </div>
    </div>
    )
       
}