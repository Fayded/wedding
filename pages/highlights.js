import Head from 'next/head'
import React, {useRef, useState, useEffect} from 'react'
import { Montserrat } from 'next/font/google'
// import Intro from '../components/Intro'
import WeekendEvents from '../components/WeekendEvents'
import ToDo from '../components/ToDo'
import ToStay from '../components/ToStay'
import ToEat from '../components/ToEat'
import { HiOutlineChevronRight } from 'react-icons/hi'
import styles from '@/styles/Intro.module.scss'
import Registry from '../components/Registry'
import Photos from '../components/Photos'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Love Shines in ATL</title>
        <meta name="description" content="The Celebration of Emily and Kevin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="highlights">
          <section className="container justify-center items-center grid grid-cols-1 md:grid-cols-12 mb-5 md:mb-0">
            <h1 className="text-2xl md:text-7xl mt-10 mb-2 md:mt-20 md:mb-5 text-center col-span-12 uppercase tracking-widest">Wedding Highlights Coming Soon...</h1>
            {/* <p className="text-sm md:text-base mb-2 md:mb-14 col-span-12 md:col-span-12 text-center">Guests are highly encouraged to book hotel reservations as soon as possible. <br />Room blocks have been reserved for guests at a discounted rate. Click the respective links below to secure an ATL stay.</p> */}
          </section>
        </section>
      </main>
    </>
  )
}
