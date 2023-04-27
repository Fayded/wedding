import React from 'react'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function ToDo() {
  return (
    <section className="toDo">
      <div className="container">
        <h1 className="text-7xl my-20 text-center col-span-12 uppercase tracking-widest">To Do in ATL</h1>
      </div>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-6">
          <Image
            src="/chastain.jpg"
            alt="Chastain Park"
            width={608}
            height={405}
          />

          <h1 className="text-xl mt-6 mb-2">Chastain Park</h1>
          <p>Buckhead's premier park featuring a 2.5 mile walking trail with tennis and pickleball courts</p>
          <a href="https://www.buckhead.com/neighborhoods/chastain-park/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>         
        </section>
        <section className="col-span-6">
          <Image
            src="/bobbyJones.jpg"
            alt="Bobby Jones Golf Course"
            width={608}
            height={405}
          />
          <h1 className="text-xl mt-6 mb-2">Bobby Jones Golf Course</h1>
          <p>Distinguished public golf course design featuring multiple tees and large double greens</p>
          <a href="https://www.bobbyjonesgc.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
      </section>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-6">
          <Image
            src="/barrys.jpg"
            alt="Barrys bootcamp"
            width={608}
            height={408}
          />

          <h1 className="text-xl mt-6 mb-2">Barry's bootcamp</h1>
          <p>Located in Buckhead Village District, the original high intensity interval workout with a combination of running and weights</p>
          <a href="https://www.bodycentralpilates.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>         
        </section>
        <section className="col-span-6">
          <Image
            src="/stRegisSpa.jpg"
            alt="St Regis Spa"
            width={608}
            height={408}
          />
          <h1 className="text-xl mt-6 mb-2">St Regis Spa</h1>
          <p>Buckhead's premier park featuring a 2.5 mile walking trail with tennis and pickleball courts</p>
          <a href="https://www.buckhead.com/neighborhoods/chastain-park/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
      </section>
      <section className="grid grid-cols-6 gap-16 items-center container">
        <div className="col-span-4">
          <Image
            src="/buckheadVillage.jpg"
            alt="Buckhead Village"
            width={500}
            height={500}
          />
        </div>
        <section className="col-span-2">
          <h1 className="text-xl mb-2">Buckhead Village</h1>
          <p className="mb-2">Outdoor shopping and dining destination featuring high-end retail and global cuisines</p>
          <a href="https://www.buckheadvillagedistrict.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
      </section>
      <section className="grid grid-cols-12 gap-16 items-center container">
        <div className="col-span-6">
          <h1 className="text-xl mb-2">The Lenox Mall</h1>
          <p className="mb-2">3393 Peachtree Rd NE, Atlanta, GA 30326</p>
          <p className="mb-2">Located catty-corner to Phipps Plaza, shopping Mall with anchor stores of Neiman Marcus &amp; Bloomingdale's <a href="https://www.buckheadvillagedistrict.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a></p>
        </div>
        <div className="col-span-6">
          <h1 className="text-xl mb-2">Phipps Plaza</h1>
          <p className="mb-2">3500 Peachtree Rd NE, Atlanta, GA 30326</p>
          <p className="mb-2">Located catty-corner to Phipps Plaza, shopping Mall with anchor stores of Neiman Marcus &amp; Bloomingdale's <a href="https://www.buckheadvillagedistrict.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a></p>
        </div>
      </section>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-6">
          <Image
            src="/ponceCity.jpg"
            alt="Ponce City Market"
            width={608}
            height={405}
          />

          <h1 className="text-xl mt-6 mb-2">Ponce City Market</h1>
          <p>Nestled in the Old Fourth Ward along the "Atlanta BeltLine" Eastside Trail, a market with a food hall, shops, and famous rooftop views and entertainment</p>
          <a href="https://www.poncecitymarket.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>         
        </section>
        <section className="col-span-6">
          <Image
            src="/bobbyJones.jpg"
            alt="Bobby Jones Golf Course"
            width={608}
            height={405}
          />
          <h1 className="text-xl mt-6 mb-2">Bobby Jones Golf Course</h1>
          <p>Distinguished public golf course design featuring multiple tees and large double greens</p>
          <a href="https://www.bobbyjonesgc.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
      </section>
      <section className="grid grid-cols-6 gap-16 items-center container">
        <div className="col-span-4">
          <Image
            src="/ponceCity.jpg"
            alt="Ponce City Market"
            width={500}
            height={500}
          />
        </div>
        <section className="col-span-2">
          <h1 className="text-xl mb-2">Ponce City Market</h1>
          <p className="mb-2">Outdoor shopping and dining destination featuring high-end retail and global cuisines</p>
          <a href="https://www.buckheadvillagedistrict.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
      </section>
      <section className="grid grid-cols-6 gap-16 items-center container">
        <section className="col-span-2">
          <h1 className="text-xl mb-2">High Museum</h1>
          <p className="mb-2">From nineteenth-century sculpture to contemporary folk art, the seven themed collections include more than 18,000 works of art from around the world</p>
          <a href="https://high.org/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
        </section>
        <div className="col-span-4">
          <Image
            src="/highMuseum.jpg"
            alt="High Museum"
            width={500}
            height={500}
          />
        </div>
      </section>
      {/* <section className="grid grid-cols-6 gap-16 items-top container">
        <div className="col-span-2 mb-8">
          <Image
            src="/buckheadvillage.jpg"
            alt="Buckhead Village District"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2">Buckhead Village District</h2>
          <p>Outdoor shopping and dining destination featuring high-end retail and global cuisines <a href="https://www.buckheadvillagedistrict.com/">Visit</a></p>
        </div>
        <div className="col-span-2 mb-8">
          <Image
            src="/lenox.jpg"
            alt="Lenox Park Mall"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2">Lenox Park Mall</h2>
          <p>Located catty-corner to Phipps Plaza, shopping Mall with anchor stores of Neiman Marcus & Bloomingdale's <a href="https://www.simon.com/mall/lenox-square">Visit</a></p>
        </div>
        <div className="col-span-2 mb-8">
          <Image
            src="/phipps.jpg"
            alt="Phipps Plaza"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2">Phipps Plaza</h2>
          <p>•	Located catty-corner to Phipps Plaza, shopping Mall with anchor stores of Saks Fifth Avenue & Nordstrom <a href="https://www.simon.com/mall/phipps-plaza">Visit</a></p>
        </div>
      </section> */}
    </section>
  )
}
