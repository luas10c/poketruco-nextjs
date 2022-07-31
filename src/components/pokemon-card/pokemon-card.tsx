import Image from 'next/image'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import type { IPokemon } from '#/types/pokemon'

interface Props {
  pokemon: IPokemon
}

const colors: Record<string, string> = {
  fire: 'bg-red-400',
  water: 'bg-cyan-400',
  grass: 'bg-lime-400',
  bug: 'bg-purple-400',
  normal: 'bg-zinc-400',
  electric: 'bg-yellow-400',
  ground: 'bg-orange-800',
  poison: 'bg-fuchsia-400',
  fairy: 'bg-rose-400',
  fighting: 'bg-amber-600',
  psychic: 'bg-indigo-400',
  rock: 'bg-blue-400',
  ghost: 'bg-gray-400',
  ice: 'bg-cyan-200',
  dragon: 'bg-orange-200'
}

export const PokemonCard = (props: Props) => {
  const { pokemon } = props

  const pokemon_type = pokemon.type.split('/')[0]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="shrink-0 w-[144px] sm:max-w-[144px] sm:w-[144px] max-w-[92%] mx-auto md:m-0 bg-gray-100 border border-gray-200 shadow-lg rounded-md overflow-hidden hover:z-[999]"
    >
      <header className="h-28">
        <div className={classNames(`h-24 ${colors[pokemon_type]}`)}>
          <div className="relative rounded-lg">
            <span className="bg-white absolute top-1 left-1 p-1 px-2 rounded-lg leading-none font-bold lowercase text-xs">
              {pokemon.type}
            </span>
          </div>
        </div>
        <div className="relative -top-16 w-[85%] mx-auto h-24">
          <Image
            src={require(`../../assets/pokemons/${pokemon.id}.svg`)}
            layout="fill"
            objectFit="contain"
            className="select-none"
            priority
            alt="Charmander"
          />
        </div>
      </header>
      <div className="py-4">
        <div className="py-2 text-center">
          <span>{pokemon.name}</span>
        </div>
        <div className="flex gap-2 mx-1 items-center justify-center">
          <div className="bg-green-400 h-4 px-2 max-w-[92%] leading-0 flex items-center justify-center rounded-full">
            <span className="text-xs uppercase font-medium">
              {pokemon.health} Hp
            </span>
          </div>
          <div className="bg-red-400 h-4 px-2 max-w-[92%] leading-0 flex items-center justify-center rounded-full">
            <span className="text-xs text-white uppercase font-medium">
              {pokemon.attack} At
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
