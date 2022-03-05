// Post Component
import React from "react";
import Kudos from "../Kudos";
import { string } from "prop-types";
import { array } from "prop-types";
import { number } from "prop-types";

function Post(props) {
	return (
		<>
			<h1>Title: {props.title}</h1>
			<p>By: {props.user}</p>
			<div>
				<p>{props.body}</p>
                <p>{props.kudos}</p>
                <p>{props.comments.map(comment => {
					<p>{props.comments.map(comment => (
                        <p>{comment.body}</p>
                ))}</p>
			</div>
			{/* <div>
				<Kudos />
			</div> */}
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
    kudos: number.isRequired,
};

export default Post;