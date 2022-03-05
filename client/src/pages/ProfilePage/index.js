import React, {useState } from "react";
// import PostForm from "../../components/PostForm";
import NavBar from "../../components/NavBar";
// import Post from "../../components/Post";
import Quote from "../../components/Quote";


const ProfilePage = () => {
    const [user, setUser] = useState("");
    const [images, setImages] = useState();

return(
    <div>
        <Quote />
        <div>
            <h1>First NAme</h1>
        </div>

        {/* <PostForm/> */}
    </div>
)
}

        
        export default ProfilePage;
  
    
