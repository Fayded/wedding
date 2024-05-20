import Head from 'next/head'
import React, {useState} from 'react'
import { Montserrat } from 'next/font/google'
import Layout from './layout'
import RootLayout from '@/components/Layout';
import HighlightsLayout from '@/components/HighlightsLayout';
import OptimizedImage from '@/components/OptimizedImage'

const montserrat = Montserrat({ subsets: ['latin'] })
import { pictures } from './pictures'

export default function Highlights({children}) {
  const [photos, setPhotos] = useState(true)
  const { 
    firstLooks, 
    cathedralArrivals,
    familyPhotos,
    ceremony,
    cocktailParty,
    reception,
    afterParty 
  } = pictures[0]
  
  return (
    <>
      <Head>
        <title>Love Shines in ATL</title>
        <meta name="description" content="The Celebration of Emily and Kevin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="container justify-center items-center grid grid-cols-1 md:grid-cols-12 mb-5 md:mb-0">
            <h1 className="text-2xl md:text-7xl mt-10 mb-2 md:mt-20 md:mb-5 text-center col-span-12 uppercase tracking-widest">Photo Highlights</h1>
        </section>
      </main>
    </>
  )
}

Highlights.getLayout = (page) => (
  <RootLayout>
    <HighlightsLayout>{page}</HighlightsLayout>
  </RootLayout>
);