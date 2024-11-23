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
		category,
    mainImage,
    'imageAlt': mainImage.alt,
    publishedAt,
    seoDescription
	}
`)

export const POSTS_BY_CATEGORY = defineQuery(`
	*[_type == 'post' && category == $category] | order(_createdAt desc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    'slug': slug.current,
    description,
		category,
    mainImage,
    'imageAlt': mainImage.alt,
    publishedAt,
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
		category,
    mainImage,
    'imageAlt': mainImage.alt,
    publishedAt,
    seoDescription
	}
`)


export const POST_QUERY = defineQuery(`
	*[_type == 'post' && slug.current == $slug] [0]	{
		title,
		'slug': slug.current,
		description,
		mainImage,
		category,
		'imageAlt': mainImage.alt,
		publishedAt,
		body,
		seoDescription
	}
`)

export const STRATEGIES_QUERY = defineQuery(`
	*[_type == 'strategy'] | order(_createdAt desc) {
        _id,
		title,
		'slug': slug.current,
		description,
		category,
		mainImage,
		'imageAlt': mainImage.alt,
		_createdAt,
	}
`)

export const LAST_STRATEGIES_QUERY = defineQuery(`
	*[_type == 'strategy'] | order(_createdAt desc) [0..3] {
		_id,
		title,
		'slug': slug.current,
		description,
		category,
		mainImage,
		'imageAlt': mainImage.alt,
		_createdAt,
	}
`)

export const STRATEGY_QUERY = defineQuery(`
	*[_type == 'strategy' && slug.current == $slug] [0] {
		title,
		'slug': slug.current,
		description,
		category,
		mainImage,
		'imageAlt': mainImage.alt,
		_createdAt,
		body,
	}
`)