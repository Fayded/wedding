import React from 'react'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function ToDo() {
  return (
    <section className="toDo">
      <div className="container">
        <h1 className="text-7xl mt-20 mb-5 text-center col-span-12 uppercase tracking-widest">Do in ATL</h1>
        <p className="mb-14 col-span-8 col-start-3 text-center">Activities and attractions to explore during an ATL stay.</p>
      </div>
      <section className="container">
        <h1 className="mt-4 mb-6 text-2xl">Wellness and Fitness</h1>
      </section>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/chastain.jpg"
            alt="Chastain Park"
            width={608}
            height={390}
          />
          <h1 className="text-xl mt-6 mb-2"><a href="https://www.buckhead.com/neighborhoods/chastain-park/" target="_blank">Chastain Park</a></h1>
          <p>Buckhead&apos;s premier park featuring a 2.5 mile walking trail with tennis and pickleball courts.</p>
        </section>
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/bobby-jones.jpg"
            alt="Bobby Jones Golf Course"
            width={608}
            height={390}
          />
          <h1 className="text-xl mt-6 mb-2"><a href="https://www.bobbyjonesgc.com/" target="_blank">Bobby Jones Golf Course</a></h1>
          <p>Distinguished public golf course design featuring multiple tees and large double greens.</p>
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

          <h1 className="text-xl mt-6 mb-2"><a href="https://www.bodycentralpilates.com/" target="_blank">Barry&apos;s bootcamp</a></h1>
          <p>Located in Buckhead Village District, the original high intensity interval workout with a combination of running and weights.</p>
        </section>
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/st-regis-spa.jpg"
            alt="St. Regis Spa"
            width={608}
            height={408}
          />
          <h1 className="text-xl mt-6 mb-2"><a href="https://www.marriott.com/en-us/hotels/atlxr-the-st-regis-atlanta/experiences/" target="_blank">St. Regis Spa</a></h1>
          <p>From lush surroundings to precious ingredients, every aspect of the spa sanctuary is custom created to captivate and celebrate.</p>
        </section>
      </section>
      <section className="container">
        <h1 className="mt-4 mb-6 text-2xl">Shopping</h1>
      </section>
      <section className="grid grid-cols-12 gap-16 container">
        <div className="col-span-12 md:col-span-4">
          <Image
              src="/buckheadVillage.jpg"
              alt="Buckhead Village"
              width={384}
              height={250}
          />
          <h1 className="text-xl mt-6 mb-2">Buckhead Village District</h1>
          <p className="mb-2">Outdoor shopping and dining destination featuring high-end retail and global cuisines.</p>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Image
              src="/lenox-mall.jpg"
              alt="Lenox Mall"
              width={384}
              height={250}
          />
          <h1 className="text-xl mt-6 mb-2">Lenox Square Mall</h1>
          <p className="mb-2">Located catty-corner to Phipps Plaza, shopping mall with anchor stores of Neiman Marcus and Bloomingdale&apos;s.</p>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Image
              src="/phipps.jpg"
              alt="Phipps"
              width={384}
              height={250}
          />
          <h1 className="text-xl mt-6 mb-2">Phipps Plaza</h1>
          <p className="mb-2">Located catty-corner to Lenox Square Mall, shopping mall with anchor stores of Saks Fifth Avenue and Nordstrom.</p>
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
            height={390}
          />

          <h1 className="text-xl mt-6 mb-2"><a href="https://www.poncecitymarket.com/" target="_blank">Ponce City Market</a></h1>
          <p>Nestled in the Old Fourth Ward along the &quot;Atlanta BeltLine&quot; Eastside Trail, a market with a food hall, shops, and famous rooftop views and entertainment.</p>
        </section>
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/botanical.jpg"
            alt="Botanical Gardens"
            width={608}
            height={390}
          />

          <h1 className="text-xl mt-6 mb-2"><a href="https://atlantabg.org/" target="_blank">Botanical Gardens</a></h1>
          <p>An urban oasis in Midtown boasting thirty acres of display gardens and shady woodlands featuring extensive plant and flower collections.</p>
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
          <h1 className="text-xl mt-6 mb-2"><a href="https://high.org/" target="_blank">High Museum</a></h1>
          <p className="mb-2">From nineteenth-century sculpture to contemporary folk art, the seven themed collections include more than 18,000 works of art from around the world.</p>
        </section>
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/atlanta-history.jpg"
            alt="Atlanta History Museum"
            width={608}
            height={370}
          />
          <h1 className="text-xl mt-6 mb-2"><a href="https://high.org/" target="_blank">Atlanta History Museum</a></h1>
          <p className="mb-2">The museum atrium serves as a hub for all things Atlanta History Center. From here, explore award-winning exhibitions highlighting some of the Atlanta&apos;s most important moments, people, and artifacts.</p>
        </section>
      </section>
    </section>
  )
}
