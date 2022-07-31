import { screen, render } from '@testing-library/react'

import { PokemonList } from '#/components/pokemon-list'

describe('PokemonList Tests', () => {
  it('renders correctly', () => {
    render(
      <PokemonList
        pokemons={[
          {
            id: 1,
            name: 'Bulbasaur',
            type: 'grass/poison',
            health: 45,
            attack: 49
          },
          {
            id: 2,
            name: 'Ivysaur',
            type: 'grass/poison',
            health: 60,
            attack: 62
          }
        ]}
        loading={false}
      />
    )

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
    expect(screen.getByText(/ivysaur/i)).toBeInTheDocument()
  })

  it('should be loading', () => {
    render(<PokemonList pokemons={[]} loading={true} />)

    expect(screen.getAllByText(/carregando/i)[0]).toBeInTheDocument()
  })
})
