import * as authService from "../../api/auth.service";
import "./style.css";

const Logout = () => {

    const logout = () => {
        authService.logout();
        console.log("Logged out");
        document.location = "/"
    }
    
    return (
        <div className="profile-logout-section">
            <button 
                className="logoutBtn"
                onClick={logout}
            >Log Out</button>
        </div>
    )
}

export default Logout;