import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import formatDate from "@/lib/utils";
import { Button } from "./ui/button";

const StrategyArticle = ({ strategy }) => {
	const {
		title,
		description,
		mainImage,
		_createdAt,
		_id,
		category,
		slug
	} = strategy

  const imageUrl = urlFor(mainImage?.asset).width(500).height(300).dpr(2).quality(80).url()
  const blurUrl = urlFor(mainImage?.asset).width(20).quality(20).url() // Low-quality blurred image

	return (
		<div key={_id} className='min-w-sm flex flex-col'>
			<div className='relative mb-2'>
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
				<div className='bg-gray-100 py-1 px-2 rounded-full w-fit text-sm absolute top-2 right-2'>{category}</div>
			</div>
			<h1 className="text-2xl font-semibold mb-2">{title}</h1>
			<p className='max-w-fit line-clamp-3'>{description}</p>
			<Button variant='outline' className='mt-5' asChild><Link href={`/strategie/${slug}`}>Leggi di più</Link></Button>
		</div>
	);
};

export default StrategyArticle;