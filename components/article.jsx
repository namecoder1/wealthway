import React from 'react'
import formatDate from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Separator } from './ui/separator'

const Article = ({ post }) => {
	const { title, description, slug, _id, mainImage, publishedAt, category } = post 

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
			<time className='bg-gray-100 py-1 px-2 rounded-full w-fit text-sm absolute top-2 right-2' dateTime={publishedAt}>{formatDate(publishedAt)}</time>
		</div>
		<h1 className='text-2xl font-semibold mb-2'>{title}</h1>
		<Link className='px-2 py-1 border w-fit mb-3 rounded-xl' href={`/articoli/categorie/${category}`}>{category}</Link>
		<p className='max-w-fit line-clamp-5'>{description}</p>
		<Button variant='outline' className='mt-5' asChild><Link href={`/articoli/${slug}`}>Leggi di più</Link></Button>
	</div>
	)
}

export default Article