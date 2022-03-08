import { useState } from "react";
import { func } from "prop-types";
import * as postService from "../../api/post.service";
import "./style.css";

const PostForm = (props) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async () => {
        let newPost = { title, body, user:`${props.user}`}
        let res = await postService.create(newPost).then(() => {
            setTitle("");
            setBody("");
            console.log(newPost);
            document.location = "/posts"
        });
        
        //201 = create error
        if(!res ===201) {
            alert(`ERROR! It was code: ${res.status}`);
        }
    };

    return (
        <div >
            <div className="post-container">
                <form className="postForm">
                    <label>Post Title</label>
                        <input 
                            className="postForm-input"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            type="text"
                            name="title"
                            placeholder=""
                        />

                    <label>What do you want to manifest today?</label>
                        <textarea 
                            className="postForm-textarea"
                            onChange={(e) => setBody(e.target.value)}
                            value={body}
                            type="text" name= "body" placeholder="" />                
                </form>
                <div >
                    <button className="post-Btn" onClick={handleSubmit}> Send it out to the world! </button>
                </div>
            </div>
        </div>
    );
};

PostForm.propTypes = {
    refreshPosts: func,
}


export default PostForm;