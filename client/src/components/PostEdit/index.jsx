import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import * as postService from "../../api/post.service";
// import "./styles.css";


export default function PostEdit(props) {

    const {id} =useParams();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedBody, setUpdatedBody] = useState("");

    const fetchPost = async () => {
        let res = await postService.getOne(id);
        setTitle(res.data.data.title);
        setBody(res.data.data.body)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let updatedPost = { title: updatedTitle, body: updatedBody};
        await postService.update(id, updatedPost).then(() => {
            console.log(updatedPost);
            document.location = "/";
        })
    }

    const deleteSubmit = async () => {
        await postService.destory(id).then(()=> {
            document.location="/posts";
        })
    }

    useEffect(()=> {
        fetchPost()
    }, [])

    return(
        <div className="postEditComponent">
            <div> 
                <h3>Update Your Post </h3>
            </div>
            <form className="postEdit">
                <label>Post Title </label>
                <input 
                    className="postEdit-input"
                    onChange={(e)=> setUpdatedTitle(e.target.value)}
                    value={updatedTitle}
                    type="text"
                    name="title"
                    placeholder={title}
                />

                <label>What do you want to manifest today?</label>
                <input 
                    className="postEdit-input"
                    onChange={(e)=> setUpdatedBody(e.target.value)}
                    value={updatedBody}
                    type="text"
                    name="body"
                    placeholder={body}
                />

                <button 
                    onClick={handleSubmit}
                > Update Post
                </button>
            </form>

            <button 
                    onClick={deleteSubmit}
                > Delete Post
            </button>

        </div>
    )
}