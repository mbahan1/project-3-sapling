import {useState} from "react";
import { Link } from "react-router-dom";
import * as authService from "../../api/auth.service";
import "./styles.css"

// Main SignUp Form for New Users to enter their data
export default function SignUpForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [zodiacSign, setZodiacSign] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newUser = {firstName, lastName, email, password, zodiacSign};
        let res = await authService.register(newUser).then(() => {

            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setZodiacSign("");
            setSuccessMsg(`Welcome ${firstName} :)`);
            document.location = "/"
        })

        console.log(res);
        if (!res === 201) {
            alert(`ERROR code: ${res.status}`)
        }
    }
    return(
        <div className="signUpFormComponent">
            
            <form className="signUpForm">
            <h3 className='signUpHeader'>Sign up and start manifesting</h3>
                <label htmlFor="firstName">First Name*</label>
                <input 
                    className="signUpForm-input"
                    onChange={(e)=> setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    name="firstName"
                    placeholder="First Name"  
                />

                <label htmlFor="lastName">Last Name*</label>
                <input 
                    className="signUpForm-input"
                    onChange={(e)=> setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />

                <label htmlFor="email">Email ID*</label>
                <input className="signUpForm-input"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="Email Address"
                />

                <label htmlFor="password">Password*</label>
                <input className="signUpForm-input"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    placeholder="5+ Characters"
                />

                <label htmlFor="zodiacSign">Select Zodiac Sign*</label>
                <select className="signUpForm-input" onChange={(e)=>setZodiacSign(e.target.value)}>
                    <option>- - -</option>
                    <option value="aries">♈ Aries (March 21 - April 19)</option>
                    <option value="taurus">♉ Taurus (April 20 - May 20)</option>
                    <option value="gemini">♊ Gemini (May 21 - June 20)</option>
                    <option value="cancer">♋ Cancer (June 21 - July 22)</option>
                    <option value="leo">♌ Leo (July 23 - August 22)</option>
                    <option value="virgo">♍ Virgo (August 23 - September 22)</option>
                    <option value="libra">♎ Libra (September 23 - October 22)</option>
                    <option value="scorpio">♏ Scorpio (October 23 - November 21)</option>
                    <option value="sagittarius">♏ Sagittarius (November 22 - December 21)</option>
                    <option value="capricorn">♑ Capricorn (December 22 - January 19)</option>
                    <option value="aquarius">♒ Aquarius (January 20 - February 18)</option>
                    <option value="pisces">♓ Pisces (February 19 - March 20)</option>
                </select>
                <div className="message-signup-page">
                    <span>* Sign-Up then Log-In to feel the energy! </span>

                </div>
                <button 
                    className="signUpBtn signUpForm-input" 
                    onClick={handleSubmit}
                > Sign Up
                </button>
            </form>
            
            <div className="linkToSignUp">
                <span>Have an account?</span>
                
            <div className="logInLink">    
                <Link to="/"><button className="signUp-login-btn">Log In</button></Link>
                </div>
            </div>
            <h1>{successMsg}</h1>

        </div>
    )
    }
