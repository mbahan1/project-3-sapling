import "./styles.css"
import {useState} from "react";
// import * as userService from "";


export default function SignUpForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [zodiacSign, setZodiacSign] = useState("")

    const handleSubmit = async () => {
        let newUser = {firstName, lastName, email, password, zodiacSign};
        // let res = await userService.create(newUser).then(() => {
        //     setFirstName("");
        //     setLastName("");
        //     setEmail("");
        //     setPassword("");
        //     setZodiacSign("");
        //     console.log(newUser);
        // })

        // console.log(res);
        // if (!res === 201) {
        //     alert(`ERROR code: ${res.status}`)
        // }
    }
    return(
        <div className="signUpFormComponent component">
            <h4>[SignUp Component]</h4>
            <form className="signUpForm">
                <input className="signUpForm-input"
                    onChange={(e)=> e.target.value}
                    value={firstName}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                />
                <input className="signUpForm-input"
                    onChange={(e)=> e.target.value}
                    value={lastName}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />
                <input className="signUpForm-input"
                    onChange={(e)=> e.target.value}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="email"
                />
                <input className="signUpForm-input"
                    onChange={(e)=> e.target.value}
                    value={password}
                    type="text"
                    name="password"
                    placeholder="Password"
                />
                <input className="signUpForm-input"
                    onChange={(e)=> e.target.value}
                    value={zodiacSign}
                    type="text"
                    name="zodiacSign"
                    placeholder="Zodiac Sign"
                />
                <select className="signUpForm-input">
                    <option>Select Zodiac Sign</option>
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