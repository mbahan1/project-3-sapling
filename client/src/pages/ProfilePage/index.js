import React from "react";
import PostForm from "../../components/PostForm";
// import NavBar from "../../components/NavBar";
// import Post from "../../components/Post";
import Quote from "../../components/Quote";


export default function ProfilePage () {

    return(
        <div className="container">
            <div>
                <div>
                    <img style={{width:"100px", height:"100px", borderRadius:"40px"}} src="https://media.istockphoto.com/vectors/zodiac-signs-set-isolated-on-black-background-vector-id1072359684?k=20&m=1072359684&s=612x612&w=0&h=VzwNG9jsi2ovv5b7xKALnV-7FOjCnOKaf27qVl8GUrg="/>
                </div>
                <div>
                    <h5>UserName</h5></div>
                    <div>
                        <h4>daily Quote</h4>
                    </div>
                    <div>
                        <h4>List of my Menefistations</h4>
                    </div> 
                    <div>
                        <Quote />
                    </div>
                    <div>
                        <PostForm />
                    </div>      
            </div>


        </div>

    )
}

        
    
  
    
