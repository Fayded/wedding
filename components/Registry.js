import React from 'react'
import Image from 'next/image'

export default function Registry() {
  return (
    <section className="justify-center items-center grid">
      <section className="container justify-center items-center grid grid-cols-1 md:grid-cols-6">
        <h1 className="text-2xl md:text-7xl mt-10 mb-2 md:mt-20 md:mb-5 text-center col-span-12 uppercase tracking-widest">Registry</h1>
        <p className="mb-14 col-span-12 md:col-span-12 text-center">Wish lists curated at Bloomingdale&apos;s and Williams Sonoma.</p>
      </section>
      <section className="container justify-center grid grid-cols-2 md:grid-cols-12 gap-0 md:gap-16">
        <section className="col-span-10 md:col-span-6 mb-10 md:mb-8 lg:p-10 md:p-10 sm:4">
          <a href="https://www.bloomingdales.com/registry/Emily-Langsenkamp-Kevin-Fay/2428194" target="_blank">
            <Image
              src="/bloomingdales.svg"
              alt="Bloomingdales"
              width={608}
              height={408}
            />
          </a>
          {/* <h1 className="text-base md:text-xl mt-6 mb-2"><a href="https://www.barrys.com/studio/atlanta/" target="_blank">Bloomingdales</a></h1> */}
          {/* <p className="text-sm md:text-base">Located in Buckhead Village District, the original high intensity interval workout with a combination of running and weights.</p> */}
        </section>
        <section className="col-span-10 md:col-span-6 mb-10 md:mb-8 lg:p-10 md:p-10 sm:4">
          <a href="https://www.williams-sonoma.com/registry/rcw8gvrk6k/registry-list.html" target="_blank">
            <Image
              src="/williams-sonoma.svg"
              alt="Willam's Sonoma"
              width={608}
              height={408}
            />
          </a>
          {/* <h1 className="text-base md:text-xl mt-6 mb-2"><a href="https://www.williams-sonoma.com/" target="_blank">Williams Sonoma</a></h1> */}
          {/* <p className="text-sm md:text-base">From lush surroundings to precious ingredients, every aspect of the spa sanctuary is custom created to captivate and celebrate.</p> */}
        </section>
      </section>
    </section>  
  )
}
