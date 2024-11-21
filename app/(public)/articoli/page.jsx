import Article from '@/components/article';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';

const ArticlesPage = async () => {
  const posts = await client.fetch(POSTS_QUERY); // Tipo esplicito per posts
  if (posts) {
    return (
      <section className='mx-5 my-20'>
        <h1 className='text-2xl font-semibold mb-4'>Tutti gli articoli</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {posts.map((post) => (
            <Article key={post._id} post={post} />
          ))}
        </div>
      </section>
    );
  }
  return (
		<div>Nessun post</div>
	);
};

export default ArticlesPage;