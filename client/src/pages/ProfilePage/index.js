import PostForm from "../../components/PostForm";
import Post from "../../components/Post";
import Quote from "../../components/Quote";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import "./styles.css";
// import ToggleButton from "../../components/ToggleButton";


export default function ProfilePage (props) {
    
    const refreshPosts= () => {

    }
    const sign = props.profile.zodiacSign;
    const signUrl = `"client/src/assets/"+"${sign}"+".webp"`

    return(
        <div className="profilePage">
            <div className="profile-section">
                <div className="profile-image">
                    <img className="profile-img" alt={props.profile.zodiacSign}  
                        src={`/signs/${props.profile.zodiacSign}.webp`}/>
                    <h1>{props.profile.firstName} {props.profile.lastName}</h1>
                    <p>{props.profile.email}</p>
                    <p>{props.profile.zodiacSign}</p>
                </div>
                <div className="quote-section">
                    <Quote />
                </div>
                {/* <div className="editProfile-box">
                    <button>Edit Profile</button>
                </div> */}
                  
            <div className="posts-section">
                <div>
                  <PostForm user={props.profile._id}/>
                </div>
                <div className="manifest-title">
                  <h2>List of my Manifestations</h2>
                </div>
                <div className="manifest-lst">
                    <div>
                      {props.profile.posts?.map((post) => {
                        return(
                            <div>
                            <Post 
                                title={post.title}
                                body={post.body}
                                id={post._id}
                                user={post.user}
                                comments={post.comments}
                                kudos={post.kudos}
                                key={post._id}
                                currentUser={props.profile._id}
                            />
                            </div>
                        )
                    }).reverse()}

                    </div>

                </div>
            </div>
        </div>

    )
}

        
    
  
    
