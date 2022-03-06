import {useState} from "react";
import {Link} from "react-router-dom"
import * as authService from "../../api/auth.service";
import "./styles.css";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sucessMsg, setSuccessMsg] =useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await authService.login(email, password).then(()=> {
            setEmail("")
            setPassword("")
            setSuccessMsg(`Hi, ${email}`);
        })
    }

    return(
        <div className="loginFormComponent component">
                            <h2>Start your manifestation journey here</h2>
            <form className="loginForm">
                {/* <label htmlFor="email">Email</label> */}
                <input className="loginForm-input"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="email"
                />
                {/* <label htmlFor="password">Password</label> */}
                <input className="loginForm-input"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    type="text"
                    name="password"
                    placeholder="Password"
                />
                <button 
                    className="loginBtn loginForm-input" 
                    style={{backgroundColor: "blue", color:"white"}} 
                    onClick={handleSubmit}
                > Log In</button>
            </form>

            
            <div className="linkToSignUp">
                <span>Don't have an account?</span>
                <Link to="signup">Sign up</Link>
            </div>
            <h3>{sucessMsg}</h3>
        </div>
    )
}
