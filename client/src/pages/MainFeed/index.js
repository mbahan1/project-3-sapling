import { useState, useEffect } from "react";
import Post from "../../components/Post";
import Kudos from "../../components/Kudos"
//import Welcome from "../../components/Welcome";
//import NavBar from "../../components/NavBar";
//import ProfilePage from "../../pages/ProfilePage";
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
			{/* <NavBar /> */}
			<Routes>
				<Route path="/" 
					element={
					<>
						{/* <PostForm refreshPosts={() =>fetchPosts()}/> */}
						{posts.map((post) => {
							return(
								<Post 
									title={post.title} 
									user={post.user} 
									body={post.body} 
									kudos={post.kudos} 
									comments={post.comments}
									key={post._id}
								/>	
							);
						})};
						<Kudos />
					</>
					}
				></Route>
                {/* <Route path="profile" element={<ProfilePage />}> </Route> */}
			</Routes>
		</div>
	);
}

export default MainFeed;