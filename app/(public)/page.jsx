import Image from 'next/image'
import CryptoPrice from '@/components/crypto-price'
import hero from '@/assets/media/hero.jpg'
import LastStrategies from '@/components/last-strategies'
import LastArticles from '@/components/last-articles'

export const metadata = {
  title: "Home"
}

export default async function Home() {
  return (
    <section className='mx-5 my-20'>
      <div className='relative'>
        <Image src={hero} alt='Trader photo' width={1000} height={400} className='w-full rounded-2xl opacity-75 ' />
        <div className="absolute inset-0 bg-gray-900 opacity-50 z-10 rounded-2xl" /> 
        <div className='text-center absolute top-2 z-20 text-white flex flex-col items-center justify-center w-full h-full'>
          <h1 className='text-2xl sm:text-3xl font-bold sm:font-semibold mx-2'>Risparmia, investi, cresci</h1>
          <p className='max-w-sm mt-2 mx-2'>Condivido la mia esperienza e le lezioni apprese per aiutarti a fare scelte finanziarie che ti porteranno lontano</p>
        </div>
      </div>
      <CryptoPrice />
      <div className='my-20'>
        <h2 className='text-2xl font-semibold mb-4'>Articoli più recenti</h2>
        <LastArticles />
      </div>
      <div className='my-20'>
        <h2 className='text-2xl font-semibold mb-4'>Ultime strategie pubblicate</h2>
        <LastStrategies />
      </div>
    </section>
  )
}
