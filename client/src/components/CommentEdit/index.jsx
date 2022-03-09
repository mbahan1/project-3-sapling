import {useState} from "react";
import * as commentService from "../../api/comment.service";

// Edit Comment Form
const CommentEdit = (props) =>{

    const [updatedComment, setUpdatedComment] = useState("")

    const updateComment = async() => {
        let updatedPost = {body: updatedComment}
        await commentService.updateComment(`${props.postId}`, updatedPost, `${props.commentId}`).then((res)=> {
            console.log(res.data)
        })
    }

    return (
    <div>
        <p>Edit Comment</p>
        <form>
            <input 
            onChange={(e)=> setUpdatedComment(e.target.value)}
            name="body"
            value={updatedComment}
            type="text"
            placeholder={props.body}
            />
            <button 
                className="edit-comment-btn"
                onClick={updateComment}>Edit Comment</button>
        </form>
    </div>
    )
}

export default CommentEdit;