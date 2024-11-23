import Article from "@/components/article";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { POSTS_BY_CATEGORY } from "@/sanity/lib/queries";
import Link from "next/link";

const ArticlesCategoriesPage = async ({ params }) => {
	const {category} = params
	const posts = await client.fetch(POSTS_BY_CATEGORY, { category })
	return (
		<section className='mx-5 my-20 min-h-[80vh]'>
			<h1 className='text-2xl font-semibold mb-4'>Articoli della categoria: <span className="underline underline-offset-2">{category}</span></h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
				{
					posts.map((post) => (
						<Article post={post} key={post._id} />
					))
				}
			</div>
			<Button asChild className="w-full my-8 sm:max-w-fit"><Link href='/articoli'>Torna indietro</Link></Button>
		</section>
	);
};

export default ArticlesCategoriesPage;