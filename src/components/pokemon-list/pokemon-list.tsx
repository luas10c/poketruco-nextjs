import { PokemonCardSkeleton } from '../skeletons'
import { PokemonCard } from '#/components/pokemon-card'

import type { IPokemon } from '#/types/pokemon'

interface Props {
  pokemons: IPokemon[]
  loading?: boolean
}

export const PokemonList = (props: Props) => {
  const { pokemons, loading } = props

  return (
    <div>
      <h3 className="text-center p-4">Lista de Pokemons</h3>
      {loading && (
        <div className="flex gap-2 flex-wrap max-w-[720px] mx-auto justify-center">
          <PokemonCardSkeleton />
          <PokemonCardSkeleton />
          <PokemonCardSkeleton />
          <PokemonCardSkeleton />
        </div>
      )}
      <div className="flex gap-2 flex-wrap max-w-[720px] mx-auto justify-center">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />
        })}
      </div>
    </div>
  )
}
