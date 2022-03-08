import {useState} from "react";
import * as postService from "../../api/post.service";

const CommentEdit = (props) =>{

    const [updatedComment, setUpdatedComment] = useState("")

    const updateComment = async() => {
        let updatedPost = {body: updatedComment}
        await postService.updateComment(`${props.postId}`, updatedPost, `${props.commentId}`).then((res)=> {
            console.log(res.data)
        })
    }

    return (
    <>
    <p>Edit Comment</p>
    <form>
        <input 
        onChange={(e)=> setUpdatedComment(e.target.value)}
        name="body"
        value={updatedComment}
        type="text"
        placeholder={props.body}
        />
        <button onClick={updateComment}>Edit Comment</button>
    </form>
    </>

    )

}

export default CommentEdit;