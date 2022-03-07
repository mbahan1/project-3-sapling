import PostForm from "../../components/PostForm";
import Post from "../../components/Post";
import Quote from "../../components/Quote";
import ProfileEditForm from "../../components/ProfileEditForm";
import {useEffect, useState} from "react";
import * as authService from "../../api/auth.service";
import "./styles.css";


export default function ProfilePage (props) {
    
    const refreshPosts= () => {

    }


    return(
        <div className="profilePage">
            <div className="profile-section">
                <div className="profile">
                    <img style={{width:"100px", height:"100px", borderRadius:"40px"}} src="https://media.istockphoto.com/vectors/zodiac-signs-set-isolated-on-black-background-vector-id1072359684?k=20&m=1072359684&s=612x612&w=0&h=VzwNG9jsi2ovv5b7xKALnV-7FOjCnOKaf27qVl8GUrg="/>
                    <h1>{props.profile.firstName} {props.profile.lastName}</h1>
                    <p>{props.profile.email}</p>
                    <p>{props.profile.zodiacSign}</p>
                </div>
                <div className="editProfile-box">
                    <button>Edit Profile</button>
                </div>
                
                <div className="quote-section">
                    <Quote />
                </div>
                <div>
                    <h5>UserName</h5>
                </div>
        </div>
          
                    
            <div className="post-section">
                <PostForm user={props.profile._id}/>
                <div>
                    <h2>List of my Menefistations</h2>
                    {props.profile.posts?.map((post) => {
                        return(
                            <Post 
                                title={post.title}
                                body={post.body}
                                id={post._id}
                                user={post.user}
                                comments={post.comments}
                                kudo={post.kudos}
                                key={post._id}
                            />
                        )
                    }).reverse()}
                </div>
            </div>
        </div>

    )
}

        
    
  
    
