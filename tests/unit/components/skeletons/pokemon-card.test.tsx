import { screen, render } from '@testing-library/react'

import { PokemonCardSkeleton } from '#/components/skeletons'

describe('PokemonCard Tests', () => {
  it('renders correctly', () => {
    render(<PokemonCardSkeleton />)

    expect(screen.getByText(/carregando/i)).toBeInTheDocument()
  })
})
