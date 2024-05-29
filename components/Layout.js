import React, { useState } from 'react';
import NavBar from './NavBar';
import { HiX } from "react-icons/hi";

const RootLayout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = (e) => {
		e.preventDefault()
		setIsOpen(prevOpen => !prevOpen)
	}

  return (
    <>
			<section className="container justify-start lg:justify-center items-center mt-10 mb-5 lg:mb-0 flex">
					<h1 className="text-2xl md:text-7xl md:mt-20 md:mb-5 text-center col-span-12 uppercase tracking-widest">Highlights</h1>
					<button className={isOpen ? "lg:hidden p-4 md:mt-20 md:mb-5 transition-transform ease-in-out duration-300 text-xl md:text-4xl lg:hidden" : "lg:hidden p-4 rotate-45 transition-transform ease-in-out delay-150 text-xl md:mt-20 md:mb-5 md:text-4xl"} onClick={handleClick}><HiX /></button>
			</section>
			<NavBar isOpen={isOpen} />
			<main>{children}</main>
	</>
	);
};

export default RootLayout;