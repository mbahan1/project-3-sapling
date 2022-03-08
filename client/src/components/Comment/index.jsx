import {useEffect, useState} from "react";
import * as userService from "../../api/user.service";
import * as postService from "../../api/post.service";
import CommentEdit from "../CommentEdit";


const Comment = (props) => {

    const [author, setAuthor] = useState("");
    const [editComment, setEditComment] = useState(false)

    const getAuthor = async () => {
        await userService.getOne(`${props.user}`).then((res) => {
            setAuthor(res.data.data.firstName)
        }) 
    }

    useEffect(()=>{
        getAuthor()
    }, [])

    const deleteComment = async() => {
        await postService.destroyComment(`${props.postId}`, `${props.commentId}`).then(()=> {
            window.location = "/posts"
        })
    }

    const editCommentClcik = () => {
        setEditComment((current)=> !current)
    }

    const cancelClick = () => {
        setEditComment(false)
    }

    if(editComment) {
        return(
            <>
            <CommentEdit postId={props.postId} commentId={props.commentId} body={props.body}/>
            <button onClick={cancelClick}>Cancel</button>
            </>
            
            
        )
    }

    return (

        <>

            <p>{author} : {props.body}</p>
            {(props.user === props.currentUser)? (
                <div>
            <button onClick={deleteComment}>Delete</button>
            <button onClick={editCommentClcik}>Edit</button>
                </div>
            ):null}
            
        </>


    )
}

export default Comment