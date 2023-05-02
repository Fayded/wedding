import React from 'react'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function ToEat() {
  return (
    <section className="toEat">
      <section className="container justify-center items-center grid grid-cols-12">
        <h1 className="text-7xl my-20 text-center col-span-12 uppercase tracking-widest">Eat in ATL</h1>
        <p className="mb-14 col-span-12 md:col-span-6">Guests are highly encouraged to secure hotel reservations as soon as possible to secure the 
    discounted room rate using the respective link.</p>
      </section>
      <section className="grid grid-cols-6 gap-16 items-top container">
        <div className="col-span-2 md:col-span-2">
          <Image
            src="/umi-min.jpg"
            alt="Umi"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2">Umi</h2>
          <p>Located in the St. Regis courtyard, a stylish haunt serving sushi &amp; other sophisticated Japanese fare in an airy, contemporary setting.</p>
        </div>
        <div className="col-span-12 md:col-span-2">
          <Image
            src="/st-cecilias-min.jpg"
            alt="St Cecilia"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2">St. Cecilia</h2>
          <p>Coastal European food specializing in pasta and seafood dishes in a stunning dining room and gorgeous spacious bar.</p>
        </div>
        <div className="col-span-12 md:col-span-2">
          <Image
            src="/storicoVino-min.jpg"
            alt="Storico Vino"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2">Storico Vino</h2>
          <p>Located in Buckhead Village District, a menu rooted in the northern coast of Italy featuring a flourish of traditional choices with a Venetian-style wine bar.</p>
        </div>
        <section className="grid grid-cols-6 gap-16 items-center container">
          <section className="col-span-12 md:col-span-2 mb-8">
            <h1 className="text-xl mb-2">The Garden Room</h1>
            <p className="mb-2">Located in the St. Regis, a chic restaurant serving New American cuisine &amp; cocktails in a plant-filled space with a glass roof</p>
            <a href="https://thegardenroomatlanta.com/" target="_blank" className="my-4 flex items-center">Visit &nbsp; <HiOutlineChevronRight /></a>
          </section>
          <div className="col-span-12 md:col-span-4 mb-16">
            <Image
              src="/garden-room-min.jpg"
              alt="Garden Room"
              width={500}
              height={500}
            />
          </div>
        </section>
        </section>
        <section className="grid grid-cols-6 gap-16 items-top container">
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/superica-min.jpg"
            alt="Superica"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2">Superica</h2>
          <p>Tex-Mex cuisine amidst a casual Old West atmosphere.</p>
        </div>
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/leBilboquet-min.jpg"
            alt="Le Bilboquet"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2">Le Bilboquet</h2>
          <p>Located in Buckhead Village District, classic French cooking in a vibrant setting with quintessential Parisian elements.</p>
        </div>
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/atlas-min.jpg"
            alt="Atlas"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2">Atlas</h2>
          <p>Located in the St. Regis, a menu inspired by partnerships with local farms using the freshest and most seasonal produce in a sophisticated setting adorned with an extraordinary collection of 20th-century modern art.</p>
        </div>
      </section>
    </section>
  )
}
