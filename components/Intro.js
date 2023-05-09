import React from 'react'
import styles from '@/styles/Intro.module.scss'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function Intro() {
  return (
    <section className="flex items-center justify-center">
      <div className="container items-center">
        {!password &&
          <div className="container items-center grid grid-cols-6 gap-16">
            <section className="col-span-2">
              <aside className={styles.formButton}>
                <input type="text" ref={inputRef} placeholder="Password" />
                <a href="#" onClick={(e) => handleClick(e)}><HiOutlineChevronRight /></a>
              </aside>
            </section>
          </div>
        }
        <h1 className={styles.title}>Love</h1>
      </div>
    </section>
  )
}