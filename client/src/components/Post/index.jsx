// Post Component
import Kudos from "../Kudos";
import { string } from "prop-types";
import { array } from "prop-types";
import { number } from "prop-types";
import {useEffect, useState} from "react";
import * as postService from "../../api/post.service";
import CommentForm from "../CommentForm";
import "./styles.css"

function Post(props) {

	const [author, setAuthor] = useState("");

	const getAuthor = async () => {
		await postService.getOne(`${props.id}`).then((res) => {
			setAuthor(res.data.data.user.firstName)
		})
	}

	useEffect(()=> {
		getAuthor()
	}, [])

	return (
		<div className="post-feed">
		{(author&&props.comments)? <h2>{author}</h2>: null}
			<div className="post-content">
				<h3 className="title">Title: {props.title}</h3>
				<p>{props.body}</p>	
				<div>
					<Kudos kudos={props.kudos}/>
				</div>		

				{/* <p>{props.kudos}</p> */}
				<hr />
				<div className="comments">
					{props.comments? <h3 className="title">Comments</h3>: null }
					{props.comments? (props.comments.map(comment => (
						<>
						<p key={comment._id}>{comment.body}</p>
						</>
					
                ))):null}
				</div>
				{props.comments? (
					<CommentForm 
					className="commentForm"
					user={props.user} 
					post={props.id} 
					refreshPosts={() => {props.refreshPosts()} }
				/>) : null 
				}
				
			</div>
		</div>
	);
}

Post.propTypes = {
	title: string.isRequired,
    // not sure how to reference user here
	user: string.isRequired,
    // user: { type: Schema.Types.ObjectId, ref: "User" },
	body: string.isRequired,
    comments: array,
    kudos: number
};

export default Post;