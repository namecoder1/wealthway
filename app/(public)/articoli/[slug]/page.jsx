import AuthorBlock from "@/components/ui/author"
import { Button } from "@/components/ui/button"
import TextBlock from "@/components/ui/TextBlock"
import formatDate from "@/lib/utils"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { POST_QUERY } from "@/sanity/lib/queries"
import Image from "next/image"
import Link from "next/link"

const ArticlesPage = async ({ params }) => {
	const { slug } = params
	const post = await client.fetch(POST_QUERY, { slug })
	if (!post) {
		return (
			<p>post not found</p>
		)
	}

	const imageUrl = urlFor(post.mainImage?.asset).width(500).height(300).dpr(2).quality(80).url()
  const blurUrl = urlFor(post.mainImage?.asset).width(20).quality(20).url() // Low-quality blurred image
	
	return (
		<div className="my-20 mx-5">
			<hgroup className="gap-y-1.5 flex flex-col items-start justify-start w-full sm:flex-row sm:items-center sm:justify-between mb-3">
				<h1 className="text-3xl font-semibold">{post?.title}</h1>
				<Link href={`/articoli/categorie/${post?.category}`} className="px-2 py-1 bg-gray-800 rounded-2xl w-fit text-white">{post?.category}</Link>
			</hgroup>
			<Image
				src={imageUrl}
				alt="Article image"
				width={500} 
				height={300} 
				sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
				className='w-full aspect-video rounded-2xl'
				placeholder="blur"
				blurDataURL={blurUrl}
			/>
			<AuthorBlock date={post.publishedAt} />
			<div className="mt-4">
				<TextBlock value={post.body} />
			</div>
			<Button asChild className="w-full my-4 sm:max-w-fit"><Link href='/articoli'>Torna indietro</Link></Button>
		</div>
	)
}

export default ArticlesPage