// Welcome Page contains
// LoginForm Component
// Manifest app description Component
// Link to RegisterPage

import {Link} from "react-router-dom"
import LoginForm from "../../components/LoginForm"

export default function WelcomePage() {
    return (
        <div>
            <h3>[WELCOME PAGE]</h3>
            <LoginForm />
            <Link to="/signUp">Sign up</Link>
        </div>
    )
}