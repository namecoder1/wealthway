import {defineField, defineType} from 'sanity';
import {DocumentTextIcon} from '@sanity/icons';

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      description: 'Massimo 3.5 righe',
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
    defineField({
      name: 'publishedAt',
      title: 'Data di Pubblicazione',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Testo',
      type: 'blockContent',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Descrizione SEO',
      type: 'text',
      description: 'La descrizione SEO del post',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection;
      return {
        ...selection,
        subtitle: author ? `by ${author}` : undefined,
      };
    },
  },
});