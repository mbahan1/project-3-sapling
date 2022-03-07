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
    const sign = props.profile.zodiacSign;
    const signUrl = `"client/src/assets/"+"${sign}"+".webp"`

    return(
        <div className="profilePage">
            <div className="profile-section">
                <div className="profile">
                    <img alt={props.profile.zodiacSign} style={{width:"150px", height: "auto", borderRadius:"40px"}} 
                        src={`/signs/${props.profile.zodiacSign}.webp`}/>
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
                {/* <div className="editProfile-box">
                    <button>Edit Profile</button>
                </div> */}
                {/* <div>

                    <h5>UserName</h5>
                </div> */}
        </div>
          
                    
            <div className="post-section">
                <PostForm user={props.profile._id}/>
                <div>
                    <h2>List of my Manifestations</h2>
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

        
    
  
    
