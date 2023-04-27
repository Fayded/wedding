import React, {useRef, useState} from 'react'
import styles from '@/styles/Intro.module.scss'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function Intro() {
  const inputRef = useRef(null);
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
      .then((data) => setPassword(data.pw));
    } catch (err) {
        setPassword("")
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="container items-center">
      <div className="container items-center grid grid-cols-6 gap-16">
          <section className="col-span-2">
            <aside className={styles.formButton}>
              <input ref={inputRef} />
              <a href="#" onClick={(e) => handleClick(e)}><HiOutlineChevronRight /></a>
            </aside>
          </section>
        </div>
        <h1 className={styles.title}>Love</h1>
        <br />
        {/* <p>{!password && password.length >= 3 ? '' : "Sorry, as much as we wouldd love to invite everyone. You weren not invited"}</p> */}
      </div>
    </section>
  )
}