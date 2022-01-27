import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Card.module.css'

export default function Card({ pokemon }) {
  return (
    <div className={styles.cards}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name} />

      <p className={styles.ids}>
        #{pokemon.id}
      </p>
      <h3 className={styles.titles}>
        {pokemon.name}
      </h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.buttons_poke}>
          Detalhes
        </a>
      </Link>
    </div>
  )
}