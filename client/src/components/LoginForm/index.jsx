// LoginForm Component

import {useState} from "react";
import {Link} from "react-router-dom";
import "./styles.css"

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async () => {

    }

    return(
        <div className="loginFormComponent component">
            <h4>[LoginForm Component]</h4>
            <form className="loginForm">
                <input className="loginForm-input"
                    onChange={(e)=> e.target.value}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="email"
                />
                <input className="loginForm-input"
                    onChange={(e)=> e.target.value}
                    value={password}
                    type="text"
                    name="password"
                    placeholder="Password"
                />
                <button className="loginBtn loginForm-input" onClick={handleSubmit}> Log In</button>
            </form>

            
            <div>
                <span>Don't have an account?</span>
                <Link to="signup">Sign up</Link>
            </div>
        </div>
    )
}