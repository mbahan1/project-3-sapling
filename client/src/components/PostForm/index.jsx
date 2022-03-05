import { useState } from "react";
import { func } from "prop-types";
import * as postService from "../../api/post.service";

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

     const handleSubmit = async () => {
        let newPost = { title, body }
        let res = await postService.create(newPost).then(() => {
            setTitle("");
            setBody("");console.log(newPost);
        });
        
        console.log(res)
        //201 = create error
        if(!res ===201) {
            alert(`ERROR! It was code: ${res.status}`);
        }
    };

    return (
        <div className="container">
            <form>
                <label>
                    Post Title:
                    <input
                        className = "text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        name="title"
                        placeholder="input title value target"
                    />
                </label>
                <label>
                    What do you want to manifest today?
                    <textarea 
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                        type="text" name= "body" placeholder="input body value target, homie" />                
                </label>
            </form>
            <button onClick={handleSubmit}> Send it out to the world! </button>
        </div>
    );
};

PostForm.propTypes = {
    refreshPosts: func,
}


export default PostForm;