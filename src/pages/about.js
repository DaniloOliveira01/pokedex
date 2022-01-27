import Image from "next/image"
import styles from '../../styles/About.module.css'
import Head from "next/head"
import { Fragment } from "react"

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>Sobre</title>
      </Head>
      <div className={styles.about}>
        <h1>Sobre o Projeto</h1>
        <p>Charizard bonitinho! 🧡</p>
        <Image src="/images/charizard.png" width="300" height="300" alt="Foto do Charizard" />
      </div>
    </Fragment>
  )
}