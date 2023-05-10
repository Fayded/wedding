import React from 'react'
import styles from '@/styles/Intro.module.scss'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function Intro() {
  return (
    <section className="flex items-center justify-center">
      <div className="container items-center">
        <h1 className={styles.title}>Loves</h1>
        {!password &&
          <div className="container items-center grid grid-cols-1 md:grid-cols-6">
            <aside className={styles.formButton}>
              <input type="text" ref={inputRef} placeholder="Password" />
              <a href="#" onClick={(e) => handleClick(e)}><HiOutlineChevronRight /></a>
            </aside>
          </div>
        }
      </div>
    </section>
  )
}