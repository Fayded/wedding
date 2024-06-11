import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import { HiX, HiOutlineMenu } from "react-icons/hi";

const RootLayout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = (e) => {
		e.preventDefault()
		if(isOpen) {
			setIsOpen(false)	
		} else {
			setIsOpen(prevOpen => !prevOpen)
		}
	}

  return (
    <>
			<section className="container justify-between lg:justify-center items-center mt-10 mb-5 lg:mb-0 flex">
					<h1 className="text-2xl md:text-7xl md:mt-20 md:mb-5 text-center col-span-12 uppercase tracking-widest">
						<Link href="/highlights" className="hover:no-underline">Highlights</Link></h1>
						{isOpen ? (
							<button className="lg:hidden p-4 text-xl md:mt-20 md:mb-5 md:text-4xl" onClick={handleClick}>
								<HiX />
							</button>
						) : (
							<button className="lg:hidden p-4 md:mt-20 md:mb-5 text-xl md:text-4xl" onClick={handleClick}>
								<HiOutlineMenu />
							</button>
						)}
			</section>
			<p className="container text-sm md:text-base mb-10 md:mb-10 col-span-12 md:col-span-12 md:text-center gmb-2">We are thrilled to share the highlight video and some of our favorite moments from the unforgettable night! Click the dropdown menu to view photos, and click any image for a complimentary high resolution version. Should you wish to view on your desktop, visit <a href="http://LoveShinesInATL.com/highlights">LoveShinesInATL.com/highlights</a>. Enjoy!</p>
			<NavBar isOpen={isOpen} />
			<main className="lg:mt-20">{children}</main>
	</>
	);
};

export default RootLayout;