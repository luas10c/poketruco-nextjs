import { useState, useEffect } from 'react'

import { PokemonList } from '#/components/pokemon-list'

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/pokemons.json')
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <PokemonList pokemons={pokemons} loading={loading} />
    </div>
  )
}

export default Pokemons
