import { useState } from "react";
import { func } from "prop-types";
import * as commentService from "../../api/comment.service";
import "./style.css";

// Main comment form
const CommentForm = (props) => {

    const [body, setBody] = useState("");

    const handleSubmit = async () => {
        let newComment = { body, user:`${props.currentUser}`}
        await commentService.createComment(`${props.post}`, newComment).then(() => {
            setBody("");
            window.location = "/posts"
        });
    };

    return (
        <div className="comment-container">
            <form className="commentForm">
                    <input 
                        className="commentForm-input"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                        type="text"
                        name="body"
                        placeholder="Leave a comment"
                    />
            </form>
            <button className="comment-btn" onClick={handleSubmit}>Post</button>
        </div>
    );
};

export default CommentForm;