import React from 'react'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function ToEat() {
  return (
    <section className="toEat">
      <section className="container justify-center items-center grid grid-cols-12">
        <h1 className="text-7xl my-20 text-center col-span-12 uppercase tracking-widest">Eat in ATL</h1>
        <p className="mb-14 col-span-6">Guests are highly encouraged to secure hotel reservations as soon as possible to secure the 
    discounted room rate using the respective link.</p>
      </section>
      <section className="grid grid-cols-6 gap-16 items-top container">
        <div className="col-span-2 mb-8">
          <Image
            src="/stregis1.jpg"
            alt="St Regis"
            width={384}
            height={250}
          />
          <h1 className="text-xl my-2">Le Bilboquet</h1>
          <p>Located in Buckhead Village District, classic French cooking in a vibrant setting with quintessential Parisian elements.</p>
        </div>
        <div className="col-span-2 mb-8">
          <Image
            src="/stregis1.jpg"
            alt="St Regis"
            width={384}
            height={250}
          />
          <h1 className="text-xl my-2">Superica</h1>
          <p>Tex-Mex cuisine amidst a casual Old West atmosphere.</p>
        </div>
        <div className="col-span-2 mb-8">
          <Image
            src="/stregis1.jpg"
            alt="St Regis"
            width={384}
            height={250}
          />
          <h1 className="text-xl my-2">Storico Vino</h1>
          <p>Located in Buckhead Village District, a menu rooted in the northern coast of Italy featuring a flourish of traditional choices with a Venetian-style wine bar.</p>
        </div>
        <div className="col-span-2 mb-8">
          <Image
            src="/stregis1.jpg"
            alt="St Regis"
            width={384}
            height={250}
          />
          <h1 className="text-xl my-2">Atlas</h1>
          <p>Located in the St. Regis, a menu inspired by partnerships with local farms using the freshest and most seasonal produce in a sophisticated setting adorned with an extraordinary collection of 20th-century modern art.</p>
        </div>
        <div className="col-span-2 mb-8">
          <Image
            src="/stregis1.jpg"
            alt="St Regis"
            width={384}
            height={250}
          />
          <h1 className="text-xl my-2">Umi</h1>
          <p>Located in the St. Regis courtyard, a stylish haunt serving sushi & other sophisticated Japanese fare in an airy, contemporary setting.</p>
        </div>
        <div className="col-span-2 mb-8">
          <Image
            src="/stregis1.jpg"
            alt="St Regis"
            width={384}
            height={250}
          />
          <h1 className="text-xl my-2">St. Cecilia</h1>
          <p>Coastal European food specializing in pasta and seafood dishes in a stunning dining room and gorgeous spacious bar.</p>
        </div>
        </section>
    </section>
  )
}
