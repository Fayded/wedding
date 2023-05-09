import React from 'react'
import Image from 'next/image'

export default function WeekendEvents() {
  return (
    <section className="weekendEvents">
      <section className="container justify-center items-center grid grid-cols-12">
        <h1 className="text-7xl text-center col-span-12 uppercase tracking-widest">Weekend Events in ATL</h1>
      </section>
      <section className="container">
      <p className="mt-10 mb-4"><span className="mr-4">The Wedding Day</span>|<span className="mx-4">March 16th, 2024</span>|<span className="mx-4">Gowns &amp; Tuxes</span></p>
      </section>
      <section className="grid grid-cols-12 gap-16 items-start container">
        <div className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/ceremony.jpg"
            alt="The Cathedral at Christ the King"
            width={500}
            height={370}
          />
          <h1 className="text-xl mt-4">The Ceremony</h1>
          <p className="pb-6">Cathedral of Christ the King
            <br />6 o&apos;clock PM
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 mb-8">
          <Image
            src="/st-regis-tall.jpg"
            alt="St Regis"
            width={608}
            height={406}
          />
          <h1 className="text-xl mt-4">The Celebration</h1>
          <p>The St. Regis
          <br />Immediately Following The Ceremony</p>
        </div>
      </section>
      <section className="container">
        <p className="mt-4 mb-10"><span className="mr-4">The Day Before</span>|<span className="mx-4">March 15th, 2024</span>|<span className="mx-4">Cocktail Attire</span></p>
      </section>
      <section className="container justify-center grid grid-cols-12 gap-16">
        <section className="col-span-12 md:col-span-4 mb-8">
          <Image
            src="/christ-the-king.jpg"
            alt="Christ the King"
            width={608}
            height={390}
          />       
          <h1 className="text-xl mt-6 mb-2">The Rehearsal</h1>
          <p className="pb-6">Cathedral of Christ the King
            <br />5 o&apos;clock PM
            <br />
            <span className="text-xs">* Invite Only</span>
          </p>
        </section>
        <section className="col-span-12 md:col-span-4 mb-8">
          <Image
            src="/rehearsal.jpg"
            alt="Le Colonial"
            width={608}
            height={390}
          />
          <h1 className="text-xl mt-6 mb-2">The Rehearsal Dinner</h1>
          <p className="pb-6">Le Colonial
            <br />6 o&apos;clock PM
            <br />
            <span className="text-xs">* Invite Only</span>
          </p>
        </section>
        <section className="col-span-12 md:col-span-4 mb-8">
          <Image
            src="/le-colonial.jpg"
            alt="Le Colonial"
            width={608}
            height={390}
          />
          <h1 className="text-xl mt-6 mb-2">The Welcome Party</h1>
          <p className="pb-6">Le Colonial
            <br />8 - 10 o&apos;clock PM
            <br />
            <span className="text-xs">* Out of town guests only</span>
          </p>
        </section>
      </section>
    </section>
  )
}