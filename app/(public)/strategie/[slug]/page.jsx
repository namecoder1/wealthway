import { client } from "@/sanity/lib/client";
import { STRATEGY_QUERY } from "@/sanity/lib/queries";
import formatDate from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import TextBlock from "@/components/ui/TextBlock";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuthorBlock from "@/components/ui/author";

const StrategyPage = async ({ params }) => {
	const {slug} = params
	const strategy = await client.fetch(STRATEGY_QUERY, {slug})
	if (!strategy) {
		return (
			<p>strategy not found</p>
		)
	}

	const imageUrl = urlFor(strategy.mainImage?.asset).width(500).height(300).dpr(2).quality(80).url()
  const blurUrl = urlFor(strategy.mainImage?.asset).width(20).quality(20).url() // Low-quality blurred image
	
	return (
		<div className="my-20 mx-5">
			<hgroup className="gap-y-1.5 flex flex-col items-start justify-start w-full sm:flex-row sm:items-center sm:justify-between mb-3">
				<h1 className="text-3xl font-semibold">{strategy?.title}</h1>
				<h2 className="px-2 py-1 bg-gray-800 rounded-2xl w-fit text-white">{strategy.category}</h2>
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
			<AuthorBlock date={strategy._createdAt} />
			<div className="mt-4">
				<TextBlock value={strategy.body} />
			</div>
			<Button asChild className="w-full my-4 sm:max-w-fit"><Link href='/strategie'>Torna indietro</Link></Button>
		</div>
	)
};

export default StrategyPage;