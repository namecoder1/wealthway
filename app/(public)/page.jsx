import Image from 'next/image'
import { LAST_POSTS_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import formatDate from '@/lib/utils'
import CryptoPrice from '@/components/crypto-price'
import { urlFor } from '@/sanity/lib/image'
import { Button } from '@/components/ui/button'
import hero from '@/assets/media/hero.jpg'
import Article from '@/components/article'

export default async function Home() {
  const posts = await client.fetch(LAST_POSTS_QUERY); // Tipo esplicito per posts
  if (!posts) {
    return (
      <p>post not found</p>
    )
  }
  return (
    <section className='mx-5 my-20'>
      <div className='relative'>
        <Image src={hero} alt='Trader photo' width={1000} height={400} className='w-full rounded-2xl opacity-75 ' />
        <div className="absolute inset-0 bg-gray-900 opacity-50 z-10 rounded-2xl" /> {/* Gray overlay with opacity */}
        <div className='absolute top-2 z-20 text-white flex flex-col items-center justify-center w-full h-full'>
          <h1 className='text-3xl font-semibold'>Risparmia, investi, cresci</h1>
          <p className='max-w-sm text-center mt-2 mx-2'>Condivido la mia esperienza e le lezioni apprese per aiutarti a fare scelte finanziarie che ti porteranno lontano</p>
        </div>
      </div>
      <CryptoPrice />
      <div className='my-20'>
        <h2 className='text-2xl font-semibold mb-4'>Articoli più recenti</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {posts.map((post) => (
						<Article key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
