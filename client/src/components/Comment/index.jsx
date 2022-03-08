const Comment = (props) => {



    return (

        <>
        <p>{props.body}</p>
        <button>Edit Comment</button>
        <button>Delete Comment</button>
        </>

    )
}

export default Comment