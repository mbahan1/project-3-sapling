import { useState, useEffect} from "react";
import Post from "../../components/Post";
//import Welcome from "../../components/Welcome";
//import NavBar from "../../components/NavBar";
//import ProfilePage from "../../pages/ProfilePage";
import Kudos from "../../components/Kudos";
import {Routes, Route} from 'react-router-dom';
import * as postService from "../../api/post.service";


const MainFeed = () => {

	//use state and useeffect for our posts
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		await postService.getAll().then((res) => {
			setPosts(res.data.data.reverse())
		});
	};

	useEffect(() => {
		fetchPosts();
	//empty dependency array means it only runs onces and not everytime
	},[]);

	return (
		<div>
			
						{/* <PostForm refreshPosts={() =>fetchPosts()}/> */}
						{posts.map((post) => {
							return(
								<Post 
									title={post.title} 
									id={post._id}
									user={post.user} 
									body={post.body} 
									// kudos={post.kudos}
									comments={post.comments}
									key={post._id}
								/>	
							);
						})};
				
					
		</div>
	);
}

export default MainFeed;