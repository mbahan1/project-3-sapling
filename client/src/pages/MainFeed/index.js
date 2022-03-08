import { useState, useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";
import Post from "../../components/Post";
import PostEdit from "../../components/PostEdit";
import * as postService from "../../api/post.service";
import "./styles.css"

const MainFeed = (props) => {

	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		await postService.getAll().then((res) => {
			setPosts(res.data.data.reverse())
		});
	};

	useEffect(() => {
		fetchPosts();
	},[]);

	return (

 
		<div className="mainfeed-page">

			{posts.map((post) => {
				return(
					<>
					<Post 
						title={post.title} 
						id={post._id}
						// user={post.user} 
						body={post.body} 
						kudos={post.kudos}
						comments={post.comments}
						key={post._id}
						currentUser={props.profile._id}
						refreshPosts={() => fetchPosts()}
					/>

					</>
				);
			})};

		</div>
	);
}

export default MainFeed;