import PostForm from "../../components/PostForm";
import Post from "../../components/Post";
import Quote from "../../components/Quote";
import {useEffect, useState} from "react";
import * as authService from "../../api/auth.service";
import "./styles.css";


export default function ProfilePage () {
    
    const [profile, setProfile] = useState("")

    const fetchProfile = async () => {
        await authService.getProfile().then(res => {
            console.log(res.data.data);
            setProfile(res.data.data)
        })
    }

    useEffect(()=> {
        fetchProfile();
    }, [])

    return(
        <div className="profilePage">
            <div className="profile-section">
                <div className="profile">
                    <img style={{width:"100px", height:"100px", borderRadius:"40px"}} src="https://media.istockphoto.com/vectors/zodiac-signs-set-isolated-on-black-background-vector-id1072359684?k=20&m=1072359684&s=612x612&w=0&h=VzwNG9jsi2ovv5b7xKALnV-7FOjCnOKaf27qVl8GUrg="/>
                    <h1>{profile.firstName} {profile.lastName}</h1>
                    <p>{profile.email}</p>
                    <p>{profile.zodiacSign}</p>
                </div>
                
                <div className="quote-section">
                    <Quote />
                </div>
            </div>
                    
            <div className="post-section">
                <PostForm user={profile._id}/>
                <h3>List of my Menefistations</h3>
                {profile.posts?.map((post) => {
                    return(
                        <Post 
                            title={post.title}
                            body={post.body}
                            comments={post.comments}
                            kudo = {post.kudos}
                            key={post._id}
                        />
                    )
                })}
            </div>
    
    </div>




    )
}

        
    
  
    
