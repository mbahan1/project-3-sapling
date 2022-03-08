import React from "react";
import "./style.css";


const Comment = (props) => {



    return (

        <>
            <p>{props.body}</p>
            <button className="editPost-btns" >Edit Comment</button>
            <button className="deletePost-btns" >Delete Comment</button>

        </>


    )
}

export default Comment