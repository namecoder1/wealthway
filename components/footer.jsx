import Link from 'next/link';
import { Separator } from './ui/separator';

const Footer = () => {
	const date = new Date().getFullYear()
	return (
    <footer className="bg-white px-5">
			<Separator />
			<div className=' py-5'>
				<div className="mx-auto max-w-7xl px-6 py-3 md:flex md:items-center md:justify-between lg:px-8">
					<div className="flex justify-center gap-x-6 md:order-2">
						<Link href='/' className="text-gray-600 hover:text-gray-800">Home</Link>
						<Link href='/articoli' className="text-gray-600 hover:text-gray-800">Articoli</Link>
						<Link href='/strategie' className="text-gray-600 hover:text-gray-800">Strategie</Link>
						<Link href='/chi-sono' className="text-gray-600 hover:text-gray-800">Chi sono</Link>
					</div>
					<p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
						&copy; {date} WealthWay. All rights reserved.
					</p>
				</div>
				<div className='text-sm text-center flex flex-col gap-1 text-gray-600'>
					<p>created by <Link target='_blank' className='hover:underline underline-offset-2 text-gray-600 hover:text-gray-800' href='https://tob.codes'>@tobi</Link></p>
					<p>made with <Link target='_blank' className='hover:underline underline-offset-2 text-gray-600 hover:text-gray-800' href='https://sanity.io'>Sanity.io</Link> and <Link target='_blank' className='hover:underline underline-offset-2 text-gray-600 hover:text-gray-800' href='https://nextjs.org'>Next.js</Link>.</p>
				</div>
			</div>
    </footer>
	);
};

export default Footer;