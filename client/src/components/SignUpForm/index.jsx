import "./styles.css"
import {useState} from "react";
import * as userService from "../../api/user.service";


export default function SignUpForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [zodiacSign, setZodiacSign] = useState("")

    const handleSubmit = async () => {
        let newUser = {firstName, lastName, email, password, zodiacSign};
        let res = await userService.create(newUser).then(() => {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setZodiacSign("");
            console.log(newUser);
        })

        console.log(res);
        if (!res === 201) {
            alert(`ERROR code: ${res.status}`)
        }
    }
    return(
        <div className="signUpFormComponent">
            <form className="signUpForm">
                <label htmlFor="firstName">First Name</label>
                <input 
                    className="signUpForm-input"
                    onChange={(e)=> setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    name="firstName"
                    placeholder="First Name"  
                />

                <label htmlFor="lastName">Last Name</label>
                <input 
                    className="signUpForm-input"
                    onChange={(e)=> setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />

                <label htmlFor="email">Email</label>
                <input className="signUpForm-input"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="email"
                />

                <label htmlFor="password">Password</label>
                <input className="signUpForm-input"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    type="text"
                    name="password"
                    placeholder="Password"
                />

                <label htmlFor="zodiacSign">Select Zodiac Sign</label>
                <select className="signUpForm-input">
                    <option>- - -</option>
                    <option value="aries">Aries</option>
                    <option value="taurus">Taurus</option>
                    <option value="gemini">Gemini</option>
                    <option value="cancer">Cancer</option>
                    <option value="leo">Leo</option>
                    <option value="virgo">Virgo</option>
                    <option value="libra">Libra</option>
                    <option value="scorpio">Scorpio</option>
                    <option value="sagittarius">Sagittarius</option>
                    <option value="capricorn">Capricorn</option>
                    <option value="aquarius">Aquarius</option>
                    <option value="pisces">Pisces</option>
                </select>

                
                <button 
                    className="signUpBtn signUpForm-input" 
                    onClick={handleSubmit}
                > Sign Up
                </button>
            </form>

        </div>
    )
}