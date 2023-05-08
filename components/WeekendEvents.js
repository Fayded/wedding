import React from 'react'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function WeekendEvents() {
  return (
    <section className="weekendEvents">
      <section className="container justify-center items-center grid grid-cols-12">
        <h1 className="text-7xl my-20 text-center col-span-12 uppercase tracking-widest">Weekend Events in ATL</h1>
      </section>
      <section className="container">
        <p>03.15.2024</p>
      </section>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-12 md:col-span-6 mb-8">
          <h1 className="text-xl mt-6 mb-2">Rehearsal</h1>
          <p className="pb-6">Christ the King
            <br />415 East Paces Ferry Rd NE, 
            <br />Atlanta, GA 30305
          </p>
          <Image
            src="/christ-the-king.jpg"
            alt="Christ the King"
            width={608}
            height={390}
          />       
        </section>
        <section className="col-span-12 md:col-span-6 mb-8">
          <h1 className="text-xl mt-6 mb-2">Rehearsal Dinner</h1>
          <p className="pb-6">Le Colonial
            <br />3035 Peachtree Rd NE 
            <br />Atlanta, Georgia 30305
          </p>
          <Image
            src="/rehearsal.jpg"
            alt="Le Colonial"
            width={608}
            height={390}
          />
        </section>
      </section>
      <section className="grid grid-cols-12 gap-16 items-center container">
        <section className="col-span-6">
          <h1 className="text-xl mb-2">Welcome Party</h1>
          <p className="pb-6">Le Colonial
            <br />3035 Peachtree Rd NE 
            <br />Atlanta, Georgia 30305
          </p>
          <p>For out of town guests</p>
        </section>
        <div className="col-span-6">
          <Image
            src="/st-regis.jpg"
            alt="St Regis"
            width={500}
            height={370}
          />
        </div>
      </section>
      <section className="grid grid-cols-12 gap-16 items-center container">
        <div className="col-span-6 mb-8">
          <Image
            src="/ceremony.jpg"
            alt="The Cathedral at Christ the King"
            width={500}
            height={370}
          />
        </div>
        <section className="col-span-6 mb-8">
          <h1 className="text-xl mb-2">Ceremony - Full Mass</h1>
          <p className="pb-6">Cathedral of Christ the King
            <br />415 East Paces Ferry Rd NE, 
            <br />Atlanta, Georgia 30305
          </p>
          <p>For out of town guests</p>
        </section>
      </section>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/st-regis-light.jpg"
            alt="St Regis"
            width={608}
            height={406}
          />

          <h1 className="text-xl mt-6 mb-2">Celebration</h1>
          <p>The St. Regis Atlanta
          <br />88 W Paces Ferry Rd NW, 
          <br />Atlanta, Georgia 30305</p>
        </section>
        <section className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/st-regis-bar.jpg"
            alt="St Regis Bar"
            width={608}
            height={406}
          />
          <h1 className="text-xl mt-6 mb-2">After Party</h1>
          <p>The St. Regis Bar
          <br />88 W Paces Ferry Rd NW, 
          <br />Atlanta, Georgia 30305</p>
        </section>
      </section>
    </section>
  )
}