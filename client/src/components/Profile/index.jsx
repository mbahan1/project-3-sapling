import React, {useState} from "react";// import userEvent from "@testing-library/user-event";
import { string } from "prop-types";
import { array } from "prop-types";
import NavBar from "./components/NavBar";
import Quote from "./components/Quote";



function Profile(props) {
     const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [images, setImages] = useState();

    return (

        
            <div className="container">
            <div>
                <div>
                    <p>It's working</p>
                    <h5>{props.user}</h5>
                    <h5>{props.comments}</h5>
                    <h5>{props.photo}</h5>
                    <h5>{Quote}</h5>
                    
                </div>
            </div>
        </div>
        
    )
}

Profile.propTypes = {
    photo: string.isRequired,
    userName: string.isRequired,
    comments: array,
}


export default Profile;