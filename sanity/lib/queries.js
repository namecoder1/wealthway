import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
	*[_type == 'post'] | order(_createdAt desc)	{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    'slug': slug.current,
    description,
    mainImage,
    'imageAlt': mainImage.alt,
    publishedAt,
    body,
    seoDescription
	}
`)

export const LAST_POSTS_QUERY = defineQuery(`
	*[_type == 'post'] | order(_createdAt desc) [0..3] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    'slug': slug.current,
    description,
    mainImage,
    'imageAlt': mainImage.alt,
    publishedAt,
    body,
    seoDescription
	}
`)


export const POST_QUERY = defineQuery(`
	*[_type == 'post' && slug.current == $slug] [0]	{
		title,
		'slug': slug.current,
		description,
		mainImage,
		'imageAlt': mainImage.alt,
		publishedAt,
		body,
		seoDescription
	}
`)