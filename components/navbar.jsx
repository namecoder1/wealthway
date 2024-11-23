'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Separator } from './ui/separator'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Sling as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import logo from '@/assets/media/logo.jpeg'

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<header className='pt-3 px-5'>
			<div >
				<nav className='flex items-center w-full justify-between'>	
					<div className='flex items-center justify-center gap-1'>
						<Image src={logo} width={40} height={40} alt='Logo WealtWay' className='rounded-xl' />
						<h1 className='font-black text-3xl sm:text-2xl'>WealthWay</h1>
					</div>
					<ul className='hidden sm:flex justify-between w-full px-3 sm:px-0 sm:w-fit gap-4'>
						<li className='custom-h'><Link href='/'>Home</Link></li>
						<li className='custom-h'><Link href='/articoli'>Articoli</Link></li>
						<li className='custom-h'><Link href='/strategie'>Strategie</Link></li>
						<li className='custom-h'><Link href='/chi-sono'>Chi sono</Link></li>
					</ul>
					<div className='block sm:hidden h-fit'>
						<Popover>
							<PopoverTrigger>
								<Hamburger toggled={isOpen} toggle={setOpen} />
							</PopoverTrigger>
							<PopoverContent className='w-fit'>
							<ul className='flex flex-col justify-between px-3 sm:px-0 w-fit gap-4'>
								<li className='custom-h'><Link href='/'>Home</Link></li>
								<li className='custom-h'><Link href='/articoli'>Articoli</Link></li>
								<li className='custom-h'><Link href='/strategie'>Strategie</Link></li>
								<li className='custom-h'><Link href='/chi-sono'>Chi sono</Link></li>
							</ul>
							</PopoverContent>
						</Popover>
					</div>

				</nav>
				<Separator className='mt-2' />
			</div>
		</header>
	)
}

export default Navbar