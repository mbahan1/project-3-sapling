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
        <NavBar />
        <Quote />

        {/* <PostForm/> */}
    </div>
)
}



        
        export default ProfilePage;
  
    
