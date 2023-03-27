import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import Intro from '../components/Intro'
import WeekendEvents from '../components/WeekendEvents'
import ToDo from '../components/ToDo'
import ToStay from '../components/ToStay'
import ToEat from '../components/ToEat'
import Registry from '../components/Registry'
import Attire from '../components/Attire'
import styles from '@/styles/Home.module.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Love Shines in ATL</title>
        <meta name="description" content="The wedding of Emily and Kevin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Intro />
        <WeekendEvents />
        <ToStay />
        <ToEat />
        <ToDo />
        <Registry />
        <Attire />
      </main>
    </>
  )
}