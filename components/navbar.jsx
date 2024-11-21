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

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<header className='mt-3 px-5'>
			<div >
				<nav className='flex items-center w-full sm:items-end justify-between'>	
					<h1 className='font-black text-4xl sm:text-3xl'>WhealthWay</h1>
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