import PostForm from "../../components/PostForm";
import Post from "../../components/Post";
import Quote from "../../components/Quote";
import {Link} from "react-router-dom";

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
                <img alt={props.profile.zodiacSign} style={{width:"150px", height: "auto", borderRadius:"40px"}} 
                        src={`/signs/${props.profile.zodiacSign}.webp`}/>
                <h1>{props.profile.firstName} {props.profile.lastName}</h1>
                <div className="profile">
                    <span>{props.profile.pronouns} </span>
                    <span>{props.profile.age}</span>
                    <p>{props.profile.zodiacSign}</p>
                    <p>{props.profile.hobbies}</p>
                    <p>{props.profile.bio}</p>
                </div>
                <div>
                    <Link to="/profile/edit"><button style={{"margin": "10px auto"}}>Edit Profile</button></Link>
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
                                    comments={post.comments}
                                    kudos={post.kudos}
                                    key={post._id}
                                    currentUser={props.profile._id}
                                />
                                <div className="editPost-link">
                                    <Link to={`/posts/${post._id}`}><button>Edit / Delete</button></Link>
                                </div>
                            </div>
                        )
                    }).reverse()}

                    </div>

                </div>
            </div>
        </div>
    )
}