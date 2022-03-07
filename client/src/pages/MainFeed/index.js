import { useState, useEffect} from "react";
import Post from "../../components/Post";
import * as postService from "../../api/post.service";

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
		<div>

			{posts.map((post) => {
				return(
					<Post 
						title={post.title} 
						id={post._id}
						// user={post.user} 
						body={post.body} 
						kudos={post.kudos}
						comments={post.comments}
						key={post._id}
						user={props.profile._id}
						refreshPosts={() => fetchPosts()}
					/>
				);
			})};

		</div>
	);
}

export default MainFeed;