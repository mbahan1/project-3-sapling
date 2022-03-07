import PostForm from "../../components/PostForm";
import Post from "../../components/Post";
import Quote from "../../components/Quote";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

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
                    <p>{props.profile.pronouns}</p>
                    <p>{props.profile.age}</p>
                    <p>{props.profile.hobbies}</p>
                    <p>{props.profile.bio}</p>
                    <p>{props.profile.zodiacSign}</p>
                </div>
                <div className="editProfile-box">
                    <Link to="/profile/edit" style={{backgroundColor: "white"}}>Edit Profile</Link>
                </div>
                
                <div className="quote-section">
                    <Quote />
                </div>
        </div>
          
                    
            <div className="post-section">
                <PostForm user={props.profile._id}/>
                <div className="postfeed-profilePage">
                    <h3>List of my Manifestations</h3>
                    {props.profile.posts?.map((post) => {
                        return(
                            <div>
                            <Post 
                                title={post.title}
                                body={post.body}
                                id={post._id}
                                user={post.user}
                                // comments={post.comments}
                                kudo={post.kudos}
                                key={post._id}
                            />
                            </div>
                        )
                    }).reverse()}
                </div>
            </div>
        </div>

    )
}

        
    
  
    
