import Link from "next/link"
import Image from "next/image"

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeBall" />
        <h1>PokeDex</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}