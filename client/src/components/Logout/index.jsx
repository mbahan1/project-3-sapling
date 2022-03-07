import * as authService from "../../api/auth.service"

const Logout = () => {

    const logout = () => {
        authService.logout();
        console.log("Logged out");
        document.location = "/"
    }
    
    return (
        <div>
            <button 
                className="logoutBtn"
                onClick={logout}
            >Log Out</button>
        </div>
        
    )
    
}

export default Logout;