import Head from 'next/head'
import React, {useRef, useState} from 'react'
import { Montserrat } from 'next/font/google'
// import Intro from '../components/Intro'
import WeekendEvents from '../components/WeekendEvents'
import ToDo from '../components/ToDo'
import ToStay from '../components/ToStay'
import ToEat from '../components/ToEat'
import { HiOutlineChevronRight } from 'react-icons/hi'
import styles from '@/styles/Intro.module.scss'
import Registry from '../components/Registry'
// import Attire from '../components/Attire'
// import Wedding from '../components/Wedding'
// import styles from '@/styles/Home.module.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  let inputRef = useRef(null);
  const [password, setPassword] = useState(false)

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputRef.current.value),
      }).then((response) => response.json())
      .then((data) => {
        setPassword(data.pw)
      });
    } catch (err) {
        setPassword('')
    }
  }
  return (
    <>
      <Head>
        <title>Love Shines in ATL</title>
        <meta name="description" content="The Celebration of Emily and Kevin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <section className="flex items-center justify-center">
        <div className="container items-center">
          <h1 className={styles.title}>Love</h1>
          {!password &&
            <>
              <div className="container items-center grid grid-cols-1 md:grid-cols-6 gap-0 md:gap-16">
                <section className="col-span-2 px-4 md:px-0 md:col-start-3">
                  <aside className={styles.formButton}>
                    <input ref={inputRef} />
                    <a href="#" onClick={(e) => handleClick(e)}><HiOutlineChevronRight /></a>
                  </aside>
                </section>
              </div>
            </>
          }
          {password &&
            <div className="container items-center text-center grid grid-cols-1 md:grid-cols-12">
              <section className="col-span-12">
                <p className='text-2xl uppercase'><span className="text-base block my-2">The Wedding of</span>Emily Langsenkamp <br /><span className="text-base block my-2">and</span>Kevin Fay</p>
              </section>
            </div>
          }
        </div>
      </section>
      {password &&
      <>
        <WeekendEvents />
        <ToStay />
        <ToEat />
        <ToDo />
        <Registry />
        </>
      }
      </main>
    </>
  )
}