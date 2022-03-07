import "./styles.css"
import SignUpForm from "../../components/SignUpForm";
import ToggleButton from "../../components/ToggleButton";


export default function SignUpPage() {
    return (
        <div className="signUpPage">
            <SignUpForm />
        <div className="toggleButtonSignUp"><ToggleButton /></div>
        </div>
    )
}
