import {useState} from "react";
import {Link } from "react-router-dom";
import * as postService from "../../api/post.service";
import "./styles.css";



export default function PostEdit(props) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let updatedPost = {title, body};
        let res = await postService.update(`${props.post._id}`,updatedPost).then(() => {
            console.log(updatedPost);
            document.location = "/"
        })

        console.log(res);
        if (!res === 201) {
            alert(`ERROR code: ${res.status}`)
        }
    }
    return(
        <div className="postEditComponent">
            <div> 
                <h3>Update Your Post, {props.post.title} </h3>
            </div>
            <form className="postEdit">
                <label>Post Title</label>
                <input 
                    className="postEdit-input"
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                    type="text"
                    name="title"
                    placeholder="input title value target" 
                />

                <label>What do you want to manifest today?</label>
                <input 
                    className="postEdit-input"
                    onChange={(e)=> setBody(e.target.value)}
                    value={body}
                    type="text"
                    name="body"
                    placeholder="input body value target, homie"
                />

                <button 
                    onClick={handleSubmit}
                > Update Post
                </button>
            </form>

        </div>
    )
}