// Post Component
import Kudos from "../Kudos";
import { string } from "prop-types";
import { array } from "prop-types";
import { number } from "prop-types";
import {useEffect, useState} from "react";
import * as postService from "../../api/post.service";
import CommentForm from "../CommentForm";
import "./style.css";

function Post(props) {

	const [author, setAuthor] = useState("");
	const [zodiacSign, setZodiacSign] = useState("");

	const getAuthor = async () => {
		await postService.getOne(`${props.id}`).then((res) => {
			setAuthor(res.data.data.user.firstName)
			setZodiacSign(res.data.data.user.zodiacSign)
		})
	}

	useEffect(()=> {
		getAuthor()
	}, [])

	return (
		<div className="post-feed">
			{(author&& (props.currentUser !== props.user ))? (
			<div className="post-author">
			<img alt={zodiacSign} style={{width:"75px", height: "auto", borderRadius:"30px"}} 
                        src={`/signs/${zodiacSign}.webp`}/>
			<h2>{author}</h2>
			</div>
			): null}
			<div className="post-content">
				<h3 className="title">{props.title}</h3>
				<p>{props.body}</p>	
				<div>
					<Kudos kudos={props.kudos}/>
				</div>		
				{/* <p>{props.kudos}</p> */}
				<hr />
				<div className="comments">
					<h4 className="title">Comments</h4>
					{props.comments? (props.comments.map(comment => (
						<>
						<p key={comment._id}>{comment.body}</p>
						</>
					))):null}
				</div>
					<CommentForm 
					className="commentForm"
					currentUser={props.currentUser} 
					post={props.id} 
					refreshPosts={() => {props.refreshPosts()} }
				/>
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