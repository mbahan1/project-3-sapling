import {useState} from "react";
import {Link} from "react-router-dom"
import * as authService from "../../api/auth.service";
import "./styles.css";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await authService.login(email, password).then(()=> {
            setEmail("")
            setPassword("")
            document.location = "/"
        })
    }

    return(
        <div className="loginFormComponent component">
            <h2 className="logInManifest">Start your manifestation journey here</h2>
            <form className="loginForm">
                {/* <label htmlFor="email">Email</label> */}
                <input className="loginForm-input"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="you@example.com"
                />
                {/* <label htmlFor="password">Password</label> */}
                <input className="loginForm-input"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <button 
                    className="loginBtn loginForm-input" 
                    onClick={handleSubmit}
                > Log In</button>
            </form>

            <div className="linkToSignUp">
                <span>Don't have an account?</span>
                <Link to="signup"><button className="home-page-signUp-btn">Sign up</button></Link>
            </div>
        </div>
    )
}
