import { defineType, defineField } from "sanity";

export const strategy = defineType({
	name: 'strategy', 
	title: 'Startegia',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Titolo',
			type: 'string'
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title'
			}
		}),
		defineField({
			name: 'description',
			title: 'Descrizione',
			type: 'text'
		}),
		defineField({
			name: 'category',
			title: 'Categoria',
			type: 'string',
			options: {
				list: [
					{ title: 'PAC', value: 'PAC' },
					{ title: 'Crypto', value: 'Crypto' },
					{ title: 'ETF', value: 'ETF' },
					{ title: 'Bonds', value: 'Bonds' },
					{ title: 'Stocks', value: 'Stocks' },
					{ title: 'Theory', value: 'Theory' },
				]
			}
		}),
		defineField({
			name: 'body',
			title: 'Testo',
			type: 'blockContent'
		}),
		defineField({
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Testo Alternativo',
        }),
      ],
    }),
	]
})