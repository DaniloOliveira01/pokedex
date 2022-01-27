import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Card from '../../components/Card'
import { Fragment } from 'react'

export async function getStaticProps() {
  const maxPokes = 250
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}?limit=${maxPokes}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <Fragment>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Dex</span></h1>
        <Image src="/images/pokeball.png" width="60" height="60" alt="PokeBall" />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Fragment>
  )
}
