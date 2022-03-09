import AppDescription from "../../components/AppDescription";
import LoginForm from "../../components/LoginForm";
import "./styles.css"

export default function WelcomePage() {
    return (
        <div className="welcomePage">
            <div className="welcomePageHeader">
                <LoginForm />
            </div>
            <AppDescription />
        </div>
    )
}