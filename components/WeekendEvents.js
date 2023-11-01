import React from 'react'
import Image from 'next/image'

export default function WeekendEvents() {
  return (
    <section className="weekendEvents">
      <section className="container justify-center items-center grid grid-cols-1 md:grid-cols-12">
        <h1 className="text-2xl md:text-7xl mt-10 mb-2 md:mt-20 md:mb-5 text-center col-span-12 uppercase tracking-widest">Weekend Events in ATL</h1>
        <p className="text-xs md:text-lg col-span-12 md:col-span-12 mb-6 md:mb-14 text-center"><span className="mx-1 md:mx-4">The Wedding Night</span>|<span className="mx-1 md:mx-4">March 16th, 2024</span>|<span className="mx-1 md:mx-4">Gowns &amp; Tuxes</span><br />
        <span className="text-xs ">Adults Only</span></p>
      </section>
      <section className="container">
      </section>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-16 items-start container">
        <div className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/ceremony.jpg"
            alt="The Cathedral at Christ the King"
            width={609}
            height={662}
          />
          <h1 className="text-sm md:text-base md:text-base md:text-xl mt-6 mb-2">The Ceremony</h1>
          <p className="text-sm md:text-base pb-6">Cathedral of Christ the King
            <br />Six O&apos;Clock
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/st-regis-tall.jpg"
            alt="St Regis"
            width={609}
            height={662}
          />
          <h1 className="text-base md:text-xl mt-6 mb-2">The Celebration</h1>
          <p className="text-sm md:text-base">The St. Regis
          <br />Immediately Following The Ceremony</p>
        </div>
      </section>
    </section>
  )
}