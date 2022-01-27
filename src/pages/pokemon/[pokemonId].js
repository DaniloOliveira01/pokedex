import { Fragment } from "react/cjs/react.production.min"
import Image from "next/image"
import styles from '../../../styles/Pokemon.module.css'

export const getStaticPaths = async () => {
  const maxPokes = 250
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}?limit=${maxPokes}`)
  const data = await res.json()

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json()

  return {
    props: { pokemon: data }
  }
}

export default function Pokemon({ pokemon }) {
  return (
    <section className={styles.pokemon_container}>
      <h1>{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name} />
        <div className={styles.poke_number_id}>
          <h3>Número:</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div className={styles.types_container}>
          <h3>Tipo:</h3>
          <div className={styles.types_container}>
            {pokemon.types.map((item, index) => (
              <span key={index}>{item.type.name}</span>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.poke_height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>          
          </div>
          <div className={styles.poke_weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10} Kg</p>
          </div>
        </div>
    </section>
  )
}