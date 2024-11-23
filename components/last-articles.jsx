import { client } from "@/sanity/lib/client";
import { LAST_POSTS_QUERY } from "@/sanity/lib/queries";
import Article from "./article";

const LastArticles = async () => {
	const posts = await client.fetch(LAST_POSTS_QUERY)
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14'>
			{posts.map((post) => (
				<Article key={post._id} post={post} />
			))}
		</div>
	);
};

export default LastArticles;