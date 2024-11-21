import React from 'react'
import formatDate from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const Article = ({ post }) => {
	const { title, description, slug, _id, mainImage, publishedAt } = post 
	return (
		<div key={_id} className='min-w-sm flex flex-col'>
		<div className='relative mb-2'>
			<Image src={mainImage?.asset?._ref ? urlFor(mainImage?.asset).quality(100).url() : "/fallback-image.jpg"} width={100} height={50} alt='alt' className='w-full aspect-video rounded-2xl' />
			<time className='bg-gray-100 py-1 px-2 rounded-full w-fit text-sm absolute top-2 right-2' dateTime={publishedAt}>{formatDate(publishedAt)}</time>
		</div>
		<h1 className='text-2xl font-semibold mb-2'>{title}</h1>
		<p className='max-w-fit line-clamp-5'>{description}</p>
		<Button variant='outline' className='mt-5' asChild><Link href={`/articoli/${slug}`}>Leggi di più</Link></Button>
	</div>
	)
}

export default Article