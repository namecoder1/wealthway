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
	
	return (
		<div className="my-20 mx-5">
			<hgroup className="gap-y-1.5 flex flex-col items-start justify-start w-full sm:flex-row sm:items-center sm:justify-between mb-3">
				<h1 className="text-3xl font-semibold">{post?.title}</h1>
				<h2 className="px-2 py-1 bg-gray-800 rounded-2xl w-fit text-white">{formatDate(post.publishedAt)}</h2>
			</hgroup>
			<Image src={post.mainImage?.asset?._ref ? urlFor(post.mainImage.asset).quality(100).url() : "/fallback-image.jpg"} width={100} height={50} alt='alt' className='w-full aspect-video rounded-2xl' />
			<div className="mt-4">
				<TextBlock value={post.body} />
			</div>
			<Button asChild className="w-full my-4 sm:max-w-fit"><Link href='/articoli'>Torna indietro</Link></Button>
		</div>
	)
}

export default ArticlesPage