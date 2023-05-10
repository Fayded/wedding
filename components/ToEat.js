import React from 'react'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function ToEat() {
  return (
    <section className="toEat">
      <section className="container justify-center items-center grid grid-cols-1 md:grid-cols-6">
        <h1 className="text-2xl md:text-7xl mt-10 mb-2 md:mt-20 md:mb-5 text-center col-span-12 uppercase tracking-widest">Eat in ATL</h1>
        <p className="mb-14 col-span-12 md:col-span-8 md:col-start-3 text-center">Favorite eateries of the bride and groom, all within a 2-mile radius of the preferred hotels.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-6 gap-0 md:gap-16 items-top container">
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/umi.jpg"
            alt="Umi"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2"><a href="https://umiatlanta.com/" target="_blank">Umi</a></h2>
          <p>Located in the St. Regis courtyard, a stylish haunt serving sushi and other sophisticated Japanese fare in an airy, contemporary setting.</p>
        </div>
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/st-cecilias.jpg"
            alt="St Cecilia"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2"><a href="https://stceciliaatl.com/" target="_blank">St. Cecilia</a></h2>
          <p>Coastal European food specializing in pasta and seafood dishes in a stunning dining room and expansive bar.</p>
        </div>
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/storico-vino.jpg"
            alt="Storico Vino"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2"><a href="https://www.storicovino.com/" target="_blank">Storico Vino</a></h2>
          <p>Located in Buckhead Village District, a menu rooted in the northern coast of Italy featuring a flourish of traditional choices with a Venetian-style wine bar.</p>
        </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-6 gap-0 md:gap-16 items-top container">
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/garden-room.jpg"
            alt="Garden Room"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2"><a href="https://thegardenroomatlanta.com/" target="_blank">Garden Room</a></h2>
          <p>Located in the St. Regis, a chic restaurant serving New American cuisine and cocktails in a plant-filled space with a glass roof.</p>
        </div>
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/bistro-niko.jpg"
            alt="Bistro Niko"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2"><a href="https://bistroniko.com/" target="_blank">Bistro Niko</a></h2>
          <p>Bustling hot spot presents classic French bistro fare amid warm lighting and elegant decor.</p>
        </div>
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/bar-taco.jpg"
            alt="Bartaco"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2"><a href="https://bartaco.com/location/atlanta-chastain/" target="_blank">Bartaco</a></h2>
          <p>Trendy restaurant with a casual vibe serving classic Mexican dishes.</p>
        </div>
      </section>
        <section className="grid grid-cols-1 md:grid-cols-6 gap-0 md:gap-16 items-top container">
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/superica.jpg"
            alt="Superica"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2"><a href="https://superica.com/buckhead/" target="_blank">Superica</a></h2>
          <p>Tex-Mex cuisine amidst a casual Old West atmosphere.</p>
        </div>
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/le-bilboquet.jpg"
            alt="Le Bilboquet"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2"><a href="https://www.lebilboquetatlanta.com/" target="_blank">Le Bilboquet</a></h2>
          <p>Located in Buckhead Village District, classic French cooking in a vibrant setting with quintessential Parisian elements.</p>
        </div>
        <div className="col-span-12 md:col-span-2 mb-8">
          <Image
            src="/atlas.jpg"
            alt="Atlas"
            width={384}
            height={250}
          />
          <h2 className="text-md mt-4 mb-2"><a href="https://atlasrestaurant.com/" target="_blank">Atlas</a></h2>
          <p>Located in the St. Regis, a menu inspired by partnerships with local farms using the freshest and most seasonal produce in a sophisticated setting adorned with an extraordinary collection of 20th-century modern art.</p>
        </div>
      </section>
    </section>
  )
}
