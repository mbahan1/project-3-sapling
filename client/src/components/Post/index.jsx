// Post Component
import Kudos from "../Kudos";
import { string } from "prop-types";
import { array } from "prop-types";
import { number } from "prop-types";
import {useEffect, useState} from "react";
import * as postService from "../../api/post.service";

function Post(props) {

	const [firstName, setFirstName] = useState("");

	const getAuthor = async () => {
		await postService.getOne(`${props.id}`).then((res) => {
			setFirstName(res.data.data.user.firstName)
		})
	}

	useEffect(()=> {
		getAuthor()
	}, [])

	return (
		<>
			<h1>Title: {props.title}</h1>
			<p>By: {firstName}</p>
			<div>
				<p>{props.body}</p>
                <p>{props.kudos}</p>
				{props.comments.map(comment => (
					<p key={comment._id}>{comment.body}</p>
                ))}
			</div>
			<div>
				<Kudos />
			</div>
		</>
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