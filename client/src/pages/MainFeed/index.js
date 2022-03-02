import React from "react";
//import Post from "../../components/Post";
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
									author={post.author} 
									body={post.body} 
									key={post._id}
								/>	
							);
						})};
					</>
					}
				></Route>
                {/* <Route path="profile" element={<ProfilePage />}> </Route> */}
			</Routes>
		</div>
	);
}

export default MainFeed;