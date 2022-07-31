import { screen, render } from '@testing-library/react'

import { PokemonCard } from '#/components/pokemon-card'

describe('PokemonCard Tests', () => {
  it('renders correctly', () => {
    render(
      <PokemonCard
        pokemon={{
          id: 1,
          name: 'Bulbasaur',
          type: 'grass/poison',
          health: 45,
          attack: 49
        }}
      />
    )

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  })
})
