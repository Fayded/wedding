import React from 'react'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function ToDo() {
  return (
    <section className="toDo">
      <div className="container">
        <h1 className="text-7xl my-20 text-center col-span-12 uppercase tracking-widest">Do in ATL</h1>
      </div>
      <section className="container">
        <h1 className="my-8 text-2xl">Wellness &amp; Fitness</h1>
      </section>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/chastain.jpg"
            alt="Chastain Park"
            width={608}
            height={390}
          />

          <h1 className="text-xl mt-6 mb-2">Chastain Park</h1>
          <p>Buckhead&apos;s premier park featuring a 2.5 mile walking trail with tennis and pickleball courts</p>
          <a href="https://www.buckhead.com/neighborhoods/chastain-park/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>         
        </section>
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/bobby-jones.jpg"
            alt="Bobby Jones Golf Course"
            width={608}
            height={390}
          />
          <h1 className="text-xl mt-6 mb-2">Bobby Jones Golf Course</h1>
          <p>Distinguished public golf course design featuring multiple tees and large double greens</p>
          <a href="https://www.bobbyjonesgc.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
      </section>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/barrys.jpg"
            alt="Barrys bootcamp"
            width={608}
            height={408}
          />

          <h1 className="text-xl mt-6 mb-2">Barry&apos;s bootcamp</h1>
          <p>Located in Buckhead Village District, the original high intensity interval workout with a combination of running and weights</p>
          <a href="https://www.bodycentralpilates.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>         
        </section>
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/st-regis-spa.jpg"
            alt="St Regis Spa"
            width={608}
            height={408}
          />
          <h1 className="text-xl mt-6 mb-2">St Regis Spa</h1>
          <p>Buckhead&apos;s premier park featuring a 2.5 mile walking trail with tennis and pickleball courts</p>
          <a href="https://www.buckhead.com/neighborhoods/chastain-park/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
      </section>
      <section className="container">
        <h1 className="my-8 text-2xl">Shopping</h1>
      </section>
      <section className="grid grid-cols-6 gap-16 items-center container">
        <div className="col-span-12 md:col-span-4 mb-8">
          <Image
            src="/buckheadVillage.jpg"
            alt="Buckhead Village"
            width={500}
            height={500}
          />
        </div>
        <section className="col-span-12 md:col-span-2 mb-8">
          <h1 className="text-xl mb-2">Buckhead Village</h1>
          <p className="mb-2">Outdoor shopping and dining destination featuring high-end retail and global cuisines</p>
          <a href="https://www.buckheadvillagedistrict.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
      </section>
      <section className="grid grid-cols-12 gap-16 items-center container">
        <div className="col-span-12 md:col-span-6 my-8">
          <h1 className="text-xl mb-2">The Lenox Mall</h1>
          <p className="mb-2">3393 Peachtree Rd NE, Atlanta, GA 30326</p>
          <p className="mb-2">Located catty-corner to Phipps Plaza, shopping Mall with anchor stores of Neiman Marcus &amp; Bloomingdale&apos;s</p>
        </div>
        <div className="col-span-12 md:col-span-6 my-8">
          <h1 className="text-xl mb-2">Phipps Plaza</h1>
          <p className="mb-2">3500 Peachtree Rd NE, Atlanta, GA 30326</p>
          <p className="mb-2">Located catty-corner to Phipps Plaza, shopping Mall with anchor stores of Neiman Marcus &amp; Bloomingdale&apos;s</p>
        </div>
      </section>
      <section className="container">
        <h1 className="mt-4 mb-6 text-2xl">Landmarks</h1>
      </section>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/ponce-city.jpg"
            alt="Ponce City Market"
            width={608}
            height={370}
          />

          <h1 className="text-xl mt-6 mb-2">Ponce City Market</h1>
          <p>Nestled in the Old Fourth Ward along the &quot;Atlanta BeltLine&quot; Eastside Trail, a market with a food hall, shops, and famous rooftop views and entertainment</p>
          <a href="https://www.poncecitymarket.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>         
        </section>
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/botanical.jpg"
            alt="Botanical Gardens"
            width={608}
            height={390}
          />

          <h1 className="text-xl mt-6 mb-2">Botanical Gardens</h1>
          <p>An urban oasis in Midtown boasting thirty acres of display gardens and shady woodlands featuring extensive plant and flower collections</p>
          <a href="https://atlantabg.org/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>         
        </section>
      </section>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/high-museum.jpg"
            alt="High Museum"
            width={608}
            height={370}
          />
          <h1 className="text-xl mt-6 mb-2">High Museum</h1>
          <p className="mb-2">From nineteenth-century sculpture to contemporary folk art, the seven themed collections include more than 18,000 works of art from around the world</p>
          <a href="https://high.org/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/atlanta-history.jpg"
            alt="Atlanta History Museum"
            width={608}
            height={370}
          />
          <h1 className="text-xl mt-6 mb-2">Atlanta History Museum</h1>
          <p className="mb-2">Our museum atrium serves as a hub for all things Atlanta History Center. From here, you’ll explore award-winning exhibitions highlighting some of the Atlanta’s most important moments, people, and artifacts.</p>
          <a href="https://high.org/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
      </section>
    </section>
  )
}
