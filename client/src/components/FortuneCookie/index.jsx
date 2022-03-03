// import React, {useState, useEffect} from "react";



// // const adviceUrl = "https://api.adviceslip.com/advice";



// const Advice = () => {
//     const [quotes, setQuotes] = useState ([]);
//     const {content} = quotes;

//     const getQuote = () => {
//         fetch("https://api.adviceslip.com/advice")
//         .then((response) => response.json())
//         .then((data) => setQuotes(data));
//     };

//     useEffect(() => {
//         getQuote();
//     }, []);

//     const getNewQuote = () => {
//         getQuote();
//     };

//     return (
//         <div>
//             <div>
//                 <p>{content}</p>
//             </div>
//             <div>
//                 <button onClick={getNewQuote}>Daily Advice</button>
//             </div>   
//         </div>

//     );
// }

// export default Advice;







// function FortuneCookie ({ fortuneCookie}) {
//     const [data, setFortuneCookie] = useState([]);
//     let content;

//     if (!data && fortuneCookie) {
//         content = <Loader />;
//         setFortuneCookie(fortuneCookie);
        
//     } else {
//         content = (
//             <div>
//                 { fortuneCookie }
//             </div>
//         );
//     }

//     return (
//         <div>
//             {content}
//             </div>
//     );
// }

// export default FortuneCookie;


